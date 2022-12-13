import React, { useState, useEffect, useCallback } from 'react';

import AddMovie from './components/AddMovie';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-http-request-f29f6-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      'Content-Type': 'application/json'
    });

    const data = await response.json();
    console.log(data);
  };

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://react-http-request-f29f6-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const loadedMovies = [];

      for (let key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          releaseDate: data[key].releaseDate,
          openingText: data[key].openingText
        });
      }
      setMoviesList(loadedMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>No movies!</p>;

  if (error) content = <p>{error}</p>;

  if (moviesList.length > 0) content = <MoviesList movies={moviesList} />;

  if (isLoading) content = <p>Loading...</p>;

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}></AddMovie>
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
