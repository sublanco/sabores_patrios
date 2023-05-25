function calcular(){
    
    //validar formulario    
    let parrafo = document.getElementById('mensaje');
    let total = document.getElementById('total');
    
    let mensaje = '';

    //obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let correo = document.getElementById('correo').value;
    let cantidad = Number(document.getElementById('cantidad').value);

    //validar si los valores son correctos sino agregar el error a mensaje
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
        //hay un error en la validacion entonces muestra el mensaje
        parrafo.innerHTML = mensaje;
        total.innerHTML = '';

    } else {
        //no hay errores en la validacion
        parrafo.innerHTML = '';
        

        let descuento = 0;
        let categoria = Number(document.getElementById('categoria').value);
        //selecciona el descuento de acuerdo a su categoria 
        // 1=estudiante, 2=municipal, 3=jubilado
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

        //calcular total y mostrarlo
        let total = document.getElementById('total');
        total.innerHTML = cantidad * 2000 * (100 - descuento) / 100;
    }

}

function borrar() {
    //borra los mensajes de error de validacion y total calculado
    let mensaje = document.getElementById('mensaje');
    let total = document.getElementById('total');

    mensaje.innerHTML = '';
    total.innerHTML = '';
}