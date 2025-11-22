FROM node:20-alpine

WORKDIR /app

# Copy only package files first
COPY package.json package-lock.json ./

# Install dependencies using npm ci (clean, reproducible)
RUN npm ci --omit=dev

# Copy the rest of the backend code
COPY . .

# Expose backend port
EXPOSE 5000

# Start your app
CMD ["npm", "start"]
