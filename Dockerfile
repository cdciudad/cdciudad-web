### Stage 1: Build

FROM node:16.15-alpine as build
WORKDIR /app
COPY ./cdciudad-web/package.json ./cdciudad-web/package-lock.json ./
RUN npm install
COPY ./cdciudad-web ./
RUN npm run build --prod

### Stage 2: nginx

FROM nginx:1.17.1-alpine as prod-stage
COPY --from=build ./app/dist/cdciudad-web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]