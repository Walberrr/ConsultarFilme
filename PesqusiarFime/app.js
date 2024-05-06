document.getElementById('consultar').addEventListener('click', function() {
    var filme = document.getElementById('filme').value;

    fetch('https://www.omdbapi.com/?t='+ filme +'&apikey=ab1c133')
    
    .then(response => response.json())
    .then(data => {
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = '';

        if (data.Response === "False") {
            resultado.innerHTML = '<div class="alert alert-danger" role="alert">Não foi possível localizar esse filme. Sinto muito 😞</div>';
        } else {
            resultado.innerHTML = `<div class="card mt-3">
                                       <div class="card-body">
                                           <h5 class="card-title">${data.Title} (${data.Year})</h5>
                                           <p class="card-text">${data.Plot}</p>
                                           <p class="card-text"><small class="text-muted">Diretor: ${data.Director}</small></p>
                                           <p class="card-text"><small class="text-muted">Atores: ${data.Actors}</small></p>
                                           <p class="card-text"><small class="text-muted">Nota IMDB: ${data.imdbRating}</small></p>
                                       </div>
                                   </div>`;
        }
    });
});
