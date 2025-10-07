FROM php:8.2-apache

WORKDIR /var/www/html

# Optional: Install Composer globally if needed
# COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Copy application code
COPY . /var/www/html

# Set proper permissions (optional)
RUN chown -R www-data:www-data /var/www/html

# Change Apache to listen on port 8080 instead of 80
RUN sed -i 's/80/8080/g' /etc/apache2/ports.conf /etc/apache2/sites-available/000-default.conf

# Expose port 8080 for Apache binding
EXPOSE 8080

# Switch to non-root user
USER 1000:1000