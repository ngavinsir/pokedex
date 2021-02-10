import tw, { css } from "twin.macro"
import Image from "next/image"
import AriaModal from "react-aria-modal"
import { useState, useMemo } from "react"
import { usePokemonBag } from "@/context/PokemonBagContext"

export function CapturedPokemonItem({ image, pokemonName, nickname }) {
  const { release } = usePokemonBag()
  const [openModal, setOpenModal] = useState(null)
  const applicationNode = useMemo(() => document.getElementById("__next"), [])

  return (
    <div role="listitem" tw="flex items-center space-x-3 xs:space-x-6">
      <div
        css={[
          css`
            width: 120px;
            height: 120px;
          `,
          tw`bg-lightBlue-50 border-lightBlue-300 border-2 rounded-md relative flex-shrink-0`
        ]}
      >
        <Image src={image} alt={pokemonName} layout="fill" />
      </div>
      <div tw="flex flex-col space-y-1 w-full">
        <span
          css={[
            css`
              color: #334155;
            `,
            tw`font-semibold text-xl xs:text-2xl`
          ]}
        >
          {nickname}
        </span>
        <span tw="font-medium text-lg text-gray-500">{pokemonName}</span>
        <button
          aria-label="release pokemon"
          tw="bg-red-400 can-hover:hover:bg-red-500 p-2 rounded-full mt-auto self-end"
          onClick={() => setOpenModal(true)}
        >
          <svg
            tw="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {openModal ? (
        <AriaModal
          scrollDisabled
          verticallyCenter
          titleText="RELEASE POKEMON"
          applicationNode={applicationNode}
          dialogStyle={{
            backgroundColor: "white",
            borderRadius: "1rem",
            padding: "1.5rem",
            width: "18rem",
            maxWidth: "75vw"
          }}
        >
          <div tw="flex flex-col items-center font-medium text-base text-gray-800">
            <p>
              Do you want to release <span tw="text-blue-700 font-semibold">{nickname}</span> from
              your bag?
            </p>
            <div tw="mt-12 flex justify-end space-x-4 font-medium text-base items-center w-full">
              <button tw="text-gray-500 font-medium" onClick={() => setOpenModal(false)}>
                Cancel
              </button>
              <button
                tw="bg-red-400 text-white p-2 px-3 rounded-lg font-medium"
                onClick={() => {
                  setOpenModal(false)
                  release(nickname)
                }}
              >
                Release
              </button>
            </div>
          </div>
        </AriaModal>
      ) : null}
    </div>
  )
}
