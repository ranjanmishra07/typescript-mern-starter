FROM node:10-alpine
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app/client
COPY package.json /usr/src/app/client/package.json
RUN npm install
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 3000
CMD ["npm","run","start-prod"]