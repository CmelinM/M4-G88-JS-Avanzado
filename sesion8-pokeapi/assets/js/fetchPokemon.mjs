
async function fetchPokemon () {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    
    if(!response.ok) {
      throw new Error('No pudimos usar el API de Pokemon')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

async function fetchPokemonByUrl (url) {
  try {
    const response = await fetch(url)

    if(!response.ok) {
      throw new Error('No pudimos conseguir este pokemon')
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export { fetchPokemon, fetchPokemonByUrl }
