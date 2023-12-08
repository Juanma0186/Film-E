# API

## ¿Qué es una API?

Una API es un conjunto de funciones y procedimientos que nos permite crear aplicaciones web, ya que nos permite comunicarnos con un servidor y obtener la información que necesitamos.

En nuestro caso no crearemos una API, sino que consumiremos una existente para obtener la información que necesitamos.

## Como funciona la API de The Movie Database

La API de The Movie Database nos permite obtener información de películas, series, actores, etc. Para ello, tenemos que hacer peticiones a la API y esta nos devolverá un JSON con la información que necesitamos.

## ¿Cómo hacer peticiones a la API?

Para hacer peticiones a la API, tenemos que tener una clave de API, que nos permitirá hacer peticiones a la API. Para obtener una clave de API, tenemos que registrarnos en la web de [The Movie Database](https://www.themoviedb.org/).

Una vez registrados, nos dirigimos a la sección de API y creamos una nueva clave de API.

Un ejemplo de llamada sería el siguiente:

```url
https://api.themoviedb.org/3/movie/popular?api_key=a35eb9b2a0da4da2cd02766b7d42ed24&language=es-ES&page=1
```

En este caso, estamos haciendo una llamada a la API para obtener las películas más populares. Para ello, tenemos que hacer una petición a la URL anterior, que nos devolverá un JSON con la información que necesitamos.

## Respuesta de la API

Las respuestas de la API son en formato JSON, por lo que tendremos que convertirlo a un objeto de JavaScript para poder trabajar con él.

La respuesta a la petición del apartado anterior sería:

```json title="Respuesta JSON"
{
  "page": 1,
  "results": [
    {
      "adult": false,
      "backdrop_path": "/xgGGinKRL8xeRkaAR9RMbtyk60y.jpg",
      "genre_ids": [
        16,
        10751,
        10402,
        14,
        35
      ],
      "id": 901362,
      "original_language": "en",
      "original_title": "Trolls Band Together",
      "overview": "Cuando Floyd, uno de los hermanos de Branch, es secuestrado por una pareja de maléficas estrellas del pop para aprovecharse de su talento musical, Branch y Poppy tendrán que embarcarse en un viaje tan aterrador como emotivo para reunir a la familia y rescatar a Floyd de un destino aún peor que el desolador olvido de los fans.",
      "popularity": 1745.484,
      "poster_path": "/yco6dWR1W3iANUEKxGT0vQRWrJn.jpg",
      "release_date": "2023-10-12",
      "title": "Trolls 3: Todos juntos",
      "video": false,
      "vote_average": 7.175,
      "vote_count": 297
    },
    {
      "adult": false,
      "backdrop_path": "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "id": 1075794,
      "original_language": "en",
      "original_title": "Leo",
      "overview": "Leo (Sandler) es un lagarto de 74 años que lleva atrapado en el mismo aula de Florida durante décadas con su compañera de terrario, una tortuga (Bill Burr). Cuando se entera de que solo le queda un año de vida, Leo planea escapar para experimentar la vida en el exterior, pero entonces comienzan sus problemas.",
      "popularity": 1355.78,
      "poster_path": "/hs41WYhEuaq4PaBbtaoCfGFEebi.jpg",
      "release_date": "2023-11-17",
      "title": "Leo",
      "video": false,
      "vote_average": 7.529,
      "vote_count": 441
    },
    {
      "adult": false,
      "backdrop_path": "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
      "genre_ids": [
        28,
        35
      ],
      "id": 897087,
      "original_language": "en",
      "original_title": "Freelance",
      "overview": "Mason Petit (John Cena) es un soldado retirado de las fuerzas especiales que, tras años de paz, tranquilidad y monotonía, decide abandonar su aburrido retiro en los suburbios para volver al trabajo y proteger a la periodista (Alison Brie) mientras entrevista a un cruel dictador (Juan Pablo Raba). En mitad de la entrevista, estallará un golpe militar que hará peligrar sus vidas y les llevará a esconderse en la selva donde deberán emplearse a fondo para sobrevivir.",
      "popularity": 1104.66,
      "poster_path": "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
      "release_date": "2023-10-05",
      "title": "Freelance",
      "video": false,
      "vote_average": 6.427,
      "vote_count": 150
    },
    {
      "adult": false,
      "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
      "genre_ids": [
        18,
        36
      ],
      "id": 872585,
      "original_language": "en",
      "original_title": "Oppenheimer",
      "overview": "Película sobre el físico J. Robert Oppenheimer y su papel como desarrollador de la bomba atómica. Basada en el libro 'American Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer' de Kai Bird y Martin J. Sherwin.",
      "popularity": 960.238,
      "poster_path": "/ncKCQVXgk4BcQV6XbvesgZ2zLvZ.jpg",
      "release_date": "2023-07-19",
      "title": "Oppenheimer",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 5221
    },
    {
      "adult": false,
      "backdrop_path": "/4MUfDtBqUFqotGF5RJOfNfoBTLo.jpg",
      "genre_ids": [
        28,
        27,
        14
      ],
      "id": 951546,
      "original_language": "en",
      "original_title": "Reign of Chaos",
      "overview": "Cuando el mundo se ve afectado por una plaga desatada por el malvado señor Chaos, y los humanos se convierten en criaturas rabiosas, la humanidad solo puede ser salvada por tres mujeres jóvenes, descendientes de una Diosa, con el poder de detener el mal de Chaos.",
      "popularity": 734.473,
      "poster_path": "/nTMmpvR9TyV631tpFr4FtYxG0FC.jpg",
      "release_date": "2022-04-12",
      "title": "Reign of Chaos",
      "video": false,
      "vote_average": 5.531,
      "vote_count": 16
    },
    {
      "adult": false,
      "backdrop_path": "/oqbcmZJJ1EWkOPiGjqABaUN18rI.jpg",
      "genre_ids": [
        16,
        35,
        10751
      ],
      "id": 1046032,
      "original_language": "en",
      "original_title": "The Bad Guys: A Very Bad Holiday",
      "overview": "Para poder llevar a cabo su superatraco navideño anual, Lobo y su banda de animales ladrones tendrán que conseguir que la ciudad recupere el espíritu festivo… ¡y rápido!",
      "popularity": 677.752,
      "poster_path": "/zRFEchHTrreuJdAZUgmwOz22RbC.jpg",
      "release_date": "2023-11-30",
      "title": "Los tipos malos: Una navidad muy mala",
      "video": false,
      "vote_average": 5.727,
      "vote_count": 22
    },
    {
      "adult": false,
      "backdrop_path": "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      "genre_ids": [
        27,
        9648
      ],
      "id": 507089,
      "original_language": "en",
      "original_title": "Five Nights at Freddy's",
      "overview": "Un guardia de seguridad con problemas comienza a trabajar en Freddy Fazbear's Pizza. Mientras pasa su primera noche en el trabajo, se da cuenta de que el turno de noche en Freddy's no será tan fácil de superar.",
      "popularity": 677.345,
      "poster_path": "/t6RSJ1z8bDEYpk4fLwxfkXciUak.jpg",
      "release_date": "2023-10-25",
      "title": "Five Nights at Freddy's",
      "video": false,
      "vote_average": 7.841,
      "vote_count": 2692
    },
    {
      "adult": false,
      "backdrop_path": "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
      "genre_ids": [
        878,
        28,
        53
      ],
      "id": 670292,
      "original_language": "en",
      "original_title": "The Creator",
      "overview": "En medio de una guerra futura entre la raza humana y las fuerzas de la inteligencia artificial, Joshua, un duro exagente de las fuerzas especiales que llora la desaparición de su esposa es reclutado para cazar y matar al Creador, el escurridizo arquitecto de la IA avanzada que ha desarrollado una misteriosa arma con el poder de acabar con la guerra... y con la propia humanidad.",
      "popularity": 651.841,
      "poster_path": "/c6otMCRG9bZzI97o9V8hCkOgUvA.jpg",
      "release_date": "2023-09-27",
      "title": "The Creator",
      "video": false,
      "vote_average": 7.13,
      "vote_count": 1318
    },
    {
      "adult": false,
      "backdrop_path": "/iaMIylLoN7Y3CvrA0pg2ZFKjk26.jpg",
      "genre_ids": [
        10752,
        18,
        28
      ],
      "id": 1047925,
      "original_language": "en",
      "original_title": "Come Out Fighting",
      "overview": "A fines de 1944, durante la Segunda Guerra Mundial, el ejército estadounidense se abre camino a través del campo en la frontera de Francia entrando en la Alemania nazi. Hitler, desesperado por cambiar el rumbo, ha desplegado su arma secreta: un avión de combate M-262. El teniente Frank Ross, un piloto de combate P-51 Mustang, se encuentra con el arma nazi y se produce una intensa batalla aérea.",
      "popularity": 592.553,
      "poster_path": "/kSMAS7AyXCFOPFWaw8eJOnk2YBr.jpg",
      "release_date": "2023-05-19",
      "title": "Juntos en combate",
      "video": false,
      "vote_average": 4.7,
      "vote_count": 22
    },
    {
      "adult": false,
      "backdrop_path": "/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 385687,
      "original_language": "en",
      "original_title": "Fast X",
      "overview": "Dom Toretto y su familia se convierten en el objetivo del vengativo hijo del capo de las drogas Hernán Reyes.",
      "popularity": 589.347,
      "poster_path": "/qDRrP4NATGTWH8ORJV6T0BeoIhQ.jpg",
      "release_date": "2023-05-17",
      "title": "Fast & Furious X",
      "video": false,
      "vote_average": 7.197,
      "vote_count": 4403
    },
    {
      "adult": false,
      "backdrop_path": "/j9LX1sF7WSXmJlnhf0RGpWzEC0i.jpg",
      "genre_ids": [
        28,
        12,
        53
      ],
      "id": 299054,
      "original_language": "en",
      "original_title": "Expend4bles",
      "overview": "Cuarta entrega de la saga Los Mercenarios. El veterano mercenario Barney “Esquizo” Ross (Sylvester Stallone) y su equipo de estrellas, formado por los hombres más duros (Jason Statham, Dolph Lundgren, 50 Cent, Megan Fox…), afrontan un nuevo desafío, en una trama cargada de acción. Para superarlo y salir airosos, deberán recurrir a su ingenio, experiencia y a la fuerza bruta que los caracteriza.",
      "popularity": 584.696,
      "poster_path": "/2jmE7xH0R0dikmc8iplCPCit4MD.jpg",
      "release_date": "2023-09-15",
      "title": "Los mercenarios 4",
      "video": false,
      "vote_average": 6.428,
      "vote_count": 866
    },
    {
      "adult": false,
      "backdrop_path": "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 575264,
      "original_language": "en",
      "original_title": "Mission: Impossible - Dead Reckoning Part One",
      "overview": "Ethan Hunt (Tom Cruise) y la IMF emprenden la misión más peligrosa a la que nunca se han enfrentado: rastrear una nueva y aterradora arma que amenaza a toda la humanidad antes de que caiga en las manos de un enemigo todopoderoso y misterioso.",
      "popularity": 553.443,
      "poster_path": "/83sGKvCv2T2CulYbd40Aeduc7n2.jpg",
      "release_date": "2023-07-08",
      "title": "Misión: Imposible - Sentencia mortal parte uno",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 2635
    },
    {
      "adult": false,
      "backdrop_path": "/uIk2g2bRkNwNywKZIhC5oIU94Kh.jpg",
      "genre_ids": [
        35,
        10751,
        14
      ],
      "id": 787699,
      "original_language": "en",
      "original_title": "Wonka",
      "overview": "Basada en el personaje que protagoniza \"Charlie y la fábrica de chocolate\", el libro infantil más emblemático de Roald Dahl y uno de los más vendidos de todos los tiempos, \"Wonka\" cuenta la historia de cómo el mayor inventor, mago y chocolatero del mundo se convirtió en el querido Willy Wonka que conocemos hoy en día.",
      "popularity": 534.484,
      "poster_path": "/x6p5jZw7YwqBadiKBDzmXs03Emz.jpg",
      "release_date": "2023-12-06",
      "title": "Wonka",
      "video": false,
      "vote_average": 7.079,
      "vote_count": 19
    },
    {
      "adult": false,
      "backdrop_path": "/sp6egj5NHHRGmCMdIoTNdbLwACR.jpg",
      "genre_ids": [
        35,
        14,
        10751
      ],
      "id": 1022964,
      "original_language": "en",
      "original_title": "Candy Cane Lane",
      "overview": "Después de que Chris, sin darse cuenta, haga un trato con una traviesa elfa llamada Pepper para mejorar sus posibilidades de ganar, ella lanza un hechizo mágico donde los 12 días de Navidad cobran vida y causan estragos en toda la ciudad. A riesgo de arruinar las fiestas para su familia, Chris, su esposa Carol y sus tres hijos deben correr contrarreloj para romper el hechizo de Pepper, luchar contra retorcidos personajes mágicos y salvar la Navidad para todos.",
      "popularity": 516.181,
      "poster_path": "/8tpxgH4hAeG61dFfjPKiVZFTFoZ.jpg",
      "release_date": "2023-11-29",
      "title": "Navidad en Candy Cane Lane",
      "video": false,
      "vote_average": 6.402,
      "vote_count": 97
    },
    {
      "adult": false,
      "backdrop_path": "/vRx6kzCItpqwnYCcj2z8qf70gv3.jpg",
      "genre_ids": [
        28,
        18,
        10749
      ],
      "id": 10908,
      "original_language": "en",
      "original_title": "Inferno",
      "overview": "Un hombre acabado, al borde del suicidio, llega a la ciudad de Inferno, donde en un esfuerzo por recuperar todo aquello que le ha sido arrebatado, recobrará su fuerza y su espíritu. Allí se dará cuenta de que, por más que intente evitarlo, no le quedará más remedio que enfrentarse a los villanos para defender a sus habitantes, a pesar de que en un principio no son para él más que un puñado de desconocidos.",
      "popularity": 497.477,
      "poster_path": "/c5A6rdGrfFBas8trY75uHBvHaVV.jpg",
      "release_date": "1999-09-25",
      "title": "Van Damme's Inferno",
      "video": false,
      "vote_average": 6.104,
      "vote_count": 276
    },
    {
      "adult": false,
      "backdrop_path": "/g9YlEHnShgNAnvN0jOoYn6U87rV.jpg",
      "genre_ids": [
        18,
        878,
        28,
        27
      ],
      "id": 940721,
      "original_language": "ja",
      "original_title": "ゴジラ-1.0",
      "overview": "En el Japón de la posguerra surge un nuevo terror. ¿Podrán sobrevivir las personas devastadas... y mucho menos defenderse?",
      "popularity": 490.909,
      "poster_path": "/buvBq2zLP7CcJth8tjrI4znvfEO.jpg",
      "release_date": "2023-11-03",
      "title": "Godzilla Minus One",
      "video": false,
      "vote_average": 8.4,
      "vote_count": 60
    },
    {
      "adult": false,
      "backdrop_path": "/m06dOSnShSmGfVgz4iSQhx6bzWv.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 775244,
      "original_language": "ar",
      "original_title": "موسى",
      "overview": "Un estudiante universitario de ingeniería inventa el primer robot de este tipo en el Medio Oriente, en un intento de vengar la muerte de su padre y lograr justicia, lo que hace que las autoridades lo persigan.",
      "popularity": 490.142,
      "poster_path": "/voo0uaAVCGYgAAeJEf5peFNPOAI.jpg",
      "release_date": "2021-08-11",
      "title": "Mousa",
      "video": false,
      "vote_average": 6.619,
      "vote_count": 21
    },
    {
      "adult": false,
      "backdrop_path": "/8WBh82iOYRykS3C05RipWTX70xh.jpg",
      "genre_ids": [
        35,
        14,
        10751,
        80
      ],
      "id": 798021,
      "original_language": "en",
      "original_title": "Family Switch",
      "overview": "Poco antes de Navidad, el caos sacude a una familia: por una extraña conjunción cósmica, los padres intercambian sus cuerpos con los de sus hijos adolescentes.",
      "popularity": 481.575,
      "poster_path": "/mDJiZua9gUzHRwefHhw2OaJ8HTF.jpg",
      "release_date": "2023-11-30",
      "title": "Familia revuelta",
      "video": false,
      "vote_average": 6.353,
      "vote_count": 180
    },
    {
      "adult": false,
      "backdrop_path": "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      "genre_ids": [
        80,
        18,
        36
      ],
      "id": 466420,
      "original_language": "en",
      "original_title": "Killers of the Flower Moon",
      "overview": "Miembros de la tribu Osage de los Estados Unidos, son asesinados bajo misteriosas circunstancias en la década de 1920 provocando una importante investigación por el FBI involucrando a J. Edgar Hoover.",
      "popularity": 470.218,
      "poster_path": "/aZXHjmhSSGUshLEdgsNCTH9z7Ix.jpg",
      "release_date": "2023-10-18",
      "title": "Los asesinos de la luna",
      "video": false,
      "vote_average": 7.69,
      "vote_count": 1128
    },
    {
      "adult": false,
      "backdrop_path": "/wurJckmxIzn2GrJcPDuNFFy1gWx.jpg",
      "genre_ids": [
        878
      ],
      "id": 920258,
      "original_language": "en",
      "original_title": "The Immortal Wars: Rebirth",
      "overview": "Rebirth tiene lugar durante las primeras etapas brutales de Dominion Industries. En esta historia, observe cómo Olive y otros desviados se someten a una serie de experimentos mortales dirigidos por Laurie Harvey y su equipo.",
      "popularity": 456.057,
      "poster_path": "/sp0fISNTyzttKfE0PB4ObG5ZRzC.jpg",
      "release_date": "2021-11-02",
      "title": "Guerras Inmortales: El Renacimiento",
      "video": false,
      "vote_average": 3.5,
      "vote_count": 2
    }
  ],
  "total_pages": 41683,
  "total_results": 833652
}
```
