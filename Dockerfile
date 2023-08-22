FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY . .

# Build the application for production with the ng build command
RUN npm run build --prod

# Expose port 80 to allow outside access
EXPOSE 4200

# Start the application with the command 'npm run start:prod'
CMD [ "npm", "run", "start" ]