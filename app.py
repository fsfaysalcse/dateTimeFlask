from flask import Flask, render_template
import requests
app = Flask(__name__)

@app.route('/')
def getCurrentTimeFromApi():
    apiUrl = "http://worldtimeapi.org/api/timezone/Asia/Kuala_Lumpur"
    respone = requests.get(apiUrl)
    # Render index html
    return render_template('index.html', faysal=respone.json())

if __name__ == '__main__':
   app.run(debug = True)