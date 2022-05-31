const IMAGE_BASE ="https://image.tmdb.org/t/p/w500"; 

class Peliculas
{
    constructor(image,tittle)
    {
        this.image = image;
        this.tittle = tittle;
    }

    static DibujaPopular(){

        const respuesta  = Populares.getMasPopulares();
        console.log(respuesta)

        let peliculas = '';
        respuesta.PromiseResult.forEach(card =>{
                peliculas += `
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="${IMAGE_BASE}${card.poster_path}" alt="Card image cap">
                            <h5 class="card-title">${card.title}</h5>
                    </div>
                `;
        });
        document.GetElementById('filas').innerHTML = peliculas;
        
    }
    

}