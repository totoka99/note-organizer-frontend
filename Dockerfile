# FROM node:latest
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build --prod
# EXPOSE 4200
# CMD [ "npm", "run", "start" ]

# Use an official Node runtime as a parent image
FROM node:18 as builder

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@14.2.10

# Install project dependencies
RUN npm install

# Copy the current directory contents into the container at /app
COPY . .

# Build the Angular app
RUN ng build 

# Use an official Nginx image as a parent image
FROM nginx:alpine

# Copy the Angular build from the builder stage to the NGINX web server's public directory
COPY --from=builder /app/dist/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX when the container runs
CMD ["nginx", "-g", "daemon off;"]