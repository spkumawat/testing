let api = 'http://www.omdbapi.com/?apikey=61e576a4&t=';

function searchMovie() {
    let query = document.getElementById('movieName').value;
    let search = api + query;
    
    fetch(search) // Using fetch to make the API request
        .then(response => {
            // if (!response.ok) {
            //     throw new Error('Network response was not ok.');
            // }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Update DOM elements with fetched data
            document.getElementById('title').innerText = data.Title;
            document.getElementById('desc').innerText = data.Plot;
            document.getElementById('genre').innerText = data.Genre;
            document.getElementById('actors').innerText = data.Actors;
            document.getElementById('directors').innerText = data.Director;
            document.getElementById('awards').innerText = data.Awards;
            document.getElementById('collection').innerText = data.BoxOffice;
            document.getElementById('ratings').innerText = data.imdbRating;
            document.getElementById('writers').innerText = data.Writer;
            document.getElementById('poster').src = data.Poster;
        })
        .catch(error => {
            // Handle errors, such as network issues or invalid response
            console.error('Error fetching data:', error);
        });
}
