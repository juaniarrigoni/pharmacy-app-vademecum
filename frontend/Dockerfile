# ---------- 1️⃣ Build stage ----------
FROM node:20-alpine AS build

WORKDIR /app

# Build-time args (Dokploy → Environment → Build-time Variables)
ARG REACT_APP_SUPABASE_URL
ARG REACT_APP_SUPABASE_ANON_KEY
ARG REACT_APP_API_URL

ENV REACT_APP_SUPABASE_URL=$REACT_APP_SUPABASE_URL
ENV REACT_APP_SUPABASE_ANON_KEY=$REACT_APP_SUPABASE_ANON_KEY
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV NODE_OPTIONS=--openssl-legacy-provider

# El contexto de Docker ES la carpeta frontend/ — los paths son relativos a ella
COPY package.json package-lock.json* ./
RUN npm install
COPY . ./
RUN npm run build


# ---------- 2️⃣ Runtime stage ----------
FROM node:20-alpine

WORKDIR /app
RUN npm install -g serve

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["serve", "-s", "build", "-p", "3000"]
