FROM nginx:1.13.1

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf



EXPOSE 80

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec /usr/sbin/nginx -g 'daemon off;'"]
