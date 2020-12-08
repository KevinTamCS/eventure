# Build React app
FROM node:14.15.1 AS builder

WORKDIR /app

# Install packages
COPY package.json .
RUN npm install

# Build
COPY src/ ./src/
COPY public/ ./public/
COPY .eslintrc.json .
COPY tsconfig.json .
RUN npm run build


# NGINX Server
FROM nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
