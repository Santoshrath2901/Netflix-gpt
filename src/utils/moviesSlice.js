import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    TopRatedMovies : null,
    UpcomingMovies : null,
    Ontheair : null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.PopularMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addTopRatedMovies: (state,action) => {
      state.TopRatedMovies = action.payload;
    },
    addUpcomingMovies: (state,action) => {
      state.UpcomingMovies = action.payload;
    },
    addOntheair: (state,action) => {
      state.Ontheair = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies,addTopRatedMovies,addUpcomingMovies,addOntheair } =
  moviesSlice.actions;

export default moviesSlice.reducer;