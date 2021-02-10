import { GlobalStyles } from "twin.macro"
import "@/styles/global.css"
import "twin.macro"
import Head from "next/head"
import "url-search-params-polyfill"

export default function App({ Component, pageProps }) {
  return (
    <div tw="h-full" suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <div tw="font-sans h-full flex flex-col">
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
