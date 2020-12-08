FROM node:14.15.1

WORKDIR /backend

COPY package.json .
RUN npm install

COPY src/ .
COPY .eslintrc.json .
COPY tsconfig.json .
RUN npx tsc --build tsconfig.json

# Backend
EXPOSE 8080

CMD ["npm", "start"]
