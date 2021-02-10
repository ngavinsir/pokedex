import React, { useReducer, useCallback, useMemo, useContext } from "react"

const CAPTURE = "CAPTURE"
const RELEASE = "RELEASE"
const pokemonBagKey = "pokemonBag"

function pokemonBagReducer(state, action) {
  const { type, payload } = action

  switch (type) {
    case CAPTURE: {
      if (state.some(pokemon => pokemon.nickname === payload.nickname)) return

      const newState = [...state, payload]
      localStorage.setItem(pokemonBagKey, JSON.stringify(newState))
      return newState
    }

    case RELEASE: {
      const newState = state.filter(pokemon => pokemon.nickname !== payload.nickname)
      localStorage.setItem(pokemonBagKey, JSON.stringify(newState))
      return newState
    }

    default: {
      return state
    }
  }
}

const PokemonBagContext = React.createContext()

function PokemonBagProvider(props) {
  const [state, dispatch] = useReducer(
    pokemonBagReducer,
    JSON.parse(localStorage.getItem(pokemonBagKey)) ?? []
  )

  const nicknameAvailable = useCallback(
    nickname => state.every(pokemon => pokemon.nickname !== nickname),
    [state]
  )
  const capturedCount = useCallback(
    pokemonName => state.filter(pokemon => pokemon.pokemonName === pokemonName).length,
    [state]
  )
  const capture = useCallback(newPokemon => dispatch({ type: CAPTURE, payload: newPokemon }), [])
  const release = useCallback(nickname => dispatch({ type: RELEASE, payload: { nickname } }), [])

  const value = useMemo(
    () => ({ pokemonBag: state, capture, release, nicknameAvailable, capturedCount }),
    [state, capture, release, nicknameAvailable, capturedCount]
  )

  return <PokemonBagContext.Provider value={value} {...props} />
}

function usePokemonBag() {
  const context = useContext(PokemonBagContext)
  if (context === undefined) {
    throw new Error("usePokemonBag must be used within a PokemonBagProvider")
  }
  return context
}

export { PokemonBagProvider, usePokemonBag }
