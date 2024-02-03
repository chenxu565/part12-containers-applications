FROM node:16 AS build-stage
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:3000
RUN npm run build

FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
# Start Nginx and ensure it stays running
CMD ["nginx", "-g", "daemon off;"]