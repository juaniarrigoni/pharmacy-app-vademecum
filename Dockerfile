# ─── Stage 1: Build ───────────────────────────────────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

# Install deps first (better layer caching)
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

# ─── Stage 2: Serve with nginx ────────────────────────────────────────────────
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/build /usr/share/nginx/html

# nginx config for React Router (SPA fallback)
RUN echo 'server { \
  listen 80; \
  root /usr/share/nginx/html; \
  index index.html; \
  location / { \
    try_files $uri $uri/ /index.html; \
  } \
  gzip on; \
  gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript; \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
