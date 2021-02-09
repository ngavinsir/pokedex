import { PokemonList } from "@/components/PokemonList"
import { BrowserRouter, Route } from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

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
      <BrowserRouter>
        <Route path="/" component={PokemonList} />
      </BrowserRouter>
    </ApolloProvider>
  )
}
