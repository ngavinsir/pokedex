import { render, screen } from "@/test/app-test-utils"
import { PokemonDetail } from "../PokemonDetail"
import { Router } from "react-router-dom"
import { createMemoryHistory } from "history"

test("it render pokemon detail", async () => {
  const history = createMemoryHistory({ initialEntries: ["/pokemon?name=bulbasaur"] })
  await render(
    <Router history={history}>
      <PokemonDetail />
    </Router>
  )

  await new Promise(resolve => setTimeout(resolve, 0))

  expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
})
