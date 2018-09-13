import { parse } from 'url'

export const host = it => parse(it).host
export { parse }
