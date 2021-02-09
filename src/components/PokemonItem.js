import tw, { css } from "twin.macro"
import Image from "next/image"
import { Link } from "react-router-dom"

export function PokemonItem({ image, name }) {
  return (
    <Link
      to={{
        pathname: "/pokemon",
        search: "?name=" + name
      }}
    >
      <div tw="flex items-center space-x-3 xs:space-x-6">
        <div
          css={[
            css`
              width: 120px;
              height: 120px;
            `,
            tw`bg-red-50 border-red-300 border-2 rounded-md relative flex-shrink-0`
          ]}
        >
          <Image src={image} layout="fill" />
        </div>
        <div tw="flex flex-col">
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
        </div>
      </div>
    </Link>
  )
}
