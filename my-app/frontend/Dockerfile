# Install Stage
FROM node:16 AS base
WORKDIR /usr/src/app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Test Stage
FROM base AS test-stage
RUN CI=true npm test

# Build Stage
FROM test-stage AS build-stage
ENV REACT_APP_API_URL=http://localhost:8080/api
RUN npm run build

# Production Stage
FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
