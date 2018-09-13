import { platforms, state } from './types'
import appleFetch from './apple-music/fetch' 
import spotifyFetch from './spotify/fetch' 

const { OK, ERROR } = state
const { APPLE, SPOTIFY } = platforms

let match = { state: ERROR } | { state: ERROR, f: () => {} }
    match = { id: APPLE }    | { state: OK, f: appleFetch }
    match = { id: SPOTIFY }  | { state: OK, f: spotifyFetch }
    match = { id }           | { state: ERROR, reason: `Unknown id type: ${id}` }

// main
export default (url, it) => match(it)
