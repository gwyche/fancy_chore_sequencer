# Use a lightweight Node.js image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies using npm
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port Vite runs on (usually 5173 by default)
EXPOSE 5173

# Command to run Vite development server
CMD ["npm", "run", "dev"]
