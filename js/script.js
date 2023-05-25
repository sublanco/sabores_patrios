function calcular(){
    
    //validar formulario    
    let parrafo = document.getElementById('mensaje');
    let total = document.getElementById('total');
    
    let mensaje = '';

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let cantidad = Number(document.getElementById('cantidad').value);

    if(nombre === ""){
        mensaje += 'Por favor, debe ingresar un nombre.<br>';
    }
    if(apellido === ""){
        mensaje += 'Por favor, debe ingresar un apellido.<br>';
    }
    if(correo === ""){
        mensaje += 'Por favor, debe ingresar un correo.<br>';
    }
    if(cantidad <= 0){
        mensaje += 'Por favor, debe ingresar una cantidad mayor a cero.<br>';
    }

    if(mensaje != ""){    

        parrafo.innerHTML = mensaje;
        total.innerHTML = '';

    } else {

        parrafo.innerHTML = '';
        
        //calcular total
        let descuento = 0;

        let categoria = Number(document.getElementById('categoria').value);

        switch (categoria) {
            case 1:
                descuento = 80;
                break;
            case 2:
                descuento = 50;
                break;
            case 3:
                descuento = 15;
                break;
        
            default:
                break;
        }

        let total = document.getElementById('total');
        total.innerHTML = cantidad * 2000 * (100 - descuento) / 100;
    }

}

function borrar() {
    let mensaje = document.getElementById('mensaje');
    let total = document.getElementById('total');

    mensaje.innerHTML = '';
    total.innerHTML = '';
}