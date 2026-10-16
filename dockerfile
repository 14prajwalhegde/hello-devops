FROM node:22-alpine

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

COPY --chown=node:node package.json ./
COPY --chown=node:node app.js server.js ./

USER node

EXPOSE 3000

CMD ["npm", "start"]