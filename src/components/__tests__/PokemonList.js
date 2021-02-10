import { act, render, screen, waitFor } from "@/test/app-test-utils"
import { PokemonList } from "../PokemonList"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"
import pokemonsData from "@/test/data/pokemons-data.json"

test("it render pokemon list", async () => {
  const history = createMemoryHistory()
  await render(
    <Router history={history}>
      <PokemonList />
    </Router>
  )

  await waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(pokemonsData.length))

  for (const pokemon of pokemonsData) {
    expect(screen.getByText(pokemon.name)).toBeInTheDocument()
  }
})
