#Using an alpine version of node
FROM node:8.7.0-alpine

#Create app directory and use it as the working directory
RUN mkdir -p /sahayak
WORKDIR /sahayak

#Copying the package files from localstorage to image
COPY package.json /sahayak
COPY package-lock.json /sahayak

#Installing dependencies
RUN npm install

#Copying all the files from localstorage to image
COPY . /sahayak

#Starting the server using nodemon
CMD ["npm","run","start"]
