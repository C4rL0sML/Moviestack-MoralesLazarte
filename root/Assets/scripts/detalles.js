

const $input = document.getElementById("busqueda");

const genres = movies.map(pelic => pelic.genres).flat()
const setGenres = new Set(genres);

const arrayGenres = Array.from(setGenres)

$input.addEventListener('input', (e) => {
    e.preventDefault()
    console.log('input Busqueda:', $input.value)

    const movieFiltrado = filtrarGenres (movies, $input.value)

    mostrar(movieFiltrado, main)
})

function filtrarGenres (listaMov, Gen){
    return listaMov.filter (movie => movie.genres.tolowerCase().startsWith(Gen.tolowerCase()))
}






























// function pelicula(movie) {
//      return `
//         <busqueda class="flex flex-col gap-3 w-10/12 md:w-5/12 xl:w-3/12 border border-black rounded-3xl">
//                 <img class="rounded-t-3xl" src="${movie.image}" alt="">
//                 <h3>${movie.title}</h3>
//                 <h4>${movie.tagline}</h4>
//                 <p>${movie.overview}</p>

//                 <p>${movie.original_language}</p>
//                 <p>${movie.release_date}</p>
//                 <p>${movie.runtime}</p>
//                 <p>${movie.status}</p>
                
//         </busqueda> `;
// }

// function informacion( lista, elemento ){
//      let info = ""
//      for (const peli of lista){
//          info += pelicula(peli)
//      }
//      elemento.innerHTML = info
// }

// informacion( movies, tarjeta )


// const urlParans = new URLSearchParams(window.location.search);
// const mov= urlParans.get('id')

// const movi = movies.find(p =>  p.id == parseInt(mov))

// const movieConteiner = document.getElementById('secion')

// const cardContent = `
//     <seccion class="card">
        
//     </seccion>`;

//     movieConteiner.innerHTML = cardContent

