FROM node:10-alpine
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app/client
COPY package.json /usr/src/app/client/package.json
RUN npm install
COPY ./dist /usr/src/appclient/dist
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY ./dist /usr/src/app/dist
EXPOSE 3000
CMD ["node", "--expose-gc", "dist/index.js"]