import { env } from './utils/env'
import { parse, host } from './utils/url'
import { state, platforms } from './types'

const { OK, ERROR } = state
const { APPLE, SPOTIFY } = platforms
const { APPLE_API, SPOTIFY_API } = env()

let match = { host: host(APPLE_API) }   | { state: OK, id: APPLE }
    match = { host: host(SPOTIFY_API) } | { state: OK, id: SPOTIFY }
    match = { host }                    | { state: ERROR, reason: `Did not match host: ${host}` }

// main
export default url => url
 |> parse
 |> match
