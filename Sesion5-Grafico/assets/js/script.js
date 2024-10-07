/**
 * retorna data del API
 */
async function fetchIndicador(indicador) {
  let headersList = {
    "Accept": "*/*",
  }

  let response = await fetch("https://mindicador.cl/api/" + indicador, { 
    method: "GET",
    headers: headersList
  });

  let data = await response.json();

  return data
}

async function fetchConfigData() {
  const result = await fetch('https://mindicador.cl/api')
  const data = await result.json()

  const keys = Object.keys(data)
  return keys
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
    etiquetas.push(new Date(punto.fecha).toLocaleDateString())
    valores.push(punto.valor)
  })

  etiquetas.reverse()
  valores.reverse()

  return { tituloGrafico, etiquetas, valores }
}

function insertSelect(selectOptions, targetElement) {
  const select = document.createElement('select')
    select.classList = 'form-select'
    select.ariaLabel = 'Selección de divisas'
    select.setAttribute('data-chart', 'toggle')

  const firstOption = document.createElement('option')
    firstOption.selected
    firstOption.textContent = 'Selecciona una divisa'
    select.appendChild(firstOption)

  for(let optionExchange of selectOptions) {
    const option = document.createElement('option')
    option.value = optionExchange
    option.textContent = optionExchange.replace('_', ' ')
    select.appendChild(option)
  }

  
  const parentNode = targetElement.parentElement
  parentNode.insertBefore(select, targetElement)
}

/**
 * DOMContentLoaded -> evento cuando está cargao el documento
 */
document.addEventListener("DOMContentLoaded", async () => {
  /**
   * lógica para consumir API
   * y pintar el gráfico
   */
  let keys = await fetchConfigData()
  let divisas = keys.filter(divisa => !['version', 'autor', 'fecha'].includes(divisa))

  /** Partimos con Euro */
  const initialData = await fetchIndicador('euro')
  const { tituloGrafico, etiquetas, valores } = formatearData(initialData)
  const ctx = document.getElementById('myChart');

  insertSelect(divisas, ctx)

  let chart = new Chart(ctx, {
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

  document.querySelector('[data-chart="toggle"]').addEventListener("change", async (event) => {
    const newData = await fetchIndicador(event.target.value)
    const { tituloGrafico, etiquetas, valores } = formatearData(newData)
    
    chart.data.labels = etiquetas
    chart.data.datasets[0].data = valores
    chart.data.datasets[0].label = tituloGrafico

    chart.update()
  })
})

