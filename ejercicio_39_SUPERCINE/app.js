let URL = 'http://www.omdbapi.com/?apikey=';

let peliculas;
let peliculasFiltradas;

function initApp() {
    document.querySelector("#t-apikey").value = getApiKey();
}

function processMovie(data) {
    clearCards(); //Limpiamos las tarjetas
    peliculas = data.Search;//Guardamos las películas en un array
    peliculasFiltradas = Array.from(peliculas);//Crea un nuevo array
    generarDesplegableTipo(peliculas);//Generamos el desplegable
    peliculas.forEach(pelicula => {//Generamos las tarjetas
        generateCard(pelicula);//Generamos la tarjeta
    });
}

function generateCard(pelicula) {
    //0. Cambiamos el contador
    document.querySelector("#contador").textContent = peliculasFiltradas.length;

    //1. Crear la tarjeta
    const nuevaCard = document.createElement("div");//Crea un elemento de tipo div
    nuevaCard.setAttribute("class", "card");

    //2. Crear la imagen
    const nuevaImg = document.createElement("img");
    nuevaImg.setAttribute("src", pelicula.Poster);
    nuevaImg.setAttribute("alt", `Póster de la película ${pelicula.Title}`);
    nuevaCard.appendChild(nuevaImg);

    //3. Crear el contenido de la tarjeta
    const nuevoContenido = document.createElement("div");
    nuevoContenido.setAttribute("class", "card-content");
    nuevaCard.appendChild(nuevoContenido);

    //4. Crear el h3 del título <h3>El Padrino</h3>
    const nuevoTitulo = document.createElement("h3");
    nuevoTitulo.textContent = pelicula.Title;
    nuevoContenido.appendChild(nuevoTitulo);

    //5. Año
    //<p><strong>Año:</strong> 1972</p>
    const nuevoParrafoAnyo = document.createElement("p");
    const nuevaNegritaAnyo = document.createElement("strong");
    nuevoParrafoAnyo.appendChild(nuevaNegritaAnyo);
    nuevaNegritaAnyo.textContent = "Año: ";
    nuevoContenido.appendChild(nuevoParrafoAnyo);
    const textoAnyo = document.createTextNode(pelicula.Year)
    nuevoParrafoAnyo.appendChild(textoAnyo);

    /*
    //6. Género
    //<p><span class="genre">Género:</span> Drama, Crimen</p>
    const nuevoParrafoGenero = document.createElement("p");
    const nuevoSpanGenero = document.createElement("span");
    nuevoSpanGenero.setAttribute("class","genre");
    nuevoSpanGenero.textContent = "Género: ";
    nuevoParrafoGenero.appendChild(nuevoSpanGenero);
    nuevoParrafoGenero.appendChild(document.createTextNode(pelicula.Genre));
    nuevoContenido.appendChild(nuevoParrafoGenero);
    */
    //Último paso: Agregar al contenedor la ficha recién creada
    document.querySelector("#container").appendChild(nuevaCard);//Agregamos el div al contenedor
}

function generarDesplegableTipo(peliculas) {
    //Limpiamos el desplegable
    document.querySelectorAll("#s-tipo option").forEach(option => option.remove());
    //Extraemos los tipos del fichero json 
    let setTipos = new Set();
    peliculas.forEach(pelicula => {
        setTipos.add(pelicula.Type);
    });
    //<option value="drama">Drama</option>
    let arrayTipos = Array.from(setTipos);
    arrayTipos.sort().forEach(tipo => {
        let tipoOption = document.createElement("option");
        tipoOption.setAttribute("value", tipo.toLowerCase());
        //tipoOption.textContent=tipo;
        tipoOption.textContent = tipo.charAt(0).toUpperCase() + tipo.slice(1)
        document.querySelector("#s-tipo").appendChild(tipoOption);
    });
}

function clearCards() {
    //document.querySelector("#container").innerHTML="";//Chapuza
    document.querySelectorAll(".card").forEach(card => card.remove());//Elegante
}

initApp();