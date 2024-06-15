FROM node:20 AS build_stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm install && npm run test && npm run build


FROM nginx:1.25-alpine

COPY --from=build_stage /usr/src/app/dist /usr/share/nginx/html
