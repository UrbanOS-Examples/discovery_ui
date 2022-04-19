FROM node:14.17.4-alpine AS builder
RUN chgrp -R 0 ${HOME} && \
    chmod -R g+rwX ${HOME}

COPY . /app/src
WORKDIR /app/src

RUN npm ci
RUN npm test
RUN npm run build

FROM nginxinc/nginx-unprivileged

# RUN chgrp -R 0 /usr/share/nginx && \
#     chmod -R g+rwX /usr/share/nginx

COPY --from=builder /app/src/dist ${HOME}/nginx/html
COPY --from=builder /app/src/run.sh ${HOME}/run.sh
COPY --from=builder /app/src/nginx-default.conf /etc/nginx/conf.d/default.conf.tpl

WORKDIR ${HOME}/nginx/html
USER default
CMD ${HOME}/run.sh
