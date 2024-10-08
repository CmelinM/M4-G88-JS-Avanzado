let contador = 0

function incrementar() {
  const valorActual = contador
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      contador = valorActual + 1
  
      console.log(`contador: ${contador}`)
      resolve(contador)
    }, Math.random() * 3000)
  })
}

async function correContador() {
  await incrementar()
  await incrementar()
  await incrementar()
}
correContador()

function tePrometoQueMananaPago(sinFalta) {
  return new Promise((resolve, reject) => {
    if(!sinFalta) {
      reject('No pagó')
    } else {
      resolve('💰')
    }
  })
}

/**
 * Formas de uso de la promesa
 * 
 * 1.- .then .catch .finally
 * 
 * isLoading = true
 */
// tePrometoQueMananaPago(false)
//   .then((valorResuelto) => {
//     console.log(valorResuelto)
//   })
//   .catch((valorRechazado) => {
//     console.log(valorRechazado)
//   })
//   .finally(() => {
//     /**
//      * Se ejecuta ya sea resuelta
//      * o rechazada
//      * 
//      * isLoading = false
//      */
//     console.log('Finally')
//   })

async function ejecucionPromesa () {
  try {
    let resolucion = await tePrometoQueMananaPago(false)

    console.log(resolucion)
  } catch (error) {
    console.log(error)
  } finally {
    console.log('Finally en then-catch')
  }
}

ejecucionPromesa()