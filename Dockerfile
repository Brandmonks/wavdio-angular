# Build stage Angular
FROM node:16.20.2 as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm ci --force
COPY *.json .
COPY *.js .
COPY .browserslistrc .
COPY src ./src
RUN npm run build
WORKDIR /app/dist
RUN mv wAVdio-de/de de
RUN mv wAVdio-en/en en
RUN mv wAVdio-es/es es
RUN mv wAVdio-fr/fr fr
RUN rm -rf wAVdio-de/* wAVdio-en/* wAVdio-es/* wAVdio-fr/*

# Serve stage
FROM nginx:1.14
COPY --from=build /app/dist /var/www/wavdio/public
RUN rm /usr/share/nginx/html/*
RUN mkdir /etc/nginx/sites-enabled
COPY wavdio.conf /etc/nginx/sites-available/wavdio.conf
RUN ln -s /etc/nginx/sites-available/wavdio.conf /etc/nginx/sites-enabled/wavdio.conf
RUN ln -s /var/www/wavdio/public/de/assets /var/www/wavdio/public/assets
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm /etc/nginx/conf.d/default.conf
RUN mkdir /var/www/wavdio/logs
