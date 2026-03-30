# ---------- 1️⃣ Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Build-time args (set in Dokploy → Environment → Build-time Variables)
ARG REACT_APP_SUPABASE_URL
ARG REACT_APP_SUPABASE_ANON_KEY
ARG REACT_APP_API_URL

ENV REACT_APP_SUPABASE_URL=$REACT_APP_SUPABASE_URL
ENV REACT_APP_SUPABASE_ANON_KEY=$REACT_APP_SUPABASE_ANON_KEY
ENV REACT_APP_API_URL=$REACT_APP_API_URL

# Necesario para que CRA funcione con Node 20
ENV NODE_OPTIONS=--openssl-legacy-provider

# Instalamos dependencias
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copiamos todo el código fuente de /frontend
COPY frontend/ ./

# Generamos la versión de producción
RUN npm run build


# ---------- 2️⃣ Runtime stage ----------
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-p", "3000"]
