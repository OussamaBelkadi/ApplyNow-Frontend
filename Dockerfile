# Use the official Node.js 16 base image from Docker Hub
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli@16.2.0

# Copy the project files into the container
COPY . /app

# Install project dependencies
RUN npm install

# Build and serve the Angular app
CMD ng serve --host 0.0.0.0