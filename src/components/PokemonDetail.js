import { useQuery, gql } from "@apollo/client"
import { useUrlQuery } from "@/hooks/useUrlQuery"
import { Redirect } from "react-router-dom"
import tw, { styled, css } from "twin.macro"
import Image from "next/image"
import { CenterMessage } from "./lib"

const POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      sprites {
        front_default
      }
      moves {
        move {
          name
        }
      }
      types {
        slot
        type {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`

const TypesChips = styled.span(({ type }) => [
  tw`font-semibold text-base p-3 rounded-md`,
  type === "normal" && tw`bg-gray-200 text-gray-700`,
  ["flying", "ice"].includes(type) && tw`bg-lightBlue-200 text-lightBlue-700`,
  type === "grass" && tw`bg-green-200 text-green-700`,
  type === "poison" && tw`bg-indigo-200 text-indigo-700`,
  type === "fire" && tw`bg-orange-200 text-orange-700`,
  type === "water" && tw`bg-blue-200 text-blue-700`,
  type === "bug" && tw`bg-lime-200 text-lime-700`,
  type === "electric" && tw`bg-yellow-200 text-yellow-700`,
  type === "ground" && tw`bg-brown-300 text-brown-700`,
  ["fairy", "ghost"].includes(type) && tw`bg-purple-200 text-purple-700`,
  type === "fighting" && tw`bg-pink-200 text-pink-700`,
  type === "psychic" && tw`bg-fuchsia-200 text-fuchsia-700`,
  type === "rock" && tw`bg-warmGray-200 text-warmGray-700`,
  type === "steel" && tw`bg-cyan-200 text-cyan-700`,
  type === "dark" && tw`bg-black text-white`,
  type === "dragon" && tw`bg-red-200 text-red-700`
])
const MovesChips = tw.span`font-semibold text-base p-3 rounded-md border-2 border-gray-300 text-gray-800`
const ChipsWrapper = tw.div`flex flex-row flex-wrap gap-3`
const StatsHeading = tw.span`font-medium text-base text-gray-400 mt-8 mb-3`

const statsAbbreviation = {
  hp: "HP",
  attack: "ATK",
  defense: "DEF",
  "special-attack": "SP ATK",
  "special-defense": "SP DEF",
  speed: "SPD"
}

export function PokemonDetail() {
  let urlQuery = useUrlQuery()
  const pokemonName = urlQuery.get("name") ?? undefined
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { name: pokemonName },
    skip: pokemonName === undefined
  })

  if (pokemonName === undefined) return <Redirect to="/" />
  if (loading) return <CenterMessage>Loading ...</CenterMessage>
  if (error || !data.pokemon?.sprites) return <CenterMessage>Can't fetch pokemon...</CenterMessage>
  const {
    pokemon: {
      sprites: { front_default },
      stats,
      types,
      moves
    }
  } = data

  return (
    <div tw="flex flex-col px-2 xs:px-6 py-4">
      <div tw="flex items-center space-x-3">
        <div
          css={[
            css`
              width: 120px;
              height: 120px;
            `,
            tw`bg-gray-100 relative rounded-lg`
          ]}
        >
          <Image src={front_default} layout="fill" />
        </div>
        <h1 tw="font-semibold text-3xl text-blue-900">{pokemonName}</h1>
      </div>

      <StatsHeading>Stats</StatsHeading>
      <div tw="grid grid-cols-3 gap-5">
        {stats.map(stat => (
          <div
            key={stat.stat.name}
            tw="flex flex-col items-center border-2 border-gray-300 rounded-xl"
          >
            <span tw="font-bold text-4xl text-blue-800 my-6">{stat.base_stat}</span>
            <span tw="font-medium text-base text-gray-500 mb-2">
              {statsAbbreviation[stat.stat.name]}
            </span>
          </div>
        ))}
      </div>

      <StatsHeading>Types</StatsHeading>
      <ChipsWrapper>
        {types.map(type => (
          <TypesChips type={type.type.name}>{type.type.name}</TypesChips>
        ))}
      </ChipsWrapper>

      <StatsHeading>Moves</StatsHeading>
      <ChipsWrapper>
        {moves.map(move => (
          <MovesChips>{move.move.name}</MovesChips>
        ))}
      </ChipsWrapper>
    </div>
  )
}
