window.addEventListener ("load", function(){

    let selectMarcas = document.getElementById ('marca');
    let selectModelos = document.getElementById ('modelo');

    const formEdit = document.getElementById ('formEdit');
    const newImage = document.getElementById ('newImage');

    selectModelos.addEventListener('focus', function(){ 
        cargarModelos(selectMarcas.value)
    })
 
    newImage.addEventListener ('change', function (e){
        const target = e.target;
        const value = target.value;
        if (value == null){
            formEdit.removeAttribute ("enctype")
        }
        let reader = new FileReader();
        reader.readAsDataURL(target.files[0]);
        reader.onload=function(){
            let preview=document.getElementById('previewSection');
            image= document.createElement('img');
            image.src=reader.result;
            image.style.height = "100%"
            preview.innerHTML = "";
            preview.append(image);      
        }
    })

    formEdit.addEventListener('submit', function(e){
        e.preventDefault();
        const value = newImage.value;
        if (value == null){
            formEdit.removeAttribute ("enctype")
        }
        e.target.submit();
    })

    selectMarcas.addEventListener('change',function(){
        cargarModelos(selectMarcas.value)
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