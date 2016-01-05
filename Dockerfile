FROM node
MAINTAINER Warren Seymour <warren@radify.io>

RUN mkdir -p /usr/local/simple-faye
WORKDIR /usr/local/simple-faye

COPY . /usr/local/simple-faye
RUN npm install
RUN node_modules/.bin/gulp build
RUN npm prune --production

CMD ["node", "/usr/local/simple-faye"]
