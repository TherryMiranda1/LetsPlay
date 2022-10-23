import { doAuthorizedCall } from './spotify.api'
import { updateMyPlaylists } from './spotify.myPlaylists.slice'

export const getMyPlaylists = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me/playlists',
        method: 'GET'
    })
    dispatch(updateMyPlaylists(response.items.map(item => item)))
}