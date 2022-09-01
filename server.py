import os
from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)

port = int(os.environ.get('PORT', 5000))

# client = MongoClient('localhost', 27017)

# db = client.flask_db
# todos = db.todos

# ROUTES
@app.route('/')
def welcome():
    return render_template('index.html')
    # return render_template('navbar.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/programs')
def programs():
    return render_template('programs.html')

@app.route('/highlights')
def highlights():
    return render_template('highlights.html')

if __name__ == '__main__':
    app.run(threaded=True, port=5000)