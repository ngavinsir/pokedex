import { MockedProvider } from "@apollo/client/testing"
import { render } from "@testing-library/react"
import pokemonsDetail from "./data/pokemons-detail.json"
import pokemonsData from "./data/pokemons-data.json"
import { POKEMON } from "@/components/PokemonDetail"
import { POKEMONS } from "@/components/PokemonList"
import { PokemonBagProvider } from "@/context/PokemonBagContext"

const getPokemonMocks = pokemonsDetail.map(pokemonDetail => ({
  request: {
    query: POKEMON,
    variables: {
      name: pokemonDetail.name
    }
  },
  result: {
    data: {
      pokemon: pokemonDetail
    }
  }
}))

const getPokemonsMock = {
  request: {
    query: POKEMONS,
    variables: {
      offset: 0
    }
  },
  result: {
    data: {
      pokemons: {
        nextOffset: 12,
        results: pokemonsData
      }
    }
  }
}

const Providers = ({ children }) => {
  return (
    <PokemonBagProvider>
      <MockedProvider mocks={[...getPokemonMocks, getPokemonsMock]} addTypename={false}>
        {children}
      </MockedProvider>
    </PokemonBagProvider>
  )
}

async function customRender(ui, options) {
  return render(ui, { wrapper: Providers, ...options })
}

export * from "@testing-library/react"

export { customRender as render }
