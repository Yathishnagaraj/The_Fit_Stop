# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript project (if build script exists)
RUN npm run build || echo "No build script, skipping..."

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies if needed for start)
RUN npm ci

# Copy everything from builder
COPY --from=builder /app .

# Create non-root user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001 && \
    chown -R nodejs:nodejs /app

USER nodejs

# Expose port
EXPOSE 3000

# Use npm start (this uses whatever is defined in package.json)
CMD ["npm", "start"]
