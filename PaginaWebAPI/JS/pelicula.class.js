
async function DibujaPopular(page){
    let count = 0;
    let peliculas = await Populares.getMasPopulares(page);
    console.log(peliculas);
    let peliculasfila1 = '';
    let peliculasfila2 = '';
    peliculas.forEach(dato =>{
                if(count < 3)
                {
                    peliculasfila1 += `
                    <div class= "Poster">
                        <div class= "innerPoster">
                            <div class = "imgPoster">
                            <img src= "${IMAGE_BASE}${dato.poster_path}" width = 400px>
                            </div>
                            <div class ="tituloPoster">
                            <h6>${dato.title}</h6>
                            </div>
                        </div>
                    </div>
                    `
                }
                if(count > 3 && count < 6)
                {
                    peliculasfila2 += `
                    <div class= "Poster">
                        <div class= "innerPoster">
                            <div class = "imgPoster">
                            <img src= "${IMAGE_BASE}${dato.poster_path}" width = 350px>
                            </div>
                            <div class ="tituloPoster">
                            <p>${dato.title}</p>
                            </div>
                        </div>
                    </div>
                    `
                }
                count++;
    });
    document.querySelector(['.contenedor1']).innerHTML += peliculasfila1;
    document.querySelector(['.contenedor2']).innerHTML += peliculasfila2;
}

async function DibujaCartelera(page){
    let count = 0;
    let peliculas = await Carteleras.getNuevasPeliculas(page)
    console.log(peliculas);
    let peliculasfila1 = '';
    let peliculasfila2 = '';
    peliculas.forEach(dato =>{
                if(count < 3)
                {
                    peliculasfila1 += `
                    <div class= "Poster">
                        <div class= "innerPoster">
                            <div class = "imgPoster">
                            <img src= "${IMAGE_BASE}${dato.poster_path}" width = 400px>
                            </div>
                            <div class ="tituloPoster">
                            <h6>${dato.title}</h6>
                            </div>
                        </div>
                    </div>
                    `
                }
                if(count > 3 && count < 6)
                {
                    peliculasfila2 += `
                    <div class= "Poster">
                        <div class= "innerPoster">
                            <div class = "imgPoster">
                            <img src= "${IMAGE_BASE}${dato.poster_path}" width = 350px>
                            </div>
                            <div class ="tituloPoster">
                            <p>${dato.title}</p>
                            </div>
                        </div>
                    </div>
                    `
                }
                count++;
    });
    document.querySelector(['.contenedor1']).innerHTML += peliculasfila1;
    document.querySelector(['.contenedor2']).innerHTML += peliculasfila2;
}