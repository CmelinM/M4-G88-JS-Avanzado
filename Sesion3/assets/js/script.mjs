import {Persona, ProfesionalClinico, Paciente} from "./clases/Usuario.mjs";

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
 * direccion_centro_medico { nombre_calle, numero_calle, geolocalización, sucursal }
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
 */

const persona = new ProfesionalClinico(
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

/**
 * agrego la variable persona a la ventana
 */
window.persona = persona
