# Stage 1 - Build
FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Serve
FROM node:22-alpine
RUN npm install -g serve
COPY --from=builder /app/dist /app/dist
WORKDIR /app
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]