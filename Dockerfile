FROM node:7
RUN mkdir /practice
ADD . /practice
WORKDIR /practice
RUN npm i
EXPOSE 80
CMD ["npm", "start"]