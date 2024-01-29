# Uso de node:latest diretamente (sem estágio de construção separado)

FROM node:latest

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários para instalar as dependências
COPY package*.json ./


#ENV proxy mackcloud
ENV http_proxy http://mackcloud:cloud2019@172.16.50.1:8080
ENV https_proxy http://mackcloud:cloud2019@172.16.50.1:8080

# Instalar dependências
RUN npm install

# Copiar todo o restante do código para o contêiner
COPY . .

# Executar o build
RUN npm run build

# Expor a porta em que o aplicativo está configurado para ouvir (se necessário)
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]