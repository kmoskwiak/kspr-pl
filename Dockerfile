FROM node:latest
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app
ADD https://api.github.com/users/kmoskwiak/repos /app/server/repos.json
EXPOSE 8000
CMD [ "npm", "start"]