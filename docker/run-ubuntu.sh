#!/bin/bash
BASEDIR=$(dirname $PWD)
IMAGE_NAME='hotmaps/toolbox-client'
PORT='80'

# update the compose files
ip='localhost'

echo ip for docker is $ip
echo Creating container...

id=$(docker run -d -v "${BASEDIR}/dist:/usr/share/nginx/html" -p ${PORT}:80 -it ${IMAGE_NAME})
exit_code=$?

if [ ${exit_code} = 0 ]
    then
	    echo "Container creation script executed correctly (make sur the new container was successfuly added)"
		echo "Container's id: ${id}"
	else
	    echo "An error occurred! (exit code: ${exit_code})"
		docker stop ${id} >/dev/null
		docker rm ${id} >/dev/null
fi
