# Estágio de construção
FROM node:latest AS build

WORKDIR /usr/src/app

COPY package.json ./


RUN npm install --production

COPY . .

RUN npm run build

# Estágio de produção
FROM node:latest

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/package.json ./
COPY --from=build /usr/src/app/public ./public
COPY --from=build /usr/src/app/.next ./.next


RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
