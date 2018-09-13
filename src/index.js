import matchType from './match-url-type'
import matchFetcher from './match-fetcher'

const [, , input] = process.argv

matchType(input)
  |> (_ => matchFetcher(input, _))
  |> (({ f }) => f())
  |> console.log
