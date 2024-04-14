import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

 const useMovieTrailer=(movieId)=>{
  const dispatch=useDispatch();
  const getMovieVideos = async () => {
    try {
      let response = await fetch(
        "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
        API_OPTIONS
      );
      let data = await response.json();
      // console.log(data);

      const filterData = data.results.filter((data) => data.type === "Trailer");
      const trailer = filterData.length ? filterData[0] : json.result[0];
      // console.log(trailer);
      dispatch(addTrailerVideo(trailer));

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}
export default useMovieTrailer
