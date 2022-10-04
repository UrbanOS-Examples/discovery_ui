FROM node:14.17.4-alpine AS builder
WORKDIR /app/src

# Copy only the needed files to help docker caching
COPY .babelrc package-lock.json package.json webpack.config.js nginx-default.conf ./
COPY src ./src
COPY test-helpers ./test-helpers
COPY config ./config

RUN npm ci
RUN npm run build

RUN chgrp -R 0 /app/src && \
    chmod -R g+rwX /app/src

FROM nginx:alpine
COPY docker_assets/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/src/dist /usr/share/nginx/html
COPY --from=builder /app/src/nginx-default.conf /etc/nginx/conf.d/default.conf
RUN apk update && apk upgrade
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
