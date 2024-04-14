import React from 'react'



import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovies=()=>{
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      let data = await response.json();
      console.log("TopRated "+data);
 
      dispatch(addTopRatedMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);

};
export default useTopRatedMovies;