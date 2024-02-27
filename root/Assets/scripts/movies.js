console.log( movies )

//Estructura de la tarjeta

// Imagen 
// titulo
// tegline
// descripciòn

const tarjeta = document.getElementById("seccion");

function pelicula(movie) {
     return `
        <seccion class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 border border-black rounded-3xl">
                <img class="rounded-t-3xl" src="${movie.image}" alt="">
                <h3>${movie.title}</h3>
                <h4>${movie.tagline}</h4>
                <p>${movie.overview}</p>
        </seccion> `;
}

 function informacion( lista, elemento ){
     let info = ""
     for (const peli of lista){
         info += pelicula(peli)
     }
     elemento.innerHTML = info
}

informacion( movies, tarjeta )