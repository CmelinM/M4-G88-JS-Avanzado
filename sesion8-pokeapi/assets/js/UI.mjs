function pokemonCard(data) {

  return `
  <div class="col-lg-3">
    <div class="card" style="width: 18rem;">
      <img src="${data.sprites.front_default}" class="card-img-top" alt="${data.name}">
      <div class="card-body">
        <h5 class="card-title">${data.name}</h5>
      </div>
    </div>
  </div>
  `
}