movieList = JSON.parse(movies);
console.log(movieList);

var content = document.getElementById("entry");

function movieGeneration() {
  for (let i = 0; i < movieList.length; i++) {
    content.innerHTML += `
        
        
        
        <div class="card m-4 bg-own  text-white" style="max-width: 540px;">
            <div class="row">
                
            <div class="col-md-4">
            <img src="${movieList[i].image}">
                </div>
                    
                    <div class="col-md-8">
                        <div class="card-body height">
                            <h3 class="card-title">${movieList[i].movieName}</h3>
                            <p class="card-text">${movieList[i].description}</p>
                            
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item bg-secondary">Length: ${movieList[i].length}</li>
                                <li class="list-group-item bg-secondary">Genre(s): ${movieList[i].genre}</li>
                                <li class="list-group-item bg-secondary">Release: ${movieList[i].release}</li>
                            </ul>
                            
                        </div>
                    </div>

                    <div class="card-btm d-flex justify-content-evenly">
                        <div  id="btn">
                        <button  class="btn-own text-success" style="background-color: transparent;">
                            <i class="fas fa-thumbs-up"></i> Like
                        </button>  
                        </div>
                        <span id="counter" class="badge likes text-success bg-light">${movieList[i].likes}</span>
                        
                    </div>

            </div>
        </div>
            
        `;
  }
  return content;
}

movieGeneration();

function btnLikes() {
  for (let i in movieList) {
    var countTarget = document.getElementsByClassName("likes");
    var bcount = document.getElementsByClassName("btn-own");
    bcount[i].addEventListener("click", addLike);
    function addLike() {
      let up = parseInt(movieList[i].likes) + 1;
      countTarget[i].innerHTML = up;
      movieList[i].likes = up;
    }
  }
}

btnLikes();

btnLikes();

function sortBtn() {
  movieList.sort((a, b) => b.likes - a.likes);
  const newCards = document.getElementById("entry");
  newCards.textContent = "";
  movieGeneration();
  btnLikes();
}

document.getElementById("sort").addEventListener("click", sortBtn);
