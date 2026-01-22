# Uses node v 22 as base image
FROM node:22

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["nodemon", "--legacy-watch", "index.js"]

