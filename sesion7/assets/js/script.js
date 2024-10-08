let contador = 0

function incrementar() {
  const valorActual = contador

  setTimeout(() => {
    contador = valorActual + 1

    console.log(`contador: ${contador}`)
  }, 0)
}

incrementar() // contador = 0 -> contador++
incrementar() // contador = 0 -> contador++
incrementar() // contador = 0 -> contador++
