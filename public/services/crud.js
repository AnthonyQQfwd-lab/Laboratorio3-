async function getPeliculas() 
{
    try 
    {

        const respuesta = await fetch('http://localhost:3001/Peliculas', 
        {


            method:'GET',
            headers : 
            {
                'Content-type': 'application/json'
            }

        })

        const peliculas = await respuesta.json();

        return peliculas; 



    } 
    catch (error) 
    {
        console.error("hay un error al obtener las peliculas", error)
        throw error
    }
}

async function postPeliculas(pelicula) 
{
    try 
    {

        const respuesta = await fetch('http://localhost:3001/Peliculas', 
        {


            method:'POST',
            headers : 
            {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(pelicula)

        })

        const peliculas = await respuesta.json();

        return peliculas; 



    } 
    catch (error) 
    {
        console.error("hay un error al crear la pelicula", error)
        throw error
    }
}

export {getPeliculas, postPeliculas};