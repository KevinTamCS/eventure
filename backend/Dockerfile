FROM node:14.15.1 AS builder
WORKDIR /build
COPY package.json .
RUN npm install
COPY ./src/ ./src/
COPY .eslintrc.json .
COPY tsconfig.json .
RUN npx tsc --build tsconfig.json

FROM node:14.15.1
WORKDIR /backend
COPY --from=builder /build/node_modules/ ./node_modules/
COPY --from=builder /build/out/ ./app/
COPY ./sslcert/ ./sslcert/
CMD ["node", "app/"]
