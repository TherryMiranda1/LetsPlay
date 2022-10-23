import { doAuthorizedCall } from './spotify.api'
import { updateMySongs } from './spotify.mySongs.slice'

export const getMySongs = () => async (dispatch, getState) => {
    const response = await doAuthorizedCall({
        getState,
        url: 'https://api.spotify.com/v1/me/tracks',
        method: 'GET'
    })


    dispatch(updateMySongs(response.items.map(item => item.track)))
}