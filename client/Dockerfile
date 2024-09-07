# Use an official node image as the base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies (including devDependencies to get vite)
RUN npm install --include=dev

# Copy the rest of the application code
COPY . .

# Expose the Vite development port
EXPOSE 5173

# Start the Vite application
CMD ["npm", "run", "dev", "--", "--host"]

