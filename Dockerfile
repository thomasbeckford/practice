FROM node:7
RUN mkdir /docker
ADD . /docker
WORKDIR /docker
RUN npm i
EXPOSE 80
CMD ["npm", "start"]