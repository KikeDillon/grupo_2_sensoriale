window.addEventListener ("load", function(){

    let selectMarcas = document.getElementById ('marca');
    let selectModelos = document.getElementById ('modelo');
    let btnErase = document.getElementById ('btn-erase');

    selectMarcas.addEventListener('change',function(){
        cargarModelos(selectMarcas.value)
      })

    btnErase.addEventListener ('click', function(){
        selectModelos.innerHTML = "";
        let opcionModelo = document.createElement('option')
        opcionModelo.setAttribute('value', 'modelo')
        opcionModelo.innerHTML = 'modelo'
        selectModelos.append(opcionModelo)
    })

    function cargarModelos(Marca){
        fetch('http://localhost:3001/api/models')
        .then(function(respuesta){
            return respuesta.json()
        })
        .then(function(datosModelos){
            selectModelos.innerHTML = "";
            datosModelos.forEach(i => {
                if (i.markId == Marca){
                    console.log (i.model)
            //        selectModelos.innerHTML += `<option value = ${i.id}> ${i.model} </option>`                    
                    let opcionModelo = document.createElement('option')
                    opcionModelo.setAttribute('value', i.id)
                    opcionModelo.innerHTML = i.model
                    selectModelos.append(opcionModelo)
                }              
            });
        })
    }
})