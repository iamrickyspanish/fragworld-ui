FROM node:16.20.0

ADD . /app
WORKDIR /app

CMD ["npm", "start"]