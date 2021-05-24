window.addEventListener ("load", function(){

    let mujeresNB = document.getElementById ('mujeresNB');
    let hombresNB = document.getElementById ('hombresNB');
    let unisexNB = document.getElementById ('unisexNB');
    let outletNB = document.getElementById ('outletNB');

    //elementos del menú hamburguesa
    let mujeresB = document.getElementById ('mujeresB');
    let hombresB = document.getElementById ('hombresB');
    let unisexB = document.getElementById ('unisexB');
    let outletB = document.getElementById ('outletB');

    let logoSRL = document.getElementById ('logoSRL');

    let selectGenre = document.getElementById ('gender');

    let optionsGenre = selectGenre.options;

    logoSRL.addEventListener ('click', () => {
        localStorage.setItem('genero','none');
        let genero = localStorage.getItem ('genero');  
    });
    mujeresNB.addEventListener ('click', () => {
        localStorage.setItem('genero','woman');
        let genero = localStorage.getItem ('genero');  
    });
    hombresNB.addEventListener ('click', () => {
        localStorage.setItem('genero','man');
        let genero = localStorage.getItem ('genero');  
    })
    unisexNB.addEventListener ('click', () => {
        localStorage.setItem('genero','unisex');
        let genero = localStorage.getItem ('genero');  
    })
    outletNB.addEventListener ('click', () => {
        localStorage.setItem('genero','outlet');
        let genero = localStorage.getItem ('genero');  
    })
    switch (localStorage.getItem ('genero')){
        case "woman":
                mujeresNB.style.backgroundColor = '#0f3057';
                hombresNB.style.backgroundColor = 'none';
                unisexNB.style.backgroundColor = 'none';
                outletNB.style.backgroundColor = 'none';
                optionsGenre[0].setAttribute ('selected', true);
            break;
            case "man":
                mujeresNB.style.backgroundColor = 'none';
                hombresNB.style.backgroundColor = '#0f3057';
                unisexNB.style.backgroundColor = 'none';
                outletNB.style.backgroundColor = 'none';
                optionsGenre[1].setAttribute ('selected', true);
            break;
            case "unisex":
                mujeresNB.style.backgroundColor = 'none';
                hombresNB.style.backgroundColor = 'none';
                unisexNB.style.backgroundColor = '#0f3057';
                outletNB.style.backgroundColor = 'none';            
                optionsGenre[2].setAttribute ('selected', true);
            break;
            case "outlet":
                mujeresNB.style.backgroundColor = 'none';
                hombresNB.style.backgroundColor = 'none';
                unisexNB.style.backgroundColor = 'none';
                outletNB.style.backgroundColor = '#0f3057';           
                optionsGenre[3].setAttribute ('selected', true);
            break;
            case "none":
                mujeresNB.style.backgroundColor = 'none';
                hombresNB.style.backgroundColor = 'none';
                unisexNB.style.backgroundColor = 'none';
                outletNB.style.backgroundColor = 'none';           
            break;
    } 

});

/*

    let generos = document.querySelectorAll (".generos");
//    res.locals.generoGuardado = "";
    
    generos.forEach (genero => {
        genero.onclick = (e) => {
            let target = e.target;
            generos.forEach (btn => {
                geneto.style.backgroundColor = 'red';
                alert (genero.value);
            })
            alert (target.value);
            console.log (target);
            target.style.backgroundColor = 'green';
            e.preventDefault();

        }
    })*/
