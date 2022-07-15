FROM node:lts

RUN groupmod -g 1003 -n hackathon node && \
    mkdir -p /home/node && \
    chown -R node:hackathon /home/node

USER node

ADD --chown=node:hackathon . /home/node/sanuco-backend/

WORKDIR /home/node/sanuco-backend
RUN npm install && \
    npm run build

CMD ["bash", "-c", "npm run start:prod"]
