# Etapa 1: Construcción de React
FROM node:20-alpine AS build

WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm ci

# Copiamos el resto del código
COPY . .

# Construimos la versión de producción
RUN npm run build

# Etapa 2: Servidor Web (Nginx)
FROM nginx:alpine

# Entramos hasta 'dist/public' para sacar las cosas de la caja
COPY --from=build /app/dist/public /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx
COPY client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]