# Step 1: Use an official Node.js runtime as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json (or yarn.lock)
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the React project into the container
COPY . .

# Step 6: Expose the port the app runs on
EXPOSE 3000

# Step 7: Start the React application
CMD ["npm", "start"]
