import { PokemonList } from "@/components/PokemonList"
import { PokemonDetail } from "@/components/PokemonDetail"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import { PokemonBagProvider } from "@/context/PokemonBagContext"

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
          <Switch>
            <Route exact path="/" component={PokemonList} />
            <Route exact path="/pokemon" component={PokemonDetail} />
          </Switch>
        </BrowserRouter>
      </PokemonBagProvider>
    </ApolloProvider>
  )
}