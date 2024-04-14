import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // if (!movies || !movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) {
  //   return <div>Loading...</div>;
  // }
  // if (!movies || !movies.popularMovies || movies.popularMovies.length === 0) {
  //   return <div>Loading...</div>;
  // }

  
  return (

    (movies.popularMovies && movies.nowPlayingMovies && movies.upcomingMovies&& movies.topRatedMovies)&&(<div className=' bg-black '>
    <div className='-mt-52  pl-12- relative z-20'>

      <MovieList title={"Now Playing"}  movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"}  movies={movies.upcomingMovies}/>
      <MovieList title={"Popular"}  movies={movies.popularMovies}/>
      <MovieList title={"Top Rated"}  movies={movies.topRatedMovies}/>
    </div>
    </div>)
  )
}

export default SecondaryContainer