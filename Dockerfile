FROM php:8.2-apache

# msmtp acts as "sendmail" for PHP: mail() forwards messages to Mailpit
RUN apt-get update \
    && apt-get install -y --no-install-recommends msmtp \
    && rm -rf /var/lib/apt/lists/*

RUN printf 'account default\nhost mailpit\nport 1025\nfrom noreply@web2risk.test\n' > /etc/msmtprc \
    && echo 'sendmail_path = "/usr/bin/msmtp -t"' > /usr/local/etc/php/conf.d/mail.ini

# Move PHP errors to the container logs, not in the responses
RUN echo 'display_errors = Off' > /usr/local/etc/php/conf.d/errors.ini

# Deny Apache from serving hidden files and directories (.env, .git, ...)
RUN echo 'RedirectMatch 404 /\.' > /etc/apache2/conf-available/deny-dotfiles.conf \
    && a2enconf deny-dotfiles

# Make the browser revalidate every file, so CSS/JS changes show up on reload
RUN a2enmod headers \
    && echo 'Header set Cache-Control "no-cache"' > /etc/apache2/conf-available/no-cache.conf \
    && a2enconf no-cache

WORKDIR /var/www/html
