FROM php:8.2-fpm
WORKDIR /usr/share/nginx/html
COPY . .
#COPY ./config/php.ini /usr/local/etc/php
RUN mkdir /var/log/xdebug_log && \
    touch /var/log/xdebug_log/xdebug.log && \
    chmod 666 /var/log/xdebug_log/xdebug.log
RUN apt-get update && \
    apt-get install -y libpq-dev && \
    docker-php-ext-install pdo pdo_pgsql pgsql
RUN pecl install xdebug && \
    docker-php-ext-enable xdebug