const imageBaseUrl = "https://image.tmdb.org/t/p/original"
const nowPlayingBaseUrl = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page="
const searchBaseUrl = "https://api.themoviedb.org/3/search/movie?query="
const searchButton = document.querySelector("#search-button")
const searchInput = document.querySelector("#search-input")
const loadMoreMoviesButton = document.querySelector("#load-more-movies-btn")
const resultsTitleBox = document.querySelector(".results-title")
const resultsTitle = document.querySelector(".results-title b")
const mainDiv = document.querySelector(".movies-grid")
const posterPlaceholder = "https://via.placeholder.com/720x1080/eee?text=%20%E2%80%8C"
const backButton = document.createElement("button")
const loadMoreButton = document.querySelector("#load-more-movies-btn")
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzVjZmEyYzY0YjhjZjZjZDgzYjAxY2IxNDM4YTZmMiIsInN1YiI6IjY0ODEyY2M0NjQ3NjU0MDEyNDk2YmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3h-MpbyEKM10nPqVEYpOvoWTcwk4wzjczpb-9bwitU4'
    }
}

/**
 * Generates a card for each movie.
 * 
 * @param {Object} movieObject - The object containing movie details.
 * @param {HTMLElement} targetDiv - The target div where the movie card will be appended.
 */
function generateCard(movieObject, targetDiv) {
    const movieCard = document.createElement("section")
    movieCard.classList.add("movie-card")

    const movieImage = document.createElement("img")
    movieImage.classList.add("movie-poster")
    movieImage.src = imageBaseUrl.concat(movieObject.poster_path)
    movieCard.appendChild(movieImage)
    if (movieImage.src === imageBaseUrl.concat("null")) {
        movieImage.src = posterPlaceholder
    }

    const movieRating = document.createElement("div")
    movieRating.classList.add("movie-votes")
    movieCard.appendChild(movieRating)

    const star = document.createElement("span")
    star.classList.add("star")
    star.innerText = "⭐️ "
    movieRating.appendChild(star)

    const ratingValue = document.createElement("span")
    ratingValue.classList.add("rating-value")
    ratingValue.innerText = movieObject.vote_average
    movieRating.appendChild(ratingValue)

    const movieTitle = document.createElement("div")
    movieTitle.classList.add("movie-title")
    movieTitle.innerText = movieObject.original_title
    movieCard.appendChild(movieTitle)

    targetDiv.appendChild(movieCard)
}

/**
 * Generates a new row on the page for the mocies to be displayed in.
 * 
 * @returns {HTMLElement} The created movie row.
 */
function generateRow() {
    const movieRow = document.createElement("section")
    movieRow.classList.add("movie-row")
    mainDiv.appendChild(movieRow)

    return movieRow
}

/**
 * Fetches movie data from TMDB API, creates new rows, and adds movie cards to them.
 * 
 * @param {string} url - The URL for the API call.
 * @param {number} page - The page number to fetch from the API.
 */
function generateMoviePage(url, page) {
    resultsTitle.style.display = "none";
    loadMoreButton.style.display = "none";
    fetch(url.concat(page), options)
        .then(response => response.json())
        .then(moviesData => {
            const movies = moviesData.results
            let targetDiv = generateRow() // first row generated on assignment

            movies.forEach(function(movie, index) {
            if (index % 4 === 0) {
                targetDiv = generateRow()
            }

            vytfv = 9

            generateCard(movie, targetDiv)
            resultsTitle.style.display = "block";
            loadMoreButton.style.display = "block";
        })
    })
}

/**
 * Changes the title of the results section, sets the URL to the search URL,
 * and generates a moviepage with the new URL. If needed, it also adds a back button.
 * 
 * @param {string} keyword - The keyword for the movie search.
 * @param {boolean} needBackButton - Indicates if a back button is required.
 */
function generateSearchResults(keyword, needBackButton) {
    resultsTitle.innerText = `Keyword: ${keyword}`
    keyword = keyword.replace(" ", "+")
    currentUrl = `${searchBaseUrl}${keyword}&page=`

    generateMoviePage(currentUrl, 1)

    if (needBackButton === true) {
        backButton.classList.add("close-search-btn")
        backButton.innerText = "⏪"
        resultsTitleBox.insertBefore(backButton, resultsTitle)
        needBackButton = false
    }
}

loadMoreMoviesButton.addEventListener("click", () => {
    page += 1
    generateMoviePage(currentUrl, page)
})

searchButton.addEventListener("click", (event) => {
    let keyword = searchInput.value
    mainDiv.innerHTML = ""
    
    event.preventDefault()
    generateSearchResults(keyword, needBackButton)
})

backButton.addEventListener("click", () => {
    location.reload()
})

// Load first page
let page = 1
let needBackButton = true
currentUrl = nowPlayingBaseUrl
generateMoviePage(currentUrl, page)

/*
 * TODO:
 * - add loading animation
 */