import { usePokemonBag } from "@/context/PokemonBagContext"
import "twin.macro"
import { CapturedPokemonItem } from "./CapturedPokemonItem"
import { CenterMessage, Title } from "./lib"

export function PokemonBag() {
  const { pokemonBag } = usePokemonBag()

  if (!pokemonBag || !pokemonBag.length) {
    return <CenterMessage>You don't have any pokemons in your bag...</CenterMessage>
  }

  return (
    <section tw="py-4 flex flex-col max-w-lg mx-auto">
      <Title>My Pokemon Bag</Title>
      <ul tw="px-2 xs:px-6 py-4 flex flex-col space-y-8 w-full">
        {pokemonBag.map(pokemon => (
          <CapturedPokemonItem key={pokemon.nickname} {...pokemon} />
        ))}
      </ul>
    </section>
  )
}
