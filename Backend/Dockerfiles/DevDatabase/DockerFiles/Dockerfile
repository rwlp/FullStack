FROM postgres:latest

ENV POSTGRES_USER=dev
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=devdb

COPY backup.sql /docker-entrypoint-initdb.d/

EXPOSE 5432