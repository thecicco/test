FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN ls

EXPOSE 8000

CMD ["node","index.js"]

