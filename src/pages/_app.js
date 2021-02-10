import { GlobalStyles } from "twin.macro"
import "@/styles/global.css"
import "twin.macro"
import Head from "next/head"
import "url-search-params-polyfill"

export default function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <div tw="font-sans h-screen flex flex-col">
          <Head>
            <title>Pokedex</title>
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </div>
      )}
    </div>
  )
}
