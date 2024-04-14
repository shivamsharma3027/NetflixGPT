import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovies=()=>{
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      let data = await response.json();
      console.log("popular "+data);
 
      dispatch(addPopularMovies(data.results));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

};
export default usePopularMovies;