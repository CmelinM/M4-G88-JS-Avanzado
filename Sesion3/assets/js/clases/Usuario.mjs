class Persona {
  constructor({ nombre, fecha_nacimiento, rut, genero }) {
    this.nombre = nombre;
    this.fecha_nacimiento = fecha_nacimiento;
    this.rut = rut;
    this.genero = genero;
  }

  get edad() {
    const fechaNacimiento = this.fecha_nacimiento
    const fechaActual = new Date()
    return fechaActual.getFullYear() - fechaNacimiento.getFullYear() 
  }
}

class Paciente extends Persona {
  constructor({nombre, fecha_nacimiento, rut, genero}) {
    super({ nombre, fecha_nacimiento, rut, genero });
    
  }
}

class ProfesionalClinico extends Persona {
  constructor({
    profesion, 
    sucursal, 
    especialidad, 
    agenda, 
    nombre, 
    fecha_nacimiento, 
    rut, 
    genero 
  }) {
    super({ nombre, fecha_nacimiento, rut, genero });
    this.profesion = profesion;
    this.sucursal = sucursal; // observar
    this.especialidad = especialidad
    this.agenda = agenda // observacion
  }
}

export { ProfesionalClinico, Paciente, Persona }
