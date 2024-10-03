import {Persona, ProfesionalClinico, Paciente} from "./clases/Usuario.mjs";
import CentroClinico from "./clases/CentroClinico.mjs";

/**
 * nombre_paciente
 * nombre_medico
 * especialidad
 * hora
 * fecha
 * previsión
 * motivo_consulta
 * estado_cita
 * dirección_paciente
 * dirección_medico
 * rut
 * edad
 * sexo/genero
 * interconsulta
 * peso
 * estatura
 * antecedentes_quirurgicos
 * examenes
 * condicion_clinica
 * 
 * direccion {
 *  calle
 *  comuna
 *  region
 *  georreferencia
 * }
 * 
 * new Date(1951, 9, 23),
 */

const persona = new Paciente(
  {
    nombre: "Charly García",
    fecha_nacimiento: new Date(1951, 9, 23),
    rut: "6.519.246-4",
    genero: "Masculino",
    profesion: "Musicoterapeuta",
    especialidad: "Composicion",
    agenda: "Libre",
    sucursal: "Bs Argentina"
  }
)


const personasPacientes = [
  {
    nombre: "Juan Pérez",
    fecha_nacimiento: new Date(1990, 0, 15),
    rut: "12345678-9",
    genero: "Masculino"
  },
  {
    nombre: "María González",
    fecha_nacimiento: new Date(1985, 5, 23),
    rut: "98765432-1",
    genero: "Femenino"
  },
  {
    nombre: "Carlos López",
    fecha_nacimiento: new Date(1978,11, 30),
    rut: "11223344-5",
    genero: "Masculino"
  },
  {
    nombre: "Ana Martínez",
    fecha_nacimiento: new Date(1992, 7, 12),
    rut: "55667788-0",
    genero: "Femenino"
  },
  {
    nombre: "Luis Rodríguez",
    fecha_nacimiento: new Date(1988, 3, 5),
    rut: "66778899-1",
    genero: "Masculino"
  },
  {
    nombre: "Sofía Fernández",
    fecha_nacimiento: new Date(1995, 9, 21),
    rut: "77889900-2",
    genero: "Femenino"
  },
  {
    nombre: "Miguel Torres",
    fecha_nacimiento: new Date(1982, 11, 14),
    rut: "88990011-3",
    genero: "Masculino"
  },
  {
    nombre: "Laura Ramírez",
    fecha_nacimiento: new Date(1993, 4, 18),
    rut: "99001122-4",
    genero: "Femenino"
  },
  {
    nombre: "Pedro Sánchez",
    fecha_nacimiento: new Date(1987, 8, 9),
    rut: "10111213-5",
    genero: "Masculino"
  },
  {
    nombre: "Elena Castro",
    fecha_nacimiento: new Date(1991, 2, 25),
    rut: "12131415-6",
    genero: "Femenino"
  }
];

const sanJoseEstrella = new CentroClinico({
  direccion: 'San José de la Estrella #5509',
  datos_contacto: 'Teléfono: 92398234098, mail: sanjose@muni.cl',
  pacientes: personasPacientes
})

/**
 * agrego la variable persona a la ventana
 */
window.persona = persona
window.personasPacientes = personasPacientes
