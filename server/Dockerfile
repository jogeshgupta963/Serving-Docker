FROM node:17-alpine

RUN npm i -g nodemon 

WORKDIR ./app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 5000

CMD ["nodemon","app.js"]

