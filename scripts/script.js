movies = JSON.parse(movies);
console.log(movies);
document.write(movies);



function movieGeneration (movies){

    let cards = "";
    for (let i = 0; i < movies.length; i++){
    
        
        cards += `
        
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${movies[i].image} " alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">${movies[i].movieName}  </h3>
                        <p class="card-text">${movies[i].description} </p>
                    </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Length: ${movies[i].length}</li>
                            <li class="list-group-item">Genre(s): ${movies[i].genre} </li>
                            <li class="list-group-item">Release: ${movies[i].release} </li>
                        </ul>
                    <div class="card-body">
                    <h3>Likes<span class="badge bg-secondary"> ${movies[i].likes}</span></h3>
                    </div>
                </div>
            </div>
        </div>
       

        `
    
        
      }
    return cards 
    
}

document.getElementById("entry").innerHTML += movieGeneration(movies);