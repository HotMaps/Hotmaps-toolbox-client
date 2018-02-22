#!/usr/bin/env bash
ng build
git add .
read commitmessage
git commit -m commitmessage
git push origin develop
