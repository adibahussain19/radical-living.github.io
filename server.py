import os
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

# client = MongoClient('localhost', 27017)

# db = client.flask_db
# todos = db.todos

# ROUTES
@app.route('/', methods=("GET"))
def welcome():
    return render_template('index.html')
    # return render_template('navbar.html')

@app.route('/about', methods=("GET"))
def about():
    return render_template('about.html')

@app.route('/programs', methods=("GET"))
def programs():
    return render_template('programs.html')

@app.route('/highlights', methods=("GET"))
def highlights():
    return render_template('highlights.html')

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run(threaded=True, port=5000)