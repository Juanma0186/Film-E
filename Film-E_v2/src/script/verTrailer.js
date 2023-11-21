export function verTrailer(movieTitle) {
    const YOUTUBE_API_KEY = "AIzaSyBa4JfbgovmH0oBE3jHBJSfqTxlBCP0sZM";
    const YOUTUBE_API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${movieTitle} tráiler&type=video&key=${YOUTUBE_API_KEY}`;
  
    fetch(YOUTUBE_API_URL)
      .then((response) => response.json())
      .then((data) => {
        const videoId = data.items[0].id.videoId;
        const trailerContainer = document.getElementById("trailerContainer");
        trailerContainer.innerHTML = `
                      <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  `;
        document.getElementById("trailerModal").classList.remove("hidden");
      })
      .catch((error) => console.error("Error:", error));
  }
  