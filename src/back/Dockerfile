FROM php:8.2-fpm
WORKDIR /usr/share/nginx/html
COPY . .
RUN mkdir /var/log/xdebug_log && \
    touch /var/log/xdebug_log/xdebug.log && \
    chmod 666 /var/log/xdebug_log/xdebug.log
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql && \
    docker-php-ext-install pdo pdo_pgsql pgsql && \
    docker-php-ext-enable pdo_pgsql
RUN pecl install xdebug && \
    docker-php-ext-enable xdebug