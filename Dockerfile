FROM nginx:1.17.1-alpine
COPY /dist/barcamp-front /usr/share/nginx/html
