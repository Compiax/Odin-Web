# Base image
FROM library/nginx:1.11.8-alpine

# Maintainer
MAINTAINER Compiax (Pty) Ltd. <admin@compiax.io>

# Copy source
COPY ./docker/nginx /etc/nginx/conf.d
COPY ./dist /usr/share/nginx/html
