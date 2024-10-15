#IMAGEM USADA
FROM gussxx/0241014_node:1.0

#PASTA PARA TRABALHO
WORKDIR /data

#INSTALAR AS DEPENDENCIAS
COPY package*.json ./ 
RUN npm install 

RUN npm install cors dotenv express morgan nodemon os

# Copiar o restante do código da aplicação
COPY . .

RUN git config --global user.name "gussxx" && \
    git config --global user.email "gus7avo182@gmail.com"


# Expor a porta que a aplicação irá usar
EXPOSE 3000

CMD ["npm", "start"]