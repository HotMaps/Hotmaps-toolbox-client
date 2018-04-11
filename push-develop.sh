#!/usr/bin/env bash
ng build
git add .
echo Hello, Can you please add the commit message?
read commitmessage
git commit -m commitmessage
git push origin origin/develop
ssh crem@vlhh2020.hevs.ch <<'ENDSSH'
#commands to run on remote host

sudo -i
sh /var/hotmaps/scripts/toolbox-client/update.sh

ENDSSH

