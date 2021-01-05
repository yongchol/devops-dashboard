FROM postgres:11.4
ENV POSTGRES_DB sample
EXPOSE 5432
COPY ./schema.sql /docker-entrypoint-initdb.d/