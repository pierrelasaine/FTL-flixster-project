const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzVjZmEyYzY0YjhjZjZjZDgzYjAxY2IxNDM4YTZmMiIsInN1YiI6IjY0ODEyY2M0NjQ3NjU0MDEyNDk2YmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3h-MpbyEKM10nPqVEYpOvoWTcwk4wzjczpb-9bwitU4'
    }
  }

const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="

function generateCard(movieObject, targetDiv) {
    // Expected format:
    //
    //     <section class="movie-card">
    //         <img class="movie-poster/>
    //         <div class="movie-rating">
    //             <span class="star">⭐️ </span>
    //             <span class="rating-value"> {{rating}}</span>
    //         </div>
    //         <div class="movie-title"></div>
    //     </section>

    // Create movie card section
    let movieCard = document.createElement("section");
    movieCard.classList.add("movie-card");

    // Create image element (src attribute can be added later)
    let movieImage = document.createElement("img");
    movieImage.classList.add("movie-poster")
    movieImage.src = imageBaseUrl.concat(movieObject.poster_path)
    movieCard.appendChild(movieImage);

    // Create and append movie rating div
    let movieRating = document.createElement("div");
    movieRating.classList.add("movie-votes");
    movieCard.appendChild(movieRating);

    // Create and append star span to movie rating div
    let star = document.createElement("span");
    star.classList.add("star");
    star.innerText = "⭐️ ";
    movieRating.appendChild(star);

    // Create and append rating value span to movie rating div
    let ratingValue = document.createElement("span");
    ratingValue.classList.add("rating-value");
    ratingValue.innerText = movieObject.vote_average;
    movieRating.appendChild(ratingValue);

    // Create and append movie title div
    let movieTitle = document.createElement("div");
    movieTitle.classList.add("movie-title");
    movieTitle.innerText = movieObject.original_title;
    movieCard.appendChild(movieTitle);

    // Append the movie card to target div
    targetDiv.appendChild(movieCard);
}

function generateRow() {
    // Expected format:
    //
    //     <section class="movie-row">
    //     </section>

    // Create movie row section
    let movieRow = document.createElement("section")
    movieRow.classList.add("movie-row")

    let mainDiv = document.querySelector(".movies-grid")
    mainDiv.appendChild(movieRow)

    return movieRow
}

function generateMoviePage(page) {
    fetch(nowPlayingUrl.concat(`${page}`), options)
        .then(response => response.json())
        .then(moviesData => {
            let movies = moviesData.results
            let targetDiv = generateRow()

            movies.forEach(function(movie, index) {
            if (index % 4 === 0) {
                targetDiv = generateRow()
            }

            generateCard(movie, targetDiv)
        })
    })
}

// Load first page
let page = 1
generateMoviePage(page)

// On button press, load next page
let loadMoreMoviesButton = document.querySelector("#load-more-movies-btn")
loadMoreMoviesButton.addEventListener("click", () => {
    page += 1
    generateMoviePage(page)
})