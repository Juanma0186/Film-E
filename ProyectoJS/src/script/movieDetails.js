const API_KEY = 'a35eb9b2a0da4da2cd02766b7d42ed24'; 
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const movieId = new URLSearchParams(window.location.search).get('id');
const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
const CAST_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;

fetch(MOVIE_API_URL)
    .then(response => response.json())
    .then(movie => {
        const movieDetails = document.getElementById('movieDetails');
        movieDetails.innerHTML = `
            <img class="w-full h-64 object-cover rounded-lg mb-5" src="${IMAGE_URL}${movie.poster_path}" alt="${movie.title}">
            <h2 class="text-2xl font-bold mb-3">${movie.title}</h2>
            <p class="text-gray-500">${movie.overview}</p>
        `;
    })
    .catch(error => console.error('Error:', error));

fetch(CAST_API_URL)
    .then(response => response.json())
    .then(data => {
        const castList = document.getElementById('castList');
        data.cast.slice(0, 10).forEach(member => {
            const castMember = document.createElement('div');
            castMember.classList.add('bg-white', 'p-2', 'rounded-lg', 'shadow-md');
            castMember.innerHTML = `
                <img class="w-40 h-36 object-cover rounded-lg mb-2" src="${IMAGE_URL}${member.profile_path}" alt="${member.name}">
                <p class="text-sm">${member.name} como ${member.character}</p>
            `;
            castList.appendChild(castMember);
        });
    })
    .catch(error => console.error('Error:', error));

document.getElementById('backButton').addEventListener('click', () => {
    window.history.back();
});
