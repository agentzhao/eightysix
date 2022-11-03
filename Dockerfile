FROM node:lts-alpine

# set the working direction
WORKDIR /app

# install app dependencies
COPY package*.json ./

RUN npm install

COPY . ./

RUN mkdir /app/node_modules/.vite && chown -R node /app/node_modules && chown -R node /app/dist

# start app
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
