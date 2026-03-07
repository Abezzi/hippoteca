# 1. Build React frontend
FROM node:20 AS build-frontend
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

# 2. Production image with Express + built frontend
FROM node:20-slim
WORKDIR /app

# Copy backend
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm ci --only=production

# Copy built Elstar files
COPY --from=build-frontend /app/frontend/dist ../frontend/dist

# Copy backend code
COPY backend/ .

EXPOSE 8080

# Start your Express server (adjust if your file is index.js)
CMD ["node", "server.js"]
