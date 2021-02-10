import { usePokemonBag } from "@/context/PokemonBagContext"
import "twin.macro"
import { CapturedPokemonItem } from "./CapturedPokemonItem"
import { CenterMessage } from "./lib"

export function PokemonBag() {
  const { pokemonBag } = usePokemonBag()

  if (!pokemonBag || !pokemonBag.length) {
    return <CenterMessage>You don't have pokemons in your bag...</CenterMessage>
  }

  return (
    <div tw="px-2 xs:px-6 py-4 flex flex-col space-y-8">
      {pokemonBag.map(pokemon => (
        <CapturedPokemonItem key={pokemon.nickname} {...pokemon} />
      ))}
    </div>
  )
}
