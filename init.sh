#!/bin/bash
#sudo apt update
#sudo apt install python3 idle3
touch database
pip install -r requirements.txt
echo 0 >> database
export FLASK_APP=app.py
python3 -m flask run --host=0.0.0.0
