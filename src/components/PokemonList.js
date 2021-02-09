import { useQuery, gql } from "@apollo/client"
import InfiniteScroll from "react-infinite-scroll-component"
import "twin.macro"
import { CenterMessage } from "./lib"
import { PokemonItem } from "./PokemonItem"

const POKEMONS = gql`
  query pokemons($offset: Int) {
    pokemons(limit: 12, offset: $offset) {
      nextOffset
      results {
        id
        name
        image
      }
    }
  }
`

export function PokemonList({}) {
  const {
    loading,
    error,
    data: { pokemons: { nextOffset = 0, results = [] } = {} } = {},
    fetchMore
  } = useQuery(POKEMONS, {
    variables: { offset: 0 },
    notifyOnNetworkStatusChange: true
  })
  const loadMorePokemons = () => {
    fetchMore({
      variables: {
        offset: results.length
      }
    })
  }

  if (error) {
    return <CenterMessage>Can't fetch pokemons...</CenterMessage>
  }

  return (
    <div tw="px-2 xs:px-6 py-4">
      <InfiniteScroll
        tw="flex flex-col space-y-8"
        dataLength={results.length}
        next={loadMorePokemons}
        hasMore={nextOffset !== 0 && !loading}
      >
        {results.map(pokemon => (
          <PokemonItem key={pokemon.id} {...pokemon} />
        ))}
        {loading && <span tw="self-center">Loading ...</span>}
      </InfiniteScroll>
    </div>
  )
}
