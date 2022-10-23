import { configureStore,  } from '@reduxjs/toolkit';
import { spotifyReducers } from 'spotify';
import playerReducer from "../redux/playerSlice";

export const store = configureStore({
  reducer: {
    ...spotifyReducers,
    player: playerReducer,
  },
});
