#!/bin/bash

RELEASE_TYPE=$1
echo "This script needs to be updated for a default demo deployment"
# echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin

# echo "Determining image tag for ${GITHUB_BRANCH} build ..."

# if [[ $RELEASE_TYPE == "release" ]]; then
#     export TAGGED_IMAGE="smartcolumbusos/discovery_ui:${GITHUB_BRANCH}"
# elif [[ $RELEASE_TYPE == "master" ]]; then
#     export TAGGED_IMAGE="smartcolumbusos/discovery_ui:development"
# else
#     echo "Branch should not be pushed to Dockerhub"
#     exit 0
# fi

# echo "Pushing to Dockerhub with tag ${TAGGED_IMAGE} ..."

# docker tag discovery_ui:build "${TAGGED_IMAGE}"
# docker push "${TAGGED_IMAGE}"
