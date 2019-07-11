Este projeto necessita do dokcer para rodar suas dependências.

## 1 - Levantar o banco de dados

docker run \
    --name postgres \
    -p 5432:5432 \
    -d \
    -e DB_NAME=gestaoprocesso \
    -e DB_USERNAME=gestaoprocesso \
    -e DB_PASSWORD=gestaoprocesso123 \
    justiandre/test-temp-pj-spec-gestao-processos-db:latest

## 2 - Levantar o back-end

docker run \
    --name app \
    -p 9090:8080 \
    -d \
    --link postgres:postgres \
    -e SPRING_PROFILES_ACTIVE=producao \
    -e APP_DB_URL=jdbc:postgresql://postgres:5432/gestaoprocesso \
    -e APP_DB_USERNAME=gestaoprocesso \
    -e APP_DB_PASSWORD=gestaoprocesso123 \
    justiandre/test-temp-pj-spec-gestao-processos-app-backend:latest

## 3 - Instalar as dependências do front-end

No diretório do projeto rodar : npm install

## 4 - Levantar o front-end (ambiente de desenvolvimento)

No diretório do projeto rodar : npm start

## Observação 

A aplicação do back-end esta rejeitando as requests por, aparentemente, não estar com o cors configurado. 

Como medida paliativa utilizei de uma instância do google chrome que ignora o preflight request .

Segue link do tutorial: https://alfilatov.com/posts/run-chrome-without-cors/
