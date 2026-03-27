# ---------- 1️⃣ Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos el .env que está en la carpeta /frontend (el contexto de build es la raíz del repo)
COPY frontend/.env ./.env

# Instalamos dependencias (package.json está en /frontend)
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm install

# Copiamos todo el código fuente de /frontend
COPY frontend/ ./

# Necesario para que CRA funcione con Node 20
ENV NODE_OPTIONS=--openssl-legacy-provider

# Generamos la versión de producción
RUN npm run build


# ---------- 2️⃣ Runtime stage ----------
FROM node:20-alpine

WORKDIR /app
# Servimos la app estática con “serve”
RUN npm install -g serve

# Copiamos la carpeta build que se creó en la etapa anterior
COPY --from=build /app/build ./build

# El contenedor escucha en el puerto 3000 (el que usará Traefik/Dokploy)
EXPOSE 3000

# Arrancamos el servidor estático
CMD ["serve", "-s", "build", "-p", "3000"]
