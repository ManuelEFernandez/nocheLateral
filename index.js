let  catalogoLibros = document.querySelector(".catalogo-libros");



const librosCatalogo  = () => {


    let librosParaCatalogo = [];
    for (let index = 1; index < 25; index++) {
        
        librosParaCatalogo.push(`<div class="item"><img src="/libros/libroid${index}.jpg" alt="libroid${index}"></div>`);

    }
    
    catalogoLibros.innerHTML= librosParaCatalogo.join("");
    
}

librosCatalogo();