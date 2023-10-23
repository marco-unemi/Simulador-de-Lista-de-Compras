# Archivo index.py
from flask import Flask, render_template

app = Flask(__name__)

#clase lista
class Lista:
    def __init__(self, producto, cantidad):
        self.producto = producto
        self.cantidad = cantidad



@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)

