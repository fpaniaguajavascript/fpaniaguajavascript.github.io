//Busqueda por Título, pulsando el botón Buscar
document.querySelector("#b-titulo").addEventListener("click", () => {
    filtrarPeliculas("#t-titulo", "Title");
});

//Busqueda por Título, escribiendo en la caja de texto
/*
document.querySelector("#t-titulo").addEventListener("input", () => {
    filtrarPeliculas("#t-titulo","Title");
});
*/

//Busqueda por Actor, pulsando el botón Buscar
document.querySelector("#b-actor").addEventListener("click", () => {
    filtrarPeliculas("#t-actor", "Actors");
});

//Busqueda por Género, pulsando el botón Buscar
/*
document.querySelector("#b-genero").addEventListener("click", () => {
    filtrarPeliculas("#s-genero","Genre");
});
*/

//Busqueda por Género, cambiando la selección del desplegable
document.querySelector("#s-genero").addEventListener("change", () => {
    filtrarPeliculas("#s-genero", "Genre");
});

//Busqueda por Año, pulsando el botón Buscar
document.querySelector("#b-anyo").addEventListener("click", () => {
    filtrarPeliculas("#t-anyo", "Year");
});

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