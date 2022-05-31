const API_BASE_URL = "https://api.themoviedb.org";
const API_KEY = "18243698ff8a20cee1b7b43641b20f96";

class Populares
{

    static getMasPopulares = async() => {
        const url = `${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`;
        return fetch(url)
        .then(response => response.json())
        .then(datos => datos.results)
        .catch(error => console.log(error))

        }
        
}