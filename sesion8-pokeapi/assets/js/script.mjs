import { fetchPokemon, fetchPokemonByUrl } from "./fetchPokemon.mjs";

/**
 * Pasos a seguir para obtener la info
 * 
 */
fetchPokemon()
  .then(respuesta => {
    let arregloPromesasPokemon = respuesta.results.map(pokemon => fetchPokemonByUrl(pokemon.url))

    Promise.allSettled(arregloPromesasPokemon)
      .then(console.log)
  })

