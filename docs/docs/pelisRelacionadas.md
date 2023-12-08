# Películas relacionadas con el Actor/Actriz

## ¿Cómo las encontramos?

Para encontrar las películas relacionadas con el actor/actriz, utilizaremos la API de [The Movie Database](https://www.themoviedb.org/). Mediante la siguiente llamada a la API, obtendremos las películas en las que ha participado el actor/actriz:

```url title="Llamada a la API"
https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=a35eb9b2a0da4da2cd02766b7d42ed24&language=es-ES
```

Donde `actorId` es el id del actor/actriz que queremos buscar.

## Respuesta de la API

La API nos devolverá un JSON con los datos de las series donde aparece el actor correspondiente, como en el siguiente ejemplo:

```JSON title="Respuesta de la API"
"cast": [
    {
      "adult": false,
      "backdrop_path": "/z6eMgnSt6VA0Gf9dirjpkBPu0uS.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 1824,
      "original_language": "en",
      "original_title": "50 First Dates",
      "overview": "Henry Roth (Adam Sandler) es un veterinario marino que vive en Hawái y sale con muchas mujeres. Un día conoce a Lucy Whitmore (Drew Barrymore), una artista que tiene amnesia y no recuerda nada al día siguiente. Henry se enamora de ella y trata de hacer que se enamore de él cada día, inventando nuevas formas de llamar su atención. Pero tendrá que enfrentarse a varios obstáculos, como el ex novio de Lucy, el padre de ella y el olvido de la chica.",
      "popularity": 28.967,
      "poster_path": "/iuBSUp33aTqXXRokt4v2wZrsqcj.jpg",
      "release_date": "2004-02-13",
      "title": "50 primeras citas",
      "video": false,
      "vote_average": 6.855,
      "vote_count": 6777,
      "character": "Henry Roth",
      "credit_id": "52fe4318c3a36847f8039b37",
      "order": 0
    },
    {
      "adult": false,
      "backdrop_path": "/7P3VyWQTnZOYIQnk5seM0YQ9ucg.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 2022,
      "original_language": "en",
      "original_title": "Mr. Deeds",
      "overview": "Deeds (Adam Sandler) es un ingenuo provinciano que vive en un pueblo de New Hampshire. Como propietario de \"Deeds’ Pizza\", la única pizzeria del pueblo, se ha hecho muy popular por su particular manera de entretener a los clientes recitándoles sus insólitos poemas. La vida transcurre plácidamente hasta que recibe la noticia de que un pariente lejano le ha dejado una herencia de cuarenta billones de dólares, una cadena de medios de comunicación, un equipo de fútbol, un equipo de baloncesto y un helicóptero privado.",
      "popularity": 24.734,
      "poster_path": "/2GeytVXwD5OsMGAYtl8sNeOv79M.jpg",
      "release_date": "2002-06-28",
      "title": "Mr. Deeds",
      "video": false,
      "vote_average": 5.851,
      "vote_count": 2084,
      "character": "Longfellow Deeds",
      "credit_id": "52fe432dc3a36847f8040331",
      "order": 0
    },
    {
      "adult": false,
      "backdrop_path": "/1STpoknpEUiyory94WxGIhQHPIp.jpg",
      "genre_ids": [
        14,
        35,
        10751,
        10749
      ],
      "id": 10202,
      "original_language": "en",
      "original_title": "Bedtime Stories",
      "overview": "La vida de Skeeter Bronson (Adam Sandler), un empleado de hotel, se complica cuando, de repente y misteriosamente, los cuentos que lee a sus sobrinos para que se duerman, se convierten en realidad.",
      "popularity": 25.726,
      "poster_path": "/8KL5iWGQHuQsKJzuZmkZNYpLnJ9.jpg",
      "release_date": "2008-12-24",
      "title": "Más allá de los sueños",
      "video": false,
      "vote_average": 6.1,
      "vote_count": 2658,
      "character": "Skeeter Bronson",
      "credit_id": "52fe43409251416c750095ad",
      "order": 0
    }
  ]
```

## ¿Como las mostramos?

Para mostrar las películas relacionadas con el actor/actriz, utilizaremos la misma estructura que en la sección de películas populares en el [index](populares.md), pero en este caso, en vez de mostrar las películas más populares, mostraremos las películas que nos devuelve la llamada que hemos hecho anteriormente.

```js title="mainDetalleActor.js"
import { ACTOR_API_URL, ACTOR_MOVIE_CREDITS_API_URL, ACTOR_TV_CREDITS_API_URL } from "./config.js";
import { printMovies } from "./printMovie.js";
import { verDetalleActor } from "./verDetalleActor.js";

window.onload = function () {
  verDetalleActor(ACTOR_API_URL);
  printMovies(ACTOR_MOVIE_CREDITS_API_URL, "cineList", true);
};
```

En este caso podemos observar que mostramos el detalle del actor y pintamos las películas con la función `printMovies` que recibe como parámetros la URL de la API y el id del elemento HTML donde queremos mostrar las películas y un boolean que especifica si es actor o no, ya que es una función reutilizable dependiendo de los parámetros que le pasemos.


