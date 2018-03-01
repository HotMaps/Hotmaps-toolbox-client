#!/usr/bin/env bash
ng build
git add .
echo Hello, Can you please add the commit message?
read commitmessage
git commit -m commitmessage
git push origin develop
