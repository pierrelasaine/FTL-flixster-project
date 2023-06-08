const apiKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzVjZmEyYzY0YjhjZjZjZDgzYjAxY2IxNDM4YTZmMiIsInN1YiI6IjY0ODEyY2M0NjQ3NjU0MDEyNDk2YmQ0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3h-MpbyEKM10nPqVEYpOvoWTcwk4wzjczpb-9bwitU4"
const imageBaseUrl = 'https://image.tmdb.org/t/p/original'

let url = "https://api.themoviedb.org/3/movie/latest"

let fakeMoviesAPI = {
    "dates": {
        "maximum": "2023-06-05",
        "minimum": "2023-04-18"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                14,
                35
            ],
            "id": 502356,
            "original_language": "en",
            "original_title": "The Super Mario Bros. Movie",
            "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
            "popularity": 3392.2,
            "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "release_date": "2023-04-05",
            "title": "The Super Mario Bros. Movie",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 4327
        },
        {
            "adult": false,
            "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
            "genre_ids": [
                28,
                12,
                16,
                878
            ],
            "id": 569094,
            "original_language": "en",
            "original_title": "Spider-Man: Across the Spider-Verse",
            "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
            "popularity": 2921.844,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            "release_date": "2023-05-31",
            "title": "Spider-Man: Across the Spider-Verse",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 739
        },
        {
            "adult": false,
            "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Fast X",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 2334.66,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Fast X",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 854
        },
        {
            "adult": false,
            "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Slow Y: Across the Superverse",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 2334.66,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Slow Y",
            "video": false,
            "vote_average": 9.1,
            "vote_count": 854
        },
        {
            "adult": false,
            "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
            "genre_ids": [
                16,
                10751,
                12,
                14,
                35
            ],
            "id": 502356,
            "original_language": "en",
            "original_title": "The Super Mario Bros. Movie",
            "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
            "popularity": 3392.2,
            "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
            "release_date": "2023-04-05",
            "title": "The Super Mario Bros. Movie",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 4327
        },
        {
            "adult": false,
            "backdrop_path": "/2I5eBh98Q4aPq8WdQrHdTC8ARhY.jpg",
            "genre_ids": [
                28,
                12,
                16,
                878
            ],
            "id": 569094,
            "original_language": "en",
            "original_title": "Spider-Man: Across the Spider-Verse",
            "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
            "popularity": 2921.844,
            "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
            "release_date": "2023-05-31",
            "title": "Spider-Man: Across the Spider-Verse",
            "video": false,
            "vote_average": 8.8,
            "vote_count": 739
        },
        {
            "adult": false,
            "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Fast X",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 2334.66,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Fast X",
            "video": false,
            "vote_average": 7.1,
            "vote_count": 854
        },
        {
            "adult": false,
            "backdrop_path": "/4t0oBFrJyweYPt0hocW6RUa0b6H.jpg",
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 385687,
            "original_language": "en",
            "original_title": "Slow Y: Across the Superverse",
            "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
            "popularity": 2334.66,
            "poster_path": "/1E5baAaEse26fej7uHcjOgEE2t2.jpg",
            "release_date": "2023-05-17",
            "title": "Slow Y",
            "video": false,
            "vote_average": 9.1,
            "vote_count": 854
        },
    ],
    "total_pages": 98,
    "total_results": 1951
}

function generateRow() {
    // Expected format:
    //
    //     <section class="movie-row">
    //     </section>

    // Create movie row section
    let movieRow = document.createElement("section")
    movieRow.classList.add("movie-row")

    let mainDiv = document.querySelector(".movies")
    mainDiv.appendChild(movieRow)

    return movieRow
}

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
    movieRating.classList.add("movie-rating");
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

// Create five rows of four movies.
let movies = fakeMoviesAPI.results.slice(0, 20)
let targetDiv = generateRow()

movies.forEach(function(movie, index) {
    if (index % 4 === 0) {
        targetDiv = generateRow()
    }

    generateCard(movie, targetDiv)
})