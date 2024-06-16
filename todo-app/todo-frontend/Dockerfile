FROM node:20 AS testing_stage
WORKDIR /usr/src/app
COPY . .
RUN npm install && npm run test


FROM node:20 AS build_stage
WORKDIR /usr/src/app
COPY --from=testing_stage /usr/src/app/ .
ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=${VITE_BACKEND_URL}
RUN npm run build


FROM nginx:1.25-alpine
COPY --from=build_stage /usr/src/app/dist /usr/share/nginx/html
