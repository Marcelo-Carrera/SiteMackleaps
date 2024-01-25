# Uso de node:latest diretamente (sem estágio de construção separado)

FROM node:latest

WORKDIR /usr/src/app

# Copiar apenas os arquivos necessários para instalar as dependências
COPY package*.json ./

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
