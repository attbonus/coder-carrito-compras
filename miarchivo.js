document.addEventListener('DOMContentLoaded', () => {

    
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Maruchan',
            precio: 12,
            imagen: 'https://images.unsplash.com/photo-1543806053-d4617b244862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGF6YSUyMGRlJTIwZmlkZW9zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 2,
            nombre: 'Tomates',
            precio: 14.5,
            imagen: 'https://images.unsplash.com/photo-1594057687713-5fd14eed1c17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dG9tYXRlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 3,
            nombre: 'Jabon',
            precio: 19,
            imagen: 'https://images.unsplash.com/photo-1589060040782-234fa4ee0b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFib258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 4,
            nombre: 'Gomitas',
            precio: 32,
            imagen: 'https://images.unsplash.com/photo-1616536814420-4e9702f83f75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8amFib25mcmVzYXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60'
        },
        {
            id: 5,
            nombre: 'Tortillas',
            precio: 22,
            imagen: 'https://images.unsplash.com/photo-1545505005-0a09f804dcf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dG9ydGlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'                        
        },
        {
            id: 6,
            nombre: 'Tasajo',
            precio: 60,
            imagen: 'https://images.unsplash.com/photo-1652209695374-7a91c243f12f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHRhc2Fqb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60'
        },

    ];

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    

   
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
           
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
             
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    
    function anyadirProductoAlCarrito(evento) {
        
        carrito.push(evento.target.getAttribute('marcador'))
        
        renderizarCarrito();
        
        guardarCarritoEnLocalStorage();
    }

    
    function renderizarCarrito() {
       
        DOMcarrito.textContent = '';
        
        const carritoSinDuplicados = [...new Set(carrito)];
        
        carritoSinDuplicados.forEach((item) => {
           
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                
                return itemBaseDatos.id === parseInt(item);
            });
            
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
               
                return itemId === item ? total += 1 : total;
            }, 0);
            
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
       
        DOMtotal.textContent = calcularTotal();
    }

    
    function borrarItemCarrito(evento) {
        
        const id = evento.target.dataset.item;
      
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        
        renderizarCarrito();
      
        guardarCarritoEnLocalStorage();

    }

    
    function calcularTotal() {
        
        return carrito.reduce((total, item) => {
            
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

   

    function vaciarCarrito() {
        
        carrito = [];
        
        renderizarCarrito();
        
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        
        if (miLocalStorage.getItem('carrito') !== null) {
           
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});