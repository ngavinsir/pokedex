import { render, screen } from "@/test/app-test-utils"
import { PokemonList } from "../PokemonList"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import pokemonsData from "@/test/data/pokemons-data.json"

test("it render pokemon detail", async () => {
  const history = createMemoryHistory()
  await render(
    <Router history={history}>
      <PokemonList />
    </Router>
  )

  await new Promise(resolve => setTimeout(resolve, 0))

  const pokemons = screen.getAllByRole("listitem")
  expect(pokemons).toHaveLength(pokemonsData.length)

  for (const pokemon of pokemonsData) {
    expect(screen.getByText(pokemon.name)).toBeInTheDocument()
  }
})
