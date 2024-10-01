class Animal {
  constructor(nombre, especie) {
    this.nombre = nombre;
    this.especie = especie
  }

  comer() {
    return `🍗`
  }
}
class Mamifero extends Animal {
  constructor(nombre) {
    super(nombre, 'Mamifero')
  }
}

class MamiferoChico extends Mamifero {
  constructor(nombre, caracteristica) {
    super(nombre)
    this.caracteristica = caracteristica
    this.tamano = 'Chico'
  }

  comer() {
    return `🥕🥛`
  }
}

class MamiferoGrande extends Mamifero {

}


const tardigrado = new Animal('Oso de agua', 'Tardigrados')
const ballena = new Animal('Ballena Jorobada', 'Cetáceo')
const dragon = new Animal('Dragon de comodo', 'Reptil')
const loboMarino = new Mamifero('Lobo Marino')
const monitoDelMonte = new MamiferoChico('Monito del Monte', 'Habita Chiloé')
const raton = new MamiferoChico('Raton', 'Raton común')
const hamster = new MamiferoChico('Hamster', 'Raton domestico hamster')

raton.comer = function() {
  return `🐁🧀`
}

console.log(monitoDelMonte.comer())

MamiferoChico.prototype.comer = function () {
  return `Comer alterado 🧀🧀`
}

console.log(monitoDelMonte.comer())
