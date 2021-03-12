movies = JSON.parse(movies);
console.log(movies);
document.write(movies);



function movieGeneration (movies){

    let cards = "";
    for (let i = 0; i < movies.length; i++){
    
        
        cards += `
        
        
        
        <div class="card m-4 bg-dark text-white" style="max-width: 540px;">
            <div class="row">
                
            <div class="col-md-4">
                    <img src="${movies[i].image}">
                </div>
                    
                    <div class="col-md-8">
                        <div class="card-body height">
                            <h3 class="card-title">${movies[i].movieName}</h3>
                            <p class="card-text">${movies[i].description} </p>
                            
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-secondary">Length: ${movies[i].length}</li>
                                <li class="list-group-item bg-secondary">Genre(s): ${movies[i].genre}</li>
                                <li class="list-group-item bg-secondary">Release: ${movies[i].release}</li>
                            </ul>
                            
                        </div>
                    </div>

                    <div class="card-btm d-flex justify-content-evenly">
                        
                        <button id="btn" class="btn-own text-success" style="background-color: transparent;">
                            <i class="fas fa-thumbs-up"></i> Like
                        </button>  
                       
                        <span id="counter" class="badge text-success bg-light">${movies[i].likes}</span>
                        
                    </div>

            </div>
        </div>
            
        

        `
    
        
      }
    return cards 
    
}

document.getElementById("entry").innerHTML += movieGeneration(movies);

