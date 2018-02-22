#!/usr/bin/env bash
echo please find your branch below?
git branch
echo you modify this files
git status
echo I add this file to the changes
git add .
echo Hello, Can you please add the commit message?
read commitmessage
git commit -m commitmessage
echo  what is the name of your branch?
read branchname
git push origin branchname
