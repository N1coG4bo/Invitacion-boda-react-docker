# Etapa 1: Construcción (Build)
# Usamos una imagen que ya tiene Maven y Java 21
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Copiamos el código fuente dentro del contenedor
WORKDIR /app
COPY pom.xml .
COPY src ./src

# Compilamos el proyecto (Saltando los tests para ir rápido)
RUN mvn clean package -DskipTests

# Etapa 2: Ejecución (Run)
# Usamos una imagen ligera solo con Java para correr el programa
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copiamos el .jar generado en la etapa anterior
COPY --from=build /app/target/*.jar app.jar

# Creamos la carpeta para la Wallet (se llenará luego)
RUN mkdir -p /app/wallet

# Exponemos el puerto 8080
EXPOSE 8080

# Comando para iniciar la app
ENTRYPOINT ["java", "-jar", "app.jar"]