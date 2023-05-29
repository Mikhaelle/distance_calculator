# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code to the working directory
COPY web-distance-calculator .

# Build the app
RUN npm run build

# Expose the app's port (adjust if necessary)
EXPOSE 3000

# Set the command to run the app
CMD ["npm", "start"]

# to initiate docker
#docker build -t web-distance-calculator .
#docker run -p 3000:3000 web-distance-calculator