import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { PokemonBagProvider } from "@/context/PokemonBagContext"
import { BottomNavbar } from "@/components/BottomNavbar"
import "twin.macro"
import dynamic from "next/dynamic"

const PokemonBag = dynamic(() => import("@/components/PokemonBag").then(mod => mod.PokemonBag))
const PokemonList = dynamic(() => import("@/components/PokemonList").then(mod => mod.PokemonList))
const PokemonDetail = dynamic(() =>
  import("@/components/PokemonDetail").then(mod => mod.PokemonDetail)
)

const apolloClient = new ApolloClient({
  ssrMode: false,
  uri: "https://graphql-pokeapi.vercel.app/api/graphql",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          pokemons: {
            keyArgs: false,
            merge(existing, incoming, { args }) {
              const mergedResults = existing ? existing.results.slice(0) : []
              const start = args ? args.offset : mergedResults.length
              const end = start + incoming.results.length
              for (let i = start; i < end; ++i) {
                mergedResults[i] = incoming.results[i - start]
              }
              return { ...incoming, results: mergedResults }
            }
          }
        }
      }
    }
  })
})

export default function Page() {
  return (
    <ApolloProvider client={apolloClient}>
      <PokemonBagProvider>
        <BrowserRouter>
          <main id="content" tw="h-full overflow-y-auto">
            <Switch>
              <Route exact path="/bag" component={PokemonBag} />
              <Route exact path="/pokemon" component={PokemonDetail} />
              <Route path="/" component={PokemonList} />
            </Switch>
          </main>
          <BottomNavbar />
        </BrowserRouter>
      </PokemonBagProvider>
    </ApolloProvider>
  )
}
