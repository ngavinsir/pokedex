import tw, { css } from "twin.macro"
import Image from "next/image"
import { Link } from "react-router-dom"
import { PokeballIcon } from "./lib"

export function PokemonItem({ image, name, capturedCount }) {
  return (
    <Link
      to={{
        pathname: "/pokemon",
        search: "?name=" + name
      }}
    >
      <div tw="flex items-center space-x-3 xs:space-x-6 w-full can-hover:hover:bg-gray-50 rounded-md">
        <div
          css={[
            css`
              width: 120px;
              height: 120px;
            `,
            tw`bg-red-50 border-red-300 border-2 rounded-md relative flex-shrink-0`
          ]}
        >
          <Image src={image} alt={name} layout="fill" />
        </div>
        <div tw="flex flex-col space-y-2">
          <span
            css={[
              css`
                color: #334155;
              `,
              tw`font-semibold text-xl xs:text-2xl`
            ]}
          >
            {name}
          </span>
          {capturedCount > 0 ? (
            <div tw="flex items-center">
              <PokeballIcon size="1.2rem" />
              <span tw="font-semibold text-lg text-gray-800 ml-2">{capturedCount}</span>
              <span tw="font-medium text-gray-500 text-base ml-1">captured</span>
            </div>
          ) : (
            <span tw="italic text-sm text-gray-500">Hasn't been caught yet</span>
          )}
        </div>
      </div>
    </Link>
  )
}
