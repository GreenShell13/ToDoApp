FROM node:latest
WORKDIR /app/src/front
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
EXPOSE 3000
CMD [ "yarn", "start" ]
