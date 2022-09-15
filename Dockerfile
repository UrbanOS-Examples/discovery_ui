FROM node:14.17.4-alpine AS builder
WORKDIR /app/src

# Copy only the needed files to help docker caching
COPY .babelrc package-lock.json package.json webpack.config.js ./
COPY src ./src
COPY test-helpers ./test-helpers
COPY config ./config

RUN npm ci
RUN npm test
RUN npm run build

RUN chgrp -R 0 /app/src && \
    chmod -R g+rwX /app/src

FROM registry.access.redhat.com/ubi8/nginx-118:1-80
ENV HOME=/opt/app-root/src

COPY --from=builder /app/src/dist ${HOME}
COPY run.sh ${HOME}

ENV PORT 8080
EXPOSE ${PORT}
WORKDIR ${HOME}

# =========================================================
#  START PATCH: Solve following
#  Urllib3 1.26.5 includes a fix for CVE-2021-33503: An issue was discovered in urllib3 before 1.26.5. When provided with a URL containing many @ characters in the authority component, the authority regular expression exhibits catastrophic backtracking, causing a denial of service if a URL were passed as a parameter or redirected to via an HTTP redirect. https://github.com/advisories/GHSA-q2q7-5pp4-w6pg
# =========================================================
USER root
COPY docker_assets/centos.repo /etc/yum.repos.d/centos.repo
RUN yum upgrade python3-urllib3 -y
# =========================================================
#  END PATCH
# =========================================================

USER default
CMD ./run.sh
