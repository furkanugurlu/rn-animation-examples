const genres: any = {
  12: "Adventure",
  14: "Fantasy",
  16: "Animation",
  18: "Drama",
  27: "Horror",
  28: "Action",
  35: "Comedy",
  36: "History",
  37: "Western",
  53: "Thriller",
  80: "Crime",
  99: "Documentary",
  878: "Science Fiction",
  9648: "Mystery",
  10402: "Music",
  10749: "Romance",
  10751: "Family",
  10752: "War",
  10770: "TV Movie",
};

export const films = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster:
      "https://www.themoviedb.org/t/p/w440_and_h660_bestv2/dXyIK3s8ZN7FH3AoaeyaBqX0eoJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w370_and_h556_multi_faces/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    rating: 9.3,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    releaseDate: "1994-09-23",
    genres: [18, 80].map((genre: number) => genres[genre]),
  },
  {
    id: 2,
    title: "The Godfather",
    poster:
      "https://www.themoviedb.org/t/p/w440_and_h660_bestv2/obYjrjFT4iZV09YAXu53iBA51Js.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w370_and_h556_multi_faces/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    rating: 9.2,
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    releaseDate: "1972-03-14",
    genres: [18, 80].map((genre: number) => genres[genre]),
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster:
      "https://image.tmdb.org/t/p/w440_and_h660_bestv2/ggax1nyhiGIwbq1Ynk0otH2sD6.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w370_and_h556_multi_faces/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
    rating: 9.0,
    description:
      "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
    releaseDate: "2008-07-16",
    genres: [18, 28, 80, 53].map((genre: number) => genres[genre]),
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster:
      "https://www.themoviedb.org/t/p/w440_and_h660_bestv2/AgY33Wtg4737MhYopJSFyKWhKsO.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w370_and_h556_multi_faces/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    rating: 8.9,
    description:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper.",
    releaseDate: "1994-09-10",
    genres: [80, 53].map((genre: number) => genres[genre]),
  },
  {
    id: 5,
    title: "Fight Club",
    poster:
      "https://www.themoviedb.org/t/p/w440_and_h660_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/w370_and_h556_multi_faces/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    rating: 8.8,
    description:
      "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy.",
    releaseDate: "1999-10-15",
    genres: [18].map((genre: number) => genres[genre]),
  },
];
