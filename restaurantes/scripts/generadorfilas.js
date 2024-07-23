function crearFila(imagen, nombre, estilo, precio) {
    //<div class="restaurante">
    let divRestaurante = document.createElement("div");
    divRestaurante.classList.add("restaurante");
    document.querySelector("#restaurantes").appendChild(divRestaurante);
    //<div class="imagen">
    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divRestaurante.appendChild(divImagen);
    //<img src="./images/r1.jpg">
    let imgRestaurante = document.createElement("img");
    imgRestaurante.src = (imagen == null) ? './images/notfound.jpg' : imagen;
    divImagen.appendChild(imgRestaurante);
    //<div class="descripcion">
    let divDescripcion = document.createElement("div");
    divDescripcion.classList.add("descripcion");
    divRestaurante.appendChild(divDescripcion);
    //<div class="nombre">Alfredo's bbq</div>
    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(nombre));
    divDescripcion.appendChild(divNombre);
    //<div class="tipo">Americano</div>
    let divTipo = document.createElement("div");
    divTipo.classList.add("tipo");
    divTipo.appendChild(document.createTextNode(estilo));
    divDescripcion.appendChild(divTipo);
    //<div class="precio">30€</div>
    let divPrecio = document.createElement("div");
    divPrecio.classList.add("precio");
    divPrecio.appendChild(document.createTextNode(precio));
    divDescripcion.appendChild(divPrecio);
    //<hr>
    document.querySelector("#restaurantes").appendChild(document.createElement("hr"));
}