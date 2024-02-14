FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .
RUN npm install

ENV PORT=3001
EXPOSE 3001

CMD ["npm", "run", "dev"]