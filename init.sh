#!/bin/bash
sudo apt update
sudo apt install python3 idle3
touch database
pip install -r requirements.txt
echo 0 >> database
export LC_ALL=en_US.utf-8
export LANG=en_US.utf-8
flask --app app run
