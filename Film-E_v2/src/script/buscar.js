let resultados = [];

document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault();
  const titulo = document.getElementById("titulo").value;
  const tipo = document.getElementById("tipo").value;
  buscar(titulo, tipo);
});

document.getElementById("ordenFecha").addEventListener("change", function () {
  ordenarResultados(this.value);
});

document.getElementById("ordenPopularidad").addEventListener("change", function () {
  ordenarResultados(this.value);
});

document.getElementById("ordenTitulo").addEventListener("change", function () {
  ordenarResultados(this.value);
});

async function buscar(titulo, tipo) {
  const response = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=a35eb9b2a0da4da2cd02766b7d42ed24&query=${titulo}`);
  const data = await response.json();
  resultados = data.results.filter(resultado => ["movie", "tv"].includes(resultado.media_type) && (tipo ? resultado.media_type === tipo : true));
  mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
  const contenedor = document.getElementById("resultados");
  contenedor.innerHTML = "";
  if (resultados.length === 0) {
    contenedor.innerHTML = "<p class='text-lg text-gris-300 font-bold' >Ninguna película o serie coincide con tu búsqueda.</p>";
    return;
  }
  for (const resultado of resultados) {
    console.log(resultado);
    const movie = document.createElement("a");
    movie.href = resultado.release_date
      ? `./detallePelicula.html?id=${resultado.id}`
      : `./detalleSerie.html?id=${resultado.id}`;
    movie.className = "p-4 bg-white rounded shadow resultado";
    movie.innerHTML = `
            <h2 class="text-lg font-bold mb-2 ">${resultado.title || resultado.name}</h2>
            <img src="${resultado.poster_path ? `https://image.tmdb.org/t/p/w500${resultado.poster_path}` : "img/default.png"}" alt="${resultado.title || resultado.name}" class="w-full rounded mb-2">
            <p><strong>Tipo:</strong> ${resultado.media_type === "movie" ? "Película" : "Serie"}</p>
            <p><strong>Fecha de lanzamiento:</strong> ${resultado.release_date || resultado.first_air_date}</p>
            <p><strong>Popularidad:</strong> ${resultado.popularity}</p>
        `;
    contenedor.appendChild(movie);
  }
}

function ordenarResultados(orden) {
  resultados.sort((a, b) => {
    if (orden.includes("release_date")) {
      const fechaA = new Date(a.release_date || a.first_air_date);
      const fechaB = new Date(b.release_date || b.first_air_date);
      return orden.includes("asc") ? fechaA - fechaB : fechaB - fechaA;
    } else if (orden.includes("popularity")) {
      return orden.includes("asc") ? a.popularity - b.popularity : b.popularity - a.popularity;
    } else if (orden.includes("title")) {
      const tituloA = a.title || a.name;
      const tituloB = b.title || b.name;
      return orden.includes("asc") ? tituloA.localeCompare(tituloB) : tituloB.localeCompare(tituloA);
    }
    return 0;
  });
  mostrarResultados(resultados);
}
