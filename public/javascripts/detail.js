window.addEventListener('load', function(){

    let cantidad = document.getElementById ('qtt');
    let precio = document.getElementById ('precioOculto');
    let precioTotal = document.getElementById ('precioTotal');
    let precioTotalOculto = document.getElementById ('totalOculto');

 //   precio.parseInt(precio.value, base);
    precioTotal.innerHTML = cantidad.value * precio.value;

    cantidad.addEventListener ('change', function(){
        let precioTotalValue = cantidad.value * precio.value;
        totalOculto.setAttribute('value', precioTotalValue);
        precioTotal.innerHTML = precio.value * cantidad.value;
    })

})