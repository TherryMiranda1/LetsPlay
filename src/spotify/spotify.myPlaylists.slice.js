import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    playlists: [],
};

export const spotifyMyPlaylistsSlice = createSlice({
    name: 'spotifyMyPlaylists',
    initialState,
    reducers: {
        updateMyPlaylists: (state, action) => {
            state.playlists = action.payload
        }
    },
});

export const {
    updateMyPlaylists
} = spotifyMyPlaylistsSlice.actions;

export const spotifyMyPlaylistsReducer = spotifyMyPlaylistsSlice.reducer

