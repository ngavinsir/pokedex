import { usePokemonBag } from "@/context/PokemonBagContext"
import "twin.macro"
import { CapturedPokemonItem } from "./CapturedPokemonItem"
import { CenterMessage, Title } from "./lib"

export function PokemonBag() {
  const { pokemonBag } = usePokemonBag()

  if (!pokemonBag || !pokemonBag.length) {
    return <CenterMessage>You don't have pokemons in your bag...</CenterMessage>
  }

  return (
    <div tw="py-4 flex flex-col">
      <Title>My Pokemon Bag</Title>
      <div tw="px-2 xs:px-6 py-4 flex flex-col space-y-8 w-full">
        {pokemonBag.map(pokemon => (
          <CapturedPokemonItem key={pokemon.nickname} {...pokemon} />
        ))}
      </div>
    </div>
  )
}
