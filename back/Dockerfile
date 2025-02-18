# Definição de build para a imagem do Spring Boot
FROM openjdk:17-jdk-slim AS build

WORKDIR /app

COPY mvnw ./
COPY .mvn .mvn
COPY pom.xml .

# Garantir que o Maven wrapper tem permissões de execução
RUN chmod +x ./mvnw || true

# Fazer o download das dependências offline
RUN ./mvnw dependency:go-offline -B

# Copiar o código-fonte e construir o projeto
COPY src src
RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# Definição de produção para a imagem do Spring Boot
FROM openjdk:17-jdk-slim AS production
ARG DEPENDENCY=/app/target/dependency

# Copiar as dependências para o build artifact
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app

# Rodar a aplicação Spring Boot
ENTRYPOINT ["java", "-cp", "app:app/lib/*", "utfpr/edu/bcc3004/pews.PewsApplication"]
