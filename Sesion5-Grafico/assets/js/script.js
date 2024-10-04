/**
 * retorna data del API
 */
async function consumoApi() {
  let headersList = {
    "Accept": "*/*",
  }

  let response = await fetch("https://mindicador.cl/api/euro", { 
    method: "GET",
    headers: headersList
  });

  let data = await response.json();

  return data
}

/** 
 * retornar objetos o arreglos
 * utilizables para el gráfico
 * 
 * Titulo gráfico
 * Data
 * Etiquetas
 */
function formatearData(data) {
  let tituloGrafico = data.nombre
  let etiquetas = []
  let valores = []

  data.serie.forEach(punto => {
    etiquetas.push(new Date(punto.fecha))
    valores.push(punto.valor)
  })

  return { tituloGrafico, etiquetas, valores }
}

document.querySelector("#cargarInfo").addEventListener("click", async () => {
  /**
   * lógica para consumir API
   * y pintar el gráfico
   */
  const data = await consumoApi()

  const { tituloGrafico, etiquetas, valores } = formatearData(data)

  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: etiquetas,
      datasets: [{
        label: tituloGrafico,
        data: valores,
        tension: 0.1
      }]
    }
  })
})