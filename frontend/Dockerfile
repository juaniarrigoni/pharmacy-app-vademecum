FROM node:20-alpine AS build

WORKDIR /app

# Install dependencies. Use wildcard to handle missing package-lock.json gracefully.
COPY package.json package-lock.json* ./
RUN npm install

# Copy everything from the frontend folder
COPY . .

# IMPORTANT: Fix for OpenSSL error in newer Node versions when using older React Scripts
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React production bundle
RUN npm run build

# Stage 2: Serve the production-ready code using a lightweight Node server
FROM node:20-alpine

WORKDIR /app

# Install single-page application server
RUN npm install -g serve

# Copy the built files from the previous stage
COPY --from=build /app/build ./build

# The port your frontend runs on
EXPOSE 3000

# Start the server (serve -s automatically redirects all 404s to index.html for React Router)
CMD ["serve", "-s", "build", "-p", "3000"]
