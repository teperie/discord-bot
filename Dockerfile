FROM node:lts-alpine

# Set temp directory
WORKDIR /app

# Move source files
COPY dist ./dist

# Move package.json
COPY package.json .

# Install dependencies
RUN npm install --omit=dev

# Start bot
CMD [ "npm", "run", "start" ]
