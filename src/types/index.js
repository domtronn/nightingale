import Enum from '../utils/enum'

export const platforms = Enum([
  'apple', 'spotify', 'google-play', 'deeze'
])

export const media = Enum([
  'song', 'album', 'playlist'
])

export const state = Enum([
  'ok', 'error'
])
