let movies = [
  { id: 0, name: "star Wars - The new one 1", score: 11 },
  { id: 1, name: "star Wars - The new one 2", score: 23 },
  { id: 2, name: "star Wars - The new one 3", score: 12 },
  { id: 3, name: "star Wars - The new one 4", score: 33 },
  { id: 4, name: "star Wars - The new one 5", score: 67 },
  { id: 5, name: "star Wars - The new one 6", score: 23 },
  { id: 6, name: "star Wars - The new one 7", score: 22 },
  { id: 7, name: "star Wars - The new one 8", score: 123 },
  { id: 8, name: "star Wars - The new one 9", score: 1 },
  { id: 9, name: "star Wars - The new one 10", score: 12 }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id);
  return filteredMovies[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${getMovies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};
