const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzVjZmEyYzY0YjhjZjZjZDgzYjAxY2IxNDM4YTZmMiIsInN1YiI6IjY0ODEyY2M0NjQ3NjU0MDEyNDk2YmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3h-MpbyEKM10nPqVEYpOvoWTcwk4wzjczpb-9bwitU4'
    }
  }

const imageBaseUrl = "https://image.tmdb.org/t/p/original"
const nowPlayingBaseUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
const searchBaseUrl = "https://api.themoviedb.org/3/search/movie?query="

const searchButton = document.querySelector("#search-button")
const searchInput = document.querySelector("#movie-search")
const loadMoreMoviesButton = document.querySelector("#load-more-movies-btn")
const resultsTitleBox = document.querySelector(".results-title")
const resultsTitle = document.querySelector(".results-title b")
const mainDiv = document.querySelector(".movies-grid")
const posterPlaceholder = "https://via.placeholder.com/720x1080/eee?text=%20%E2%80%8C"
const backButton = document.createElement("button")

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
    const movieCard = document.createElement("section");
    movieCard.classList.add("movie-card");

    // Create image element (src attribute can be added later)
    const movieImage = document.createElement("img");
    movieImage.classList.add("movie-poster")
    movieImage.src = imageBaseUrl.concat(movieObject.poster_path)

    movieImage.src = imageBaseUrl.concat(movieObject.poster_path)
    movieCard.appendChild(movieImage);

    // Create and append movie rating div
    const movieRating = document.createElement("div");
    movieRating.classList.add("movie-votes");
    movieCard.appendChild(movieRating);

    // Create and append star span to movie rating div
    const star = document.createElement("span");
    star.classList.add("star");
    star.innerText = "⭐️ ";
    movieRating.appendChild(star);

    // Create and append rating value span to movie rating div
    const ratingValue = document.createElement("span");
    ratingValue.classList.add("rating-value");
    ratingValue.innerText = movieObject.vote_average;
    movieRating.appendChild(ratingValue);

    // Create and append movie title div
    const movieTitle = document.createElement("div");
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
    const movieRow = document.createElement("section")
    movieRow.classList.add("movie-row")

    mainDiv.appendChild(movieRow)

    return movieRow
}

function generateMoviePage(url, page) {
    // Generate movie page data from the TMDB API
    fetch(url.concat(page), options)
        .then(response => response.json())
        .then(moviesData => {
            const movies = moviesData.results
            let targetDiv = generateRow() // first row generated on assignment

            movies.forEach(function(movie, index) {
            if (index % 4 === 0) {
                targetDiv = generateRow()
            }

            generateCard(movie, targetDiv)
        })
    })
}

function generateSearchResults(keyword, needBackButton) {
    if (needBackButton === true) {

        resultsTitleBox.insertBefore(backButton, resultsTitle)

        needBackButton = false
    }


    resultsTitle.innerText = `Keyword: ${keyword}`

    keyword = keyword.replace(" ", "+")
    currentUrl = `${searchBaseUrl}${keyword}&page=`

    generateMoviePage(currentUrl, 1)
}

// Load first page
let page = 1
let needBackButton = true;
currentUrl = nowPlayingBaseUrl
generateMoviePage(currentUrl, page)

// On button press, load next page given the current URL
loadMoreMoviesButton.addEventListener("click", () => {
    page += 1
    generateMoviePage(currentUrl, page)
})

// On button press, remove current results and generate search results
searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    mainDiv.innerHTML = ""

    let keyword = searchInput.value
    generateSearchResults(keyword, needBackButton)
})

backButton.classList.add("back")
backButton.innerText = "⏪"

backButton.addEventListener("click", () => {
    location.reload()
})