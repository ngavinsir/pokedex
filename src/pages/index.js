import { PokemonList } from "@/components/PokemonList"
import { BrowserRouter, Route } from "react-router-dom"

export default function IndexPage() {
  if (typeof document === "undefined") {
    return null
  }

  return (
    <BrowserRouter>
      <Route path="/" component={PokemonList} />
    </BrowserRouter>
  )
}
