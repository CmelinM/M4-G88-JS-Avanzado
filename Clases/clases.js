let maik1 = {
  nombre: 'Maik',
  tipo: 'Gran Kiltren',
  saludar: () => {
    return `Hola soy ${this.nombre}, y soy del tipo ${this.tipo}`
  }
}

let maik2 = {
  nombre: 'Maik',
  tipo: 'Gran Kiltren',
  saludar: function() {
    return `Hola soy ${this.nombre}, y soy del tipo ${this.tipo}`
  }
}

/**
 * Función constructora
 * -> define un manual "prototipo"
 */
function Perro(nombre, tipo) {
  this.nombre = nombre;
  this.tipo = tipo;
}

/**
 * Forma análoga de escribir
 */
// class Perro {
//   constructor(nombre, tipo) {
//     this.nombre = nombre
//     this.tipo = tipo
//   }
// }

/** 
 * llanka y yuyo
 * sólo tienen propiedades nombre y tipo
 */
const llanka = new Perro('Llanka', 'Hambrienta')
const yuyo = new Perro('Yuyo', 'Muy hambriento')

/**
 * saludar_en_instancia
 * es metodo que sólo "vive" en el objeto
 */
llanka.saludar_en_instancia = function () {
  return `Oli, soy ${this.nombre}`
}

/** 
 * métodos que sólo estarán en la instancia
 * 
 * instancia -> 1 perro
 */
console.log(llanka.saludar_en_instancia())
// console.log(yuyo.saludar_en_instancia())

/**
 * Afectamos a todos los perros
 * al modificar el prototype
 */
Perro.prototype.comer = function() {
  return `ñan ñan ñan guau`
}

/**
 * ahora llanka y yuyo saben comer
 */
console.log(llanka.comer())
console.log(yuyo.comer())

/**
 * definimos método "exclusivo" para yuyo
*/
yuyo.comer = function() {
  return `🥕🦷`
}
console.log("llanka",llanka.comer())
console.log("yuyo",yuyo.comer())