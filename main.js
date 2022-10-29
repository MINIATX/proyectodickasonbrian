function comprarProductos() {
    let producto = '';
    let precio = 0;
    let cantidad = 0;
    let totalCompra = 0;
    let seguirComprando = false;

    do {
        producto = prompt('¿Queres comprar Laptop Asus, Laptop HP o Laptop Accer?', 'Laptop Asus');
        cantidad = parseInt(prompt('¿Cuantos queres comprar?'));

        let cantidadValidada = validarCantidad(cantidad);

        switch (producto) {
            case 'Laptop Asus':
                precio = 700;
                break;
            case 'Laptop HP':
                precio = 800;
                break;
            case 'Laptop Accer':
                precio = 900;
                break;
            default:
                alert('Los valores ingresados no son correctos.');
                precio = 0;
                cantidad = 0;
                break;
        }

        totalCompra += precio * cantidadValidada;  
        seguirComprando = confirm('¿Queres agregar otro producto?');

    } while (seguirComprando)

    const totalMasdesc = aplicarDescuento(totalCompra);
    const totalMasenvio = calcularEnvio(totalMasdesc);

    return totalMasenvio;
}

function validarCantidad(cantidad) {
    console.log(cantidad)
    while(Number.isNaN(cantidad) || cantidad === 0) {
        if (cantidad !== 0) {
            alert('Debe agregar un número.')
        } else {
            alert('Debe ingresar un valor distinto de cero.')
        }
        cantidad = parseInt(prompt('¿Cuantos desea comprar?'));
    }

    return cantidad;
}

function aplicarDescuento(totalCompra) {
    let totalMasdesc = 0;
    const valorDescuento = 800;
    const valorDescuentoM = 1600;
    if (totalCompra >= valorDescuento && totalCompra < valorDescuentoM) {
        totalMasdesc = totalCompra * 0.80;
        return totalMasdesc;
    } else if(totalCompra >= valorDescuentoM) {
        totalMasdesc = totalCompra * 0.75;
        return totalMasdesc;
    } else {
        return totalCompra;
    }
}

const valorDescuento = 800;

function calcularEnvio(totalCompra) {
    const costoDelivery = 7;
    let tieneEnvioADomicilio = false;
    tieneEnvioADomicilio = confirm('¿Desea envio a domicilio?');

    if (tieneEnvioADomicilio && totalCompra >= valorDescuento) {
        alert('Envio gratis. El total de su compra es: '+totalCompra);
    } else if (tieneEnvioADomicilio && totalCompra < valorDescuento && totalCompra !== 0) {
        totalCompra += costoDelivery;
        alert('El costo del envio es de $7. El total de su compra: '+totalCompra);
    } else {
        alert('El total de su compras es: '+totalCompra);
    }

    return totalCompra
}

function calcularFinanciacion () {
    let plazos = 0;
    let periodoFinanciacion = false;
    periodoFinanciacion = confirm('¿Desea abonar en cuotas?')

    if (periodoFinanciacion) {
        plazos = parseInt (prompt ('¿En que plazo desea abonar?'));
        if (plazos === 0) {
            plazos = 1;
        } else if (Number.isNaN(plazos)) {
            calcularFinanciacion();
        }
    } else {
        plazos = 1;
    }

    return plazos;
}

function interesesFinanciacion(plazos) {
    let tasa = 25;
    let sinInteres = 0;
    let tasaTotal = 0;
    let interesesTotal = 0;

    if (plazos === 1) {
        return sinInteres;
    } else {
        tasaTotal = tasa + plazos * 0.2;
        interesesTotal = tasaTotal * plazos;
        return interesesTotal;
    }

}

function calculoTotalapagar (valorComp, plazos, intereses) {
    valorTotal = valorComp + intereses;
    let valorPlazo = valorTotal / plazos;
    alert('El valor de su compra es: $'+valorTotal+' en '+plazos+' cuotas de $'+valorPlazo)
}

const valorComp = comprarProductos();
const plazos = calcularFinanciacion();
const intereses = interesesFinanciacion(plazos);

calculoTotalapagar(valorComp, plazos, intereses);