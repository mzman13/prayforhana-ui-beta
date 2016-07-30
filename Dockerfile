FROM node:6.3.1-slim

RUN npm install -g angular-cli

COPY ./dist /dist/

WORKDIR /dist

EXPOSE 4200

CMD ["ng", "serve", "--prod"]