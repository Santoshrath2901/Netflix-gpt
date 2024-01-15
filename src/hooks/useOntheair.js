import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addOntheair } from "../utils/moviesSlice";

const useOntheair = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getOntheair = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addOntheair(json.results));
  };

  useEffect(() => {
    getOntheair();
  },[]);
};

export default useOntheair;