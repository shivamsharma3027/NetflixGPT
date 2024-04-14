import React from 'react'



import { useDispatch } from "react-redux";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovies=()=>{
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      let data = await response.json();
      console.log("TopRated "+data);
 
      dispatch(addUpcomingMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);

};
export default useUpcomingMovies;