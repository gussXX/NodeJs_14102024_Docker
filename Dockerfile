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

# Copia a chave pública e privada para o contêiner
COPY id_rsa /root/.ssh/id_rsa
COPY id_rsa.pub /root/.ssh/id_rsa.pub

# Defina as permissões corretas para as chaves SSH
RUN chmod 600 /root/.ssh/id_rsa && chmod 644 /root/.ssh/id_rsa.pub

# Expor a porta que a aplicação irá usar
EXPOSE 3000

CMD ["npm", "start"]