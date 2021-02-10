import tw, { css } from "twin.macro"

export const CenterMessage = tw.div`pt-16 text-center`

export const Title = tw.span`font-semibold text-xl text-blue-900 mb-8`

export const PokeballIcon = ({ size }) => (
  <svg
    css={css`
      width: ${size};
      height: ${size};
    `}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
  >
    <path
      fill="#000"
      d="M.125 13.9259h31.75s.125.8889.125 2.1729c0 1.1852-.1504 2.1728-.1504 2.1728H.1504S0 17.3827 0 16.0988c0-1.284.125-2.1729.125-2.1729z"
    />
    <path
      fill="#DC2626"
      d="M31.875 13.9259H.1243S1.6209 0 16.0959 0C29.9881 0 31.875 13.9259 31.875 13.9259z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M.293 12.9382c-.129.6184-.1687.9877-.1687.9877H31.875s-.05-.3693-.1938-.9877C30.9421 9.7596 27.7257 0 16.0959 0 3.9781 0 .9559 9.7596.2929 12.9382zm.9814 0h29.4199a18.464 18.464 0 00-.246-.8949c-.3754-1.2439-1.0121-2.8954-2.0551-4.5399C26.3285 4.2485 22.662.9878 16.0959.9878 9.2241.9877 5.5168 4.262 3.4865 7.4992c-1.028 1.6391-1.6338 3.2853-1.9819 4.5253a17.2885 17.2885 0 00-.2302.9137z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M31.8491 18.2716H.1498S1.6208 32 16.0959 32c13.8922 0 15.7532-13.7284 15.7532-13.7284z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M.3196 19.2593c-.1302-.618-.1698-.9877-.1698-.9877H31.849s-.0501.3697-.1952.9877C30.9144 22.4074 27.7085 32 16.0959 32 3.9961 32 .9827 22.4074.3196 19.2593zm.982 0h29.3647c-.0636.254-.1425.5438-.2392.8618-.3725 1.2246-1.0054 2.8506-2.0442 4.4699-2.0552 3.2037-5.7147 6.4213-12.287 6.4213-6.8779 0-10.5783-3.2311-12.5993-6.417-1.0238-1.6139-1.6257-3.2346-1.971-4.4551a16.85 16.85 0 01-.224-.8809z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M20.8862 16.0988c0 2.8364-2.2305 5.1358-4.982 5.1358s-4.9821-2.2994-4.9821-5.1358 2.2306-5.1358 4.9821-5.1358 4.982 2.2994 4.982 5.1358z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M15.9042 11.9506c-2.2224 0-4.024 1.8572-4.024 4.1482 0 2.2909 1.8016 4.1481 4.024 4.1481s4.024-1.8572 4.024-4.1481c0-2.291-1.8016-4.1482-4.024-4.1482zm-5.9401 4.1482c0-3.3819 2.6595-6.1235 5.9401-6.1235s5.9401 2.7416 5.9401 6.1235-2.6595 6.1234-5.9401 6.1234-5.9401-2.7415-5.9401-6.1234z"
      clipRule="evenodd"
    />
  </svg>
)

export const TrophyIcon = ({ size }) => (
  <svg
    css={css`
      width: ${size};
      height: ${size};
    `}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 59 73"
  >
    <path fill="#E5A24A" d="M26.3 52.7l-.8-12.1 7.6-.4-.8 12.5h-6z" />
    <path
      stroke="#E5A24A"
      strokeWidth="3.5"
      d="M40.7 31.9c4.7-2.1 8.2-3.8 10.8-7.5 1.8-2.4 3.2-5.8 4.3-10.8 1-4.3.8-10.4-3.5-11.6-1-.3-2.2-.2-3.6.7-2.5 1.7-4.1 5.2-2.3 7.5.8 1.2 2.4 1.5 5.1-.5M18.3 31.9c-4.7-2.1-8.2-3.8-10.8-7.5a28.7 28.7 0 01-4.3-10.8C2.2 9.3 2.4 3.2 6.7 2c1-.3 2.2-.2 3.6.7 2.5 1.7 4.1 5.2 2.3 7.5-.8 1.2-2.4 1.5-5.1-.5"
    />
    <path
      fill="#FFBA57"
      d="M23.8 40C14.6 36 12 11.8 12.2 0h34.6c0 11.9-2 36-11.2 40-4.9 1.8-10 .7-11.8 0zM20.2 57.8c3.2-4.7 11.2-11.2 18.2 0H20.2zM38.4 60.4v-2.6H20.2v2.6h18.2z"
    />
    <path fill="#FFECB3" d="M31.8 28h-3.6V14.5L27 15.7l-2 1.6-1.8-2.2 5.6-4.5h3V28z" />
    <path fill="#7A534B" d="M17.9 59.9h23.5V72H17.9z" />
    <path fill="#FFE082" d="M21 65.2h17.4v3H21z" />
  </svg>
)

export const PoofIcon = ({ size }) => (
  <svg
    css={css`
      width: ${size};
      height: ${size};
    `}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 128 120"
  >
    <path
      fill="#C4C4C4"
      fillOpacity=".5"
      d="M48.6 81.8c-9.7-4.9-31.2-19-3.1-18.8 28 .2 34.6-8.5 28.5-11.3-6.1-2.8-26-11.4-8.6-16.5 17.4-5 20-9.5 11.4-26 0 0 31.6 7.5 16.7 26.2-12.9 16 9.2 21.6 2.7 30.3-6.6 8.7-39.6-.6-28.5 11.3C80 90.4 60.4 90.5 56.2 94.7c0 0 3-7.7-7.6-13z"
    />
    <path
      fill="#C4C4C4"
      fillOpacity=".5"
      d="M33.6 70.7c-5.2-8.8-14.8-31 7.2-16.3C62.7 69 72.3 65.5 69 60.2c-3.4-5.3-14.6-22.4 1.7-17.3 16.3 5 20.6 2.7 22.4-14.6 0 0 21 22.2-.5 29.2-18.3 6-3.8 21.7-13.4 25.2-9.6 3.4-30.7-21-28.2-5.9 2.8 16.9-12.7 6.9-18.2 8 0 0 6.4-4.5.8-14z"
    />
    <path
      fill="#C4C4C4"
      fillOpacity=".5"
      d="M59 24.2c8-6.4 28.6-19 17.2 4.8-11.3 23.8-6.5 32.8-1.7 28.7 4.7-4 20-17.5 17.3-.7-2.6 16.9.2 20.8 17.6 20 0 0-19 24-29 3.8-8.4-17.3-22-.7-26.7-9.7-4.8-9 16.3-33.4 1.8-28.8-16.3 5.2-8.6-11.6-10.5-16.9 0 0 5.3 5.7 14-1.2z"
    />
    <path
      fill="#48536B"
      d="M74.4 34.5l-.2-3 .1 1.4-.1-1.5s8-.7 11-6.6l2.8 1.4c-3.8 7.5-13.2 8.2-13.6 8.3zM87.4 72.6l-2.3-2c3.4-4 6.2-8.6 5.9-9.7l2.3-2c1.1 1.2 1.8 4.6-6 13.7z"
    />
    <path
      fill="#C4C4C4"
      fillOpacity=".5"
      d="M63.6 95.9c-9 5-31.3 14-16.2-7.6C62.5 66.7 59.3 57 54 60.3c-5.4 3.2-22.7 14-17.3-2.2 5.4-16.2 3.3-20.6-14-22.7 0 0 22.7-20.6 29.1 1 5.6 18.6 21.6 4.4 24.9 14.1C79.8 60.2 55 80.8 70 78.6 87 76.2 76.6 91.5 77.6 97c0 0-4.3-6.5-14-1.1z"
    />
    <path
      fill="#48536B"
      d="M44 50.2l-2.9-.8 1.5.4-1.5-.4s1.9-7.8-2.8-12.6l2.1-2.1c6 6 3.8 15 3.7 15.5zM46.8 93.2l.7-3c5 1.4 10.5 2 11.3 1.2l2.8 1.3c-.6 1.5-3.4 3.6-14.8.5z"
    />
    <path
      fill="#8290D8"
      d="M32.7 50.7c1.6-.1 3.1 0 4.5.6 1.4.4 2.5 1.2 3.3 2.2.9 1 1.4 2.1 1.5 3.5a6 6 0 01-.8 3.5 7 7 0 01-2.7 2.6c-1.1.6-2.4 1-3.9 1A13.3 13.3 0 0131 64l.4 5.9c0 .6-.1 1-.5 1.5-.4.3-.9.6-1.5.6-.7 0-1.3 0-1.7-.4-.4-.4-.7-.9-.7-1.5a182 182 0 00-1-13.3l-.6.2c-.3 0-.6-.1-.9-.5-.2-.3-.4-.8-.4-1.3 0-.4 0-.7.3-1l1-.9.2-.1v-.4c0-.6 0-1.1.4-1.5.3-.3 1-.5 1.7-.6l1.6.1c.4.1.5.3.6.4l2.8-.5zm1 10c1 0 1.9-.4 2.5-1.1a3 3 0 00.9-2.4c-.1-1-.5-1.6-1.3-2.1s-1.8-.7-3-.6c-.6 0-1.4.2-2.6.5l.2 1.3a77 77 0 00.4 4.1l1.3.3h1.6zM56 69.6c-2 .1-4-.2-5.5-.8-1.7-.8-3-1.8-4-3.3-.9-1.4-1.4-3.2-1.6-5.2-.2-2.1.1-4 .9-5.7.7-1.7 1.8-3 3.3-4A10.7 10.7 0 0166 58.8c.2 1.9-.2 3.7-1 5.2-.8 1.6-2 2.9-3.5 3.8-1.6 1-3.4 1.5-5.5 1.7zm-.1-3.9a7 7 0 003.1-1c1-.5 1.6-1.3 2.1-2.3.5-1 .7-2.1.6-3.5a7.6 7.6 0 00-1-3.4c-.7-1-1.5-1.8-2.5-2.3-1-.5-2.1-.7-3.4-.6a5.7 5.7 0 00-5.1 3.7c-.5 1-.6 2.2-.5 3.5.1 2 .8 3.6 2 4.6 1.3 1 2.8 1.4 4.7 1.3zM80 67.8c-2 .1-3.9-.2-5.5-.8-1.6-.8-3-1.8-3.9-3.3-1-1.4-1.5-3.2-1.7-5.2-.1-2.1.2-4 1-5.7.7-1.7 1.8-3 3.3-4A10.7 10.7 0 0190 57c0 1.9-.2 3.7-1 5.2-.9 1.6-2 2.9-3.6 3.8-1.5 1-3.4 1.5-5.5 1.7zm0-4a7 7 0 003-.9c1-.5 1.7-1.3 2.2-2.3.4-1 .6-2.1.5-3.5a7.6 7.6 0 00-1-3.4c-.6-1-1.4-1.8-2.4-2.3-1-.5-2.2-.7-3.5-.6a5.7 5.7 0 00-5.1 3.7c-.4 1-.6 2.2-.5 3.5.2 2 .9 3.6 2.1 4.6 1.2 1 2.8 1.4 4.6 1.3zM101.4 49.2l-2 .2.6 4.6 1.3-.1a53.7 53.7 0 014.8 0c.5 0 1 .2 1.2.5.3.3.5.7.5 1.2 0 .6 0 1-.3 1.4-.3.4-.8.6-1.4.6a44.3 44.3 0 00-5.8.2l.2 5.7v1c0 .6-.2 1-.5 1.4-.3.4-.8.6-1.5.6s-1.3 0-1.7-.4c-.4-.3-.6-.7-.6-1.2 0-2.3 0-4.4-.2-6.5l-.6.2c-.5 0-.9 0-1.2-.4-.3-.4-.5-.9-.5-1.5s0-1 .3-1.3a3 3 0 011.4-.7h.3l-.6-5-.2.1c-.6 0-1.1 0-1.4-.3-.3-.3-.5-.7-.6-1.4 0-.7 0-1.1.3-1.4.2-.3.6-.5 1-.6h.4v-.3c-.2-.5 0-.9.4-1.2.4-.3 1-.5 1.6-.6 1.3 0 2 .4 2.3 1.5l2.4-.1a43 43 0 015.5 0c.7 0 1.1.2 1.4.5.3.3.4.7.5 1.2 0 .6-.1 1-.4 1.5-.3.3-.7.5-1.3.5h-5.6z"
    />
    <path
      fill="#FCF6C0"
      d="M41.8 27C33.6 25 31.6 8.1 31.6 0c0 18.6-8.7 25.7-13 27 9.9-2 12.8 13.6 13 21.6 0-18.8 6.8-22.3 10.2-21.7zM115.4 35.6c-8.2-2-10.2-18.8-10.2-27 0 18.7-8.7 25.8-13 27 9.9-2 12.8 13.6 13 21.7 0-18.8 6.8-22.3 10.2-21.7zM49.6 98.2c-7.6-3.7-5.8-20.6-4-28.5-4.1 18-14.2 23.1-18.7 23.3 10.1.3 9.5 16.2 7.9 24C39 98.8 46.4 96.9 49.6 98.3zM88 88.7c-5.3-.4-8.3-10.5-9.1-15.6 1.8 11.5-3 16.8-5.5 18 6-2.3 9.4 7 10.4 12-2-11.6 2-14.5 4.2-14.4z"
    />
  </svg>
)
