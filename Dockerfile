# Base image
FROM library/nginx:1.11.8-alpine

# Maintainer
MAINTAINER Compiax (Pty) Ltd. <admin@compiax.io>

# Copy source
COPY docker-conf/nginx /etc/nginx/conf.d
COPY distr /usr/share/nginx/html