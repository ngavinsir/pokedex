import { useQuery, gql } from "@apollo/client"
import { useUrlQuery } from "@/hooks/useUrlQuery"
import { Redirect } from "react-router-dom"
import tw, { styled, css } from "twin.macro"
import Image from "next/image"
import { CenterMessage, PokeballIcon, TrophyIcon, PoofIcon } from "./lib"
import { usePokemonBag } from "@/context/PokemonBagContext"
import AriaModal from "react-aria-modal"
import { useState } from "react"
import { useMemo } from "react"
import { useForm } from "react-hook-form"

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

const SUCCESS = "SUCCESS"
const FAIL = "FAIL"
const IDLE = "IDLE"

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

  const applicationNode = useMemo(() => document.getElementById("__next"), [])
  const { nicknameAvailable, capture } = usePokemonBag()
  const [captureStatus, setCaptureStatus] = useState(IDLE)
  const { register, handleSubmit, errors } = useForm()

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

  function capturePokemon() {
    const success = Math.random() > 0.5
    setCaptureStatus(success ? SUCCESS : FAIL)
  }

  function onNicknameSubmit({ nickname }) {
    capture({ nickname, pokemonName, image: front_default })
    setCaptureStatus(IDLE)
  }

  return (
    <div tw="flex flex-col px-2 xs:px-6 pt-4 pb-24">
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
          <TypesChips key={type.type.name} type={type.type.name}>
            {type.type.name}
          </TypesChips>
        ))}
      </ChipsWrapper>

      <StatsHeading>Moves</StatsHeading>
      <ChipsWrapper>
        {moves.map(move => (
          <MovesChips key={move.move.name}>{move.move.name}</MovesChips>
        ))}
      </ChipsWrapper>

      <div
        onClick={capturePokemon}
        css={[
          css`
            bottom: 1.5rem;
            right: 1.5rem;
          `,
          tw`fixed px-5 py-3 flex space-x-2 items-center rounded-full shadow-lg bg-red-500`
        ]}
      >
        <PokeballIcon size="2rem" />

        <span tw="font-bold text-lg text-white">CAPTURE</span>
      </div>

      {captureStatus === SUCCESS ? (
        <AriaModal
          scrollDisabled
          verticallyCenter
          titleText={SUCCESS}
          applicationNode={applicationNode}
          dialogStyle={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            width: "18rem",
            maxWidth: "75vw"
          }}
        >
          <div tw="flex flex-col items-center space-y-6 font-medium text-base text-gray-800">
            <p>You have successfully caught the pokemon!</p>
            <TrophyIcon size="4.5rem" />
            <div tw="w-full">
              <p>Give it a nickname</p>
              <form tw="flex space-x-2" onSubmit={handleSubmit(onNicknameSubmit)}>
                <div tw="flex flex-col">
                  <input
                    name="nickname"
                    autoComplete="off"
                    ref={register({ required: true, validate: value => nicknameAvailable(value) })}
                    type="text"
                    tw="p-1 w-full bg-gray-300 border-2 border-gray-700 rounded-lg focus:(outline-none border-blue-500)"
                  />
                  <span tw="text-sm text-red-400 leading-none mt-1">
                    {errors.nickname?.type === "required" && "nickname can't be blank"}
                    {errors.nickname?.type === "validate" && "nickname has already been taken"}
                  </span>
                </div>
                <button
                  type="submit"
                  css={[
                    css`
                      height: fit-content;
                    `,
                    tw`font-bold text-white text-sm p-2 bg-gray-900 rounded-lg`
                  ]}
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </AriaModal>
      ) : null}

      {captureStatus === FAIL ? (
        <AriaModal
          scrollDisabled
          verticallyCenter
          titleText={FAIL}
          applicationNode={applicationNode}
          dialogStyle={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            width: "18rem",
            maxWidth: "75vw"
          }}
        >
          <div tw="flex flex-col items-center space-y-6 font-medium text-base text-gray-800">
            <p>Oops..., the pokemon has run away</p>
            <PoofIcon size="8rem" />
            <button
              onClick={() => setCaptureStatus(IDLE)}
              tw="font-bold text-white text-sm p-2 bg-gray-900 rounded-lg text-center w-full"
            >
              Dismiss
            </button>
          </div>
        </AriaModal>
      ) : null}
    </div>
  )
}
