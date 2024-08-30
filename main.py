from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/venue')
def venues():
    return render_template('venues.html')

@app.route('/catering')
def catering():
    return render_template('catering.html')

@app.route('/pricing')
def pricing():
    return render_template('pricing.html')

@app.route('/destination')
def destination():
    return render_template('destination.html')

if __name__ == '__main__':
    app.run(debug=True)
