import { GlobalStyles } from "twin.macro"
import "@/styles/global.css"
import "twin.macro"

export default function App({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : (
        <div tw="font-sans">
          <GlobalStyles />
          <Component {...pageProps} />
        </div>
      )}
    </div>
  )
}
