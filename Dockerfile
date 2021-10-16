FROM node:alpine3.14 as build
RUN mkdir -p /app

WORKDIR /app

COPY package.json /app/
RUN npm install --legacy-peer-deps

COPY . /app/
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/dumapp /usr/share/nginx/html

