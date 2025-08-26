import { getPeliculas, postPeliculas } from "../services/crud.js"

const movieUrl = document.getElementById("movieUrl");
const movieTittle = document.getElementById("movieTittle");
const movieGenre = document.getElementById("movieGenre");
const movieDate = document.getElementById("movieDate");
const btnPostMovie = document.getElementById("btnPostMovie");

btnPostMovie.addEventListener("click", async function() {
    console.log(movieUrl.value);     
    console.log(movieTittle.value);  
    console.log(movieGenre.value);   
    console.log(movieDate.value); 

    const pelicula =
    {
        movieUrl: movieUrl.value,
        movieTittle: movieTittle.value,
        movieGenre: movieGenre.value,
        movieDate: movieDate.value
    }
    const respuestaConfirmada = await postPeliculas(pelicula)

    
});

//img.src = "https://www.w3schools.com/html/img_girl.jpg";

async function billConteinerBuilder(movieUrl, movieTittle, movieGenre, movieDate ) 
{
    //creacion del contenedor que almacenara los atributos de la pelicula img, titulo, genero, fecha de lanzamiento
    const movieBillContainer = document.createElement("div");
    movieBillContainer.className = "movieBillContainer";

    

    const peliculasRecibida = await getPeliculas()

    peliculasRecibida.map(pelicula =>  
    {

        //creacion del contenedor del poster de la pelicula 
        const movieBillOutput = document.createElement("div");
        movieBillOutput.className ="movieBillOutputpng";
        moviePoster = document.createElement("img");
        moviePoster.src = pelicula.movieUrl;
        movieBillOutput.appendChild(moviePoster);

        //creacion del contenedor del titulo de la pelicula
        const movieTittleContainer = document.createElement("div");
        movieTittleContainer.className = "movieTittleContainer";
        const tittleText = document.createElement("p1");
        tittleText.textContent = pelicula.movieTittle;
        movieTittleContainer.appendChild("Titulo: ",tittleText);

        //creacion del contenedor del genero de la pelicula
        const movieGenreOutputContainer = document.createElement("div")
        movieGenreOutputContainer.className = "movieGenreOutputContainer";
        const genreText = document.createElement("p1");
        genreText.textContent = pelicula.movieGenre;
        movieGenreOutputContainer.appendChild("Genero: ", genreText)

        //creacion del contenedor que almacenara la fecha de estreno de la pelicula 
        const movieDateOutputContainer = document.createElement("div");
        movieDateOutputContainer.className = "movieDateOutputContainer";
        const dateText = document.createElement("p1");
        dateText.textContent = pelicula.movieDate;
        movieDateOutputContainer.appendChild(dateText)
    })

    

    productosRecibidos.map(producto => itemTextName.textContent(producto) )
    
    itemsFatherContainer.appendChild(itemTextName)

} 

/*
<div class="movieBillContainer">
                <div class="movieBillOutput">
                    <img class="movieBillOutputpng" src="https://www.w3schools.com/html/img_girl.jpg" alt="">
                </div>
                <div class="movieTittleContainer">
                    <p>Titulo: tetoko elhoyo</p>
                </div>
                <div class="movieGenreOutputContainer">
                    <p>Genero: terro sepsual</p>
                </div>
                <div class="movieDateOutputContainer">
                    <p>1 1 2025</p>
                </div>
            </div>
*/

//Contenedor de todas los movieBill
const movieBillOutputContainer = document.getElementById("movieBillOutputContainer")

//contenedor padre que alamecena la imagen de la pelicula, el titulo, el genero, yy la fecha de lanzamiento 
const movieBillContainer = document.getElementById("movieBillContainer");

//
const movieImgOutputContainer = document.getElementById("movieImgOutputContainer");
const movieTittleContainer = document.getElementById("movieTittleContainer");
const movieGenreOutputContainer = document.getElementById("movieGenreOutputContainer")
const movieDateOutputContainer = document.getElementById("movieDateOutputContainer")



