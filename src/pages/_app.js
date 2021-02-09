import { GlobalStyles } from "twin.macro"
import "@/styles/global.css"
import "twin.macro"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <div tw="font-sans">
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
