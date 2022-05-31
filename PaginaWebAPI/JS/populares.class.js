class Populares
{
    static getMasPopulares = (page) => {
        const url = `${API_BASE_URL}/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`;
        return fetch(url)
        .then(response => response.json())
        .then(result => result.results)
        .catch(error => console.log(error))
        }
        
}