import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowPlayingMovies(); //for api call for now playing movies
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  console.log(showGptSearch);
  return (
    <div>
      <Header />
      { showGptSearch ? <GptSearch/>:<><MainContainer />
      <SecondaryContainer /></>}
      {/* <GptSearch/>
      <MainContainer />
      <SecondaryContainer /> */}
    </div>
  );
};

export default Browse;
