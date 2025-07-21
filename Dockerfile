FROM node:20.18.2-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY dist/ ./src

RUN apk add --no-cache openssl libssl3 

RUN mkdir media
RUN mkdir media/output

RUN npm install --only=production

EXPOSE 8000 8000

CMD ["node", "src/Index.js"]