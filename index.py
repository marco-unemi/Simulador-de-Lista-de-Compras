from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__, template_folder='templates') 

# Inicialización de la lista de compras
lista_de_compras = []

@app.route('/')
def index():
    return render_template('index.html', lista=lista_de_compras)

@app.route('/agregar', methods=['POST'])
def agregar_articulo():
    nombre = request.form['nombre']
    cantidad = int(request.form['cantidad'])
    lista_de_compras.append((nombre, cantidad))
    return redirect(url_for('index'))

@app.route('/eliminar', methods=['POST'])
def eliminar_articulo():
    global lista_de_compras
    nombre = request.form['nombre']
    lista_de_compras = [item for item in lista_de_compras if item[0] != nombre]
    return redirect(url_for('index'))

@app.route('/verificar', methods=['POST'])
def verificar_disponibilidad():
    nombre = request.form['nombre']
    disponibilidad = nombre in [item[0] for item in lista_de_compras]
    return render_template('verificar.html', nombre=nombre, disponibilidad=disponibilidad)

@app.route('/vaciar', methods=['POST'])
def vaciar_carrito():
    global lista_de_compras
    lista_de_compras = []
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)