# Dockerfile

Dockerfile instructions.

## Basic Dockerfile

```dockerfile
# Base image
FROM node:18-alpine

# Working directory
WORKDIR /app

# Copy files
COPY package*.json ./
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start command
CMD ["npm", "start"]
```

## Instructions

```dockerfile
# Base image
FROM python:3.12-slim

# Set environment
ENV APP_ENV=production

# Copy file
COPY . .

# Run command
RUN pip install -r requirements.txt
```

## Multi-stage Build

```dockerfile
# Build stage
FROM node:18 AS builder
WORKDIR /app
RUN npm install
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
CMD ["node", "dist/index.js"]
```