//Diferentes maneras de asignar funciones a eventos
/*
document.querySelector("#b-ordenar").addEventListener("mouseleave", (event)=> {
    console.log("Leave");
});

document.querySelector("#b-ordenar").onclick = function(event) {
    console.log("Pulsado");
};

document.querySelector("#b-ordenar").onmouseover = (event)=> console.log("Over");

function doAction(){
    console.log("Focus in");
}

document.querySelector("#b-ordenar").addEventListener("focusin", doAction);
*/

document.querySelector("#b-ordenar").onclick = (event)=>{
    clearCards();
    const asc = document.querySelector("#r-asc").checked;
    const desc = document.querySelector("#r-desc").checked;
    //Ordenar en función del valor de Runtime
    peliculasFiltradas.sort((p1, p2)=> {
        if (asc===true) {
            return parseInt(p1.Runtime) - parseInt(p2.Runtime);
        } else if (desc===true) {
            return parseInt(p2.Runtime) - parseInt(p1.Runtime);
        }
    });
    peliculasFiltradas.map(generateCard);
};