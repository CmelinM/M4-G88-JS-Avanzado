class Estanteria {
  #libros
	constructor(libros) {
    this.#libros = libros
  }

	get libros() {
		return this.#libros
	}

	set libros(libro) {
    // analizamos si hay a lo más 30 libros
		if(this.#libros.length < 30) {
      this.#libros.push(libro)
    } else {
      throw new Error('No puedes agregar más libros a esta instancia')
    }
  }

  /**
   * Método crea una instancia de la estantería
   * en base a un "archivo" CSV
   * libros en formato CSV '"Cien años de soledad","Orgullo y prejuicio","Crimen y castigo","El señor de los anillos","El Principito","1984","Don Quijote de la Mancha","Matar a un ruiseñor","La casa de los espíritus","Jane Eyre","Desayuno de campeones","Al faro","El código Da Vinci","El gran Gatsby","Los miserables","La sombra del viento","El nombre de la rosa","Cumbres borrascosas","Rayuela","La metamorfosis"'
   */
  static fromCSV(text) {
    /**
     * Expresión regular
     * se delimita con //
     * / " / -> expresión regular busca/calza con el caracter " y para al encontrar el primero
     * / " / g -> g significa global, y calza a todos los caracteres
     */

    let regex = /"/g
    let arregloLibros = text.split(',').map(libro => libro.replace(regex, ''))

    /**
     * this -> hace referencia a la clase
     * 
     * new this(arregloLibros)
     * new Estanteria(arregloLibros)
     */
    return new this(arregloLibros)
  }
}



let librosCSV = '"Cien años de soledad","Orgullo y prejuicio","Crimen y castigo","El señor de los anillos","El Principito","1984","Don Quijote de la Mancha","Matar a un ruiseñor","La casa de los espíritus","Jane Eyre","Desayuno de campeones","Al faro","El código Da Vinci","El gran Gatsby","Los miserables","La sombra del viento","El nombre de la rosa","Cumbres borrascosas","Rayuela","La metamorfosis"'

/** el método estático no necesita anteponer new */
const estanteria = Estanteria.fromCSV(librosCSV)
