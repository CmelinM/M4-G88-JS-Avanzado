/**
 * Datos del centro clinico
 * 
 * podemos crear un centro
 * el centro tiene usuarios asociados
 * 
 * direccion_centro_medico { nombre_calle, numero_calle, geolocalización, sucursal }
 * pacientes -> Paciente
 * medicos -> Medicos
 * datos_contacto { telefono, correo, rss{} }
 */

class CentroClinico {
  #pacientes
  #profesionales
  constructor({
    direccion,
    datos_contacto,
    pacientes,
    profesionales
  }) {
    this.#pacientes = pacientes || [];
    this.#profesionales = profesionales || [];
    this.datos_contacto = datos_contacto;
    this.direccion = direccion;
  }

  get pacientes () {
    return this.#pacientes
  }

  get profesionales () {
    return this.#profesionales
  }

  set pacientes(paciente) {
    
  }
}

export default CentroClinico