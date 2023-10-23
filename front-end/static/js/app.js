class Product {
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

class UI {
    addProduct(product) {
        const tableProductos = document.getElementById('lista-productos').getElementsByTagName('tbody')[0]
        const element = document.createElement('tr')
        element.innerHTML = `
            <tr>
                <td class="bg-secondary text-white">${product.nombre}</td>
                <td class="bg-secondary text-white">${product.cantidad}</td>
                <td class="bg-secondary">
                    <button type="button" class="btn btn-danger btn-sm" name="delete" id="id-borrar">
                        Borrar
                    </button>
                </td>
            </tr>
        `;
        tableProductos.appendChild(element)
    }

    resetForm() {
        document.getElementById('id-form-productos').reset()
    }

    deleteProduct(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.remove()
            this.showMessage('Producto eliminado satisfactoriamente', 'danger')
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass} m-5 w-auto text-center`
        div.role = 'alert'
        div.appendChild(document.createTextNode(message))
        // Mostrando en elDOM
        const container = document.querySelector('.container-fluid')
        const app = document.querySelector('#app')
        container.insertBefore(div, app)
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} m-5 w-auto`;
        div.role = 'alert';
        div.appendChild(document.createTextNode(message));
        document.body.appendChild(div);
        setTimeout(function(){
            document.querySelector('.alert').remove()
        }, 2000)
    }
    
}

// eventos
const formProductos = document.getElementById('id-form-productos');

formProductos.addEventListener('submit', (event) => {
    event.preventDefault();
    const producto = document.getElementById('id-producto').value;
    const cantidad = document.getElementById('id-cantidad').value;

    const product = new Product(producto, cantidad);
    const ui = new UI();

    ui.addProduct(product);
    ui.resetForm()
    ui.showMessage('Producto agregado satisfactoriamente', 'success')
});

document.getElementById('lista-productos').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteProduct(e.target)
})
