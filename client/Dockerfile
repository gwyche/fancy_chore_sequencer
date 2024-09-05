# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./ 

# Install project dependencies
RUN npm install

# Install Vite globally
RUN npm install -g create-vite

# Create a new Vite project
RUN create-vite my-app --template react

# Change the working directory to the newly created project
WORKDIR /app/my-app

# Install project dependencies for the Vite project
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose a port (if needed)
# EXPOSE <port>

# Define the command to run your application
CMD [ "npm", "start" ]