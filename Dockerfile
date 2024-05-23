# Use a imagem oficial do Node.js na versão 18.16.0 como base
FROM node:18.16.0-alpine

# Instala dependências nativas necessárias
RUN apk add --no-cache python3 make g++

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala todas as dependências do projeto
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Exponha a porta 3000 que o Next.js usa por padrão
EXPOSE 3000

# Comando para iniciar a aplicação quando o contêiner for iniciado
CMD ["npm", "run", "dev"]
