# Series relacionadas con el Actor/Actriz

## ¿Cómo las encontramos?

Para encontrar las series relacionadas con el actor/actriz, utilizaremos la API de [The Movie Database](https://www.themoviedb.org/). Mediante la siguiente llamada a la API, obtendremos las series en las que ha participado el actor/actriz:

```url title="Llamada a la API"
https://api.themoviedb.org/3/person/${actorId}/tv_credits?api_key=a35eb9b2a0da4da2cd02766b7d42ed24&language=es-ES
```

Donde `actorId` es el id del actor/actriz que queremos buscar.

## Respuesta de la API

La API nos devolverá un JSON con los datos de las series donde aparece el actor correspondiente, como en el siguiente ejemplo:

```JSON title="Respuesta de la API"
"cast": [
    {
      "adult": false,
      "backdrop_path": "/9AeiA1XtP5sel2tAf9LaGeUjhDb.jpg",
      "genre_ids": [
        35,
        80
      ],
      "id": 48891,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Brooklyn Nine-Nine",
      "overview": "El detective Jake Peralta y el capitán Ray Holt encabezan esta comedia sobre conflictos generacionales en una comisaría de Nueva York. Uno es un detective que no se toma en serio las reglas de sus superiores, mientras que el otro es un inspector empeñado en que madure de una vez y trabaje conforme a las normas del departamento.",
      "popularity": 162.034,
      "poster_path": "/hgRMSOt7a1b8qyQR68vUixJPang.jpg",
      "first_air_date": "2013-09-17",
      "name": "Brooklyn Nine-Nine",
      "vote_average": 8.22,
      "vote_count": 2962,
      "character": "Adam Sandler",
      "credit_id": "52ef264a760ee334bc1e6086",
      "episode_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        35
      ],
      "id": 2067,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "The Showbiz Show with David Spade",
      "overview": "",
      "popularity": 9.242,
      "poster_path": null,
      "first_air_date": "2005-09-17",
      "name": "The Showbiz Show with David Spade",
      "vote_average": 8.5,
      "vote_count": 2,
      "character": "",
      "credit_id": "525720ac760ee3776a1fe87b",
      "episode_count": 1
    },
    {
      "adult": false,
      "backdrop_path": null,
      "genre_ids": [
        99
      ],
      "id": 4325,
      "origin_country": [
        "US"
      ],
      "original_language": "en",
      "original_name": "Pet Star",
      "overview": "",
      "popularity": 17.205,
      "poster_path": "/zMpgsJIH0G0rAEaWQUzONCvN6Fr.jpg",
      "first_air_date": "2002-08-09",
      "name": "Pet Star",
      "vote_average": 7.8,
      "vote_count": 5,
      "character": "Self - Judge",
      "credit_id": "525763bd760ee36aaa33f6c6",
      "episode_count": 1
    },
    {
      "adult": false,
      "backdrop_path": "/vDwYxbJwIB9hCYZeSiweQCxTWNs.jpg",
      "genre_ids": [
        10763
      ],
      "id": 1514,
      "origin_country": [
        "GB"
      ],
      "original_language": "en",
      "original_name": "The One Show",
      "overview": "",
      "popularity": 354.242,
      "poster_path": "/qCOlMsNSMDF5ZSvyzLJnFCqehkZ.jpg",
      "first_air_date": "2006-08-14",
      "name": "The One Show",
      "vote_average": 5.2,
      "vote_count": 20,
      "character": "Self",
      "credit_id": "52570a63760ee3776a059a7f",
      "episode_count": 3
    }
  ]
```

## ¿Como las mostramos?

Para mostrar las películas relacionadas con el actor/actriz, utilizaremos la misma estructura que en la sección de [Películas](pelis.md), pero en este caso, en vez de mostrar las películas más populares, mostraremos las películas que nos devuelve la llamada que hemos hecho anteriormente.

```js title="mainDetalleActor.js"
import { ACTOR_API_URL, ACTOR_MOVIE_CREDITS_API_URL, ACTOR_TV_CREDITS_API_URL } from "./config.js";
import { printMovies } from "./printMovie.js";
import { verDetalleActor } from "./verDetalleActor.js";

window.onload = function () {
  verDetalleActor(ACTOR_API_URL);
  printMovies(ACTOR_TV_CREDITS_API_URL, "cineList", true);
};
```

En este caso utilizamos la misma función pero con solo cambiar la URL de la API, nos mostrará las series en vez de las películas.


