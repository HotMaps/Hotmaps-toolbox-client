#!/bin/bash
BASEDIR=$(dirname $PWD)
IMAGE_NAME='hotmaps/toolbox-client'
PORT='80'

# check dependencies
if ! hash "docker-machine" 2>/dev/null;
then
    echo "docker-machine can't be found"
    exit 1
fi
# get first machine name
#DOCKER_MACHINE_NAME=$(docker-machine ls --format "{{.Name}}" | head -1)
#echo $machine_name

if [[ -z "$DOCKER_MACHINE_NAME" ]]; then
    echo "DOCKER_MACHINE_NAME environment variable isn't set. Have you run docker-machine env?"
    exit 1
fi

# update the compose files
ip=$(docker-machine ip $DOCKER_MACHINE_NAME)

echo ip for $DOCKER_MACHINE_NAME is $ip
echo Creating container...

docker run -d -v "${BASEDIR}/dist:/usr/share/nginx/html" -p ${PORT}:80 -it ${IMAGE_NAME}
echo "Container creation script executed correctly (make sur the new container was successfuly added)"
