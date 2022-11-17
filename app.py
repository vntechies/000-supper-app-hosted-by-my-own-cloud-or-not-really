from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    with open("database", "r") as f:
        count = f.readline()
        if count == "":
            count = 0
        count = int(count) + 1

    with open("database", "w") as f:
        f.write("%s" % (count))

    return """<!DOCTYPE html>
        <html>
        <body>
        <p>Page views: %s</p>
        
        </body>
        </html>
    """ % (
        count
    )
