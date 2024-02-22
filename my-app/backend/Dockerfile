FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm ci --only=production

EXPOSE 3001

USER node
CMD npm start