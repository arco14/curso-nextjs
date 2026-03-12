# Version de node
FROM node:22-alpine 
# Directorio inicial de la aplicacion
WORKDIR /app
# Se  crea una compia
COPY package.json / 
# Comandos para levantar la aplicacion
RUN npm install
COPY . ./
# Construilara para producion
RUN npm run build
# Habilitar el puertp
EXPOSE 3000
#Comandos de ejecucion
CMD [ "npm", "start" ]

# Comando para correr aplicacion desde la terminal 
# docker container run -dp 3000:3000 next-first-steps  