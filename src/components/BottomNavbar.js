import "twin.macro"
import { Link } from "react-router-dom"

export function BottomNavbar() {
  return (
    <div tw="border-t-2 border-gray-300 py-1 px-8 flex justify-around bg-white">
      <NavbarItem
        icon={
          <svg tw="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36">
            <path
              fill="#000"
              fillRule="evenodd"
              d="M.1 15.7l.2-1.1C1.1 11 4.5 0 18.1 0c13 0 16.7 11 17.5 14.6l.3 1H24a7 7 0 00-.5-1h11a20.7 20.7 0 00-2.7-6.2 15.4 15.4 0 00-13.8-7.3C10.4 1.1 6.2 4.8 4 8.4a19.7 19.7 0 00-2.5 6.2h10.8a7 7 0 00-.6 1H.1zm11.5 4.9H.2l.2 1C1 25.3 4.5 36 18 36c13 0 16.7-10.8 17.5-14.3l.2-1.1H24.1a7 7 0 01-.5 1h10.9a20 20 0 01-2.6 6A15.4 15.4 0 0118.1 35c-7.7 0-11.9-3.6-14.2-7.2a19.2 19.2 0 01-2.4-6h10.7a7 7 0 01-.6-1.1z"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="M17.9 13.3a4.7 4.7 0 00-4.7 4.8c0 2.7 2.1 4.8 4.7 4.8s4.7-2.1 4.7-4.8c0-2.6-2.1-4.8-4.7-4.8zM11 18c0-4 3-7.1 6.9-7.1a7 7 0 016.9 7.1c0 4-3 7.1-6.9 7.1a7 7 0 01-6.9-7z"
              clipRule="evenodd"
            />
            <path
              fill="#000"
              fillRule="evenodd"
              d="M11.6 15.4a8 8 0 000 5.2H.2S0 19.6 0 18l.1-2.6h11.5zm12.5 5.2h11.7s.2-1.1.2-2.6l-.1-2.6H24a8 8 0 010 5.2z"
              clipRule="evenodd"
            />
          </svg>
        }
        label="Pokemons"
        href="/"
      />
      <NavbarItem
        icon={
          <svg
            tw="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            width="192"
            height="192"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <rect
              x="32.00781"
              y="72.00005"
              width="192"
              height="144"
              rx="8"
              strokeWidth="16"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            ></rect>
            <path
              d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216"
              fill="none"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
          </svg>
        }
        label="My Bag"
        href="/bag"
      />
    </div>
  )
}

function NavbarItem({ icon, label, href }) {
  return (
    <Link to={href}>
      <div tw="flex flex-col items-center justify-center w-20 h-16">
        {icon}
        <span tw="font-semibold text-sm text-gray-700 mt-1">{label}</span>
      </div>
    </Link>
  )
}
