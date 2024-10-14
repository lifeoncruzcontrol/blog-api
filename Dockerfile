# syntax=docker/dockerfile:1
FROM node:latest

# Create app directory with proper permissions
RUN mkdir -p /home/blog-api

WORKDIR /home/blog-api

# Copy package.json and package-lock.json first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies as root
RUN npm install

# Copy the rest of the app’s source code
COPY . .

# Expose the port your app will run on
EXPOSE 3000 

# Build the application
RUN npm run build

# Start the application
CMD ["npm", "start"]

