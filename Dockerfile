# Use a imagem oficial do Node.js na versão 18.16.0 como base
FROM node:18.16.0-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para o diretório de trabalho no contêiner
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói a aplicação Next.js
RUN npm run build

# Exponha a porta 3000 que o Next.js usa por padrão
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "run", "start"]
