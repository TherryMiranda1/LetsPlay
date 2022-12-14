import { spotifyProfileReducer } from './spotify.profile.slice'
import { spotifySessionReducer } from './spotify.session.slice'

import { spotifyMyAlbumsReducer } from './spotify.myAlbums.slice'
import { spotifyMyPlaylistsReducer } from './spotify.myPlaylists.slice'
import { spotifyMySongsReducer } from './spotify.mySongs.slice'

export * from './spotify.api'
export * from './spotify.session.api'
export * from './spotify.session.slice'
export * from './spotify.profile.api'
export * from './spotify.profile.slice'
export * from './spotify.myAlbums.api'
export * from './spotify.myAlbums.slice'
export * from './spotify.myPlaylists.api'
export * from './spotify.myPlaylists.slice'
export * from './spotify.mySongs.api'
export * from './spotify.mySongs.slice'

export const spotifyReducers = {
    spotifyProfile: spotifyProfileReducer,
    spotifySession: spotifySessionReducer,
    spotifyMyAlbums: spotifyMyAlbumsReducer,
    spotifyMyPlaylists: spotifyMyPlaylistsReducer, 
    spotifyMySongs: spotifyMySongsReducer, 
}