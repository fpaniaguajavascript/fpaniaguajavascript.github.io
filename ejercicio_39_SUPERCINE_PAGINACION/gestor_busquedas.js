function getMoviesFromOMDB(page = 1) {
    let tituloBuscado = document.querySelector("#t-titulo-omdb").value;
    let apikey = document.querySelector("#t-apikey").value;
    storeApiKey(apikey);//Almacenamos la apikey en el localstorage
    //https://www.omdbapi.com/?apikey=fe486a03&s=matrix&page=1
    let nuevaURL = `${URL}${apikey}&s=${tituloBuscado}&page=${page}`;
    doGetRequest(nuevaURL, processMovie);
}

//Obtención de películas de OMDB
document.querySelector("#b-buscar-omdb").addEventListener("click", () => {
    getMoviesFromOMDB();
})

//Busqueda por Título, escribiendo en la caja de texto
document.querySelector("#t-titulo").addEventListener("input", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Busqueda por Género, cambiando la selección del desplegable
document.querySelector("#s-tipo").addEventListener("change", () => {
    filtrarPeliculas("#s-tipo", "Type");
});

//Busqueda por Año, pulsando el botón Buscar
document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

document.querySelector("#b-reiniciar").addEventListener("click", () => {
    document.querySelector("#t-titulo").value = "";
    filtrarPeliculas("#t-titulo", "Title");
})

/**
 * Función de búsqeuda 
 * 
 * @param {*} idElementoBusqueda Nombre del elemento en el que está el texto de búsqueda
 * @param {*} nombreAtributoBusqueda Nombre del atributo del JSON sobre el que hay que buscar
 */
function filtrarPeliculas(idElementoBusqueda, nombreAtributoBusqueda) {
    clearCards();
    const textoBusqueda = document.querySelector(idElementoBusqueda).value;
    peliculasFiltradas =
        peliculas.filter(pelicula =>
            pelicula[nombreAtributoBusqueda]
                .toUpperCase()
                .includes(textoBusqueda.trim().toUpperCase()));
    peliculasFiltradas.map(generateCard);
}