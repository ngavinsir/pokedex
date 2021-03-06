import { usePokemonBag } from "@/context/PokemonBagContext"
import { useQuery, gql } from "@apollo/client"
import InfiniteScroll from "react-infinite-scroll-component"
import "twin.macro"
import { CenterMessage, Title } from "./lib"
import { PokemonItem } from "./PokemonItem"

export const POKEMONS = gql`
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

export function PokemonList() {
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

  const { capturedCount } = usePokemonBag()

  if (error) {
    console.log(error)
    return <CenterMessage>Can't fetch pokemons...</CenterMessage>
  }

  return (
    <section tw="px-2 xs:px-6 py-4 flex flex-col max-w-lg mx-auto">
      <Title>Pokemons</Title>
      <InfiniteScroll
        dataLength={results.length}
        next={loadMorePokemons}
        scrollableTarget="content"
        hasMore={nextOffset !== 0 && !loading}
      >
        <div role="list" tw="flex flex-col space-y-8">
          {results.map(pokemon => (
            <PokemonItem
              key={pokemon.id}
              {...pokemon}
              capturedCount={capturedCount(pokemon.name)}
            />
          ))}
          {loading && <span tw="self-center">Loading ...</span>}
        </div>
      </InfiniteScroll>
    </section>
  )
}
