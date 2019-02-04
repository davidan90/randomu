FROM node:8-alpine
WORKDIR /home/node/randomu
COPY . ./
RUN npm i --silent
EXPOSE 3000
CMD ["npm", "start"]
