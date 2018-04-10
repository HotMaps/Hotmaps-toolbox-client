#!/usr/bin/env bash
ng build
git add .
echo Hello, Can you please add the commit message?
read commitmessage
git commit -m commitmessage
git push origin origin/develop
ssh crem@vlhhotmapsdev.hevs.ch
sudo -i
sh /var/hotmaps/scripts/toolbox-client/update.sh


