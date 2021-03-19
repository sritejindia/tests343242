# Stage 1
FROM node:10-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=node /usr/src/app/dist/shopping /usr/share/nginx/html

COPY ./ssl/ /etc/ssl/

COPY ./nginx.conf /etc/nginx/conf.d/default.conf