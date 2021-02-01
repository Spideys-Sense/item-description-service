FROM node:14
WORKDIR /user/src/app
COPY package*.json ./
RUN npm install
RUN npm build
COPY . .
EXPOSE 1001
CMD ["node", "server"]