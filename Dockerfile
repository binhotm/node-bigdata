FROM node:12
WORKDIR /node-mapper
COPY package.json /node-mapper
RUN npm install
COPY . /node-mapper
CMD ["npm", "start"]