var sacha = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 15,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

const MAYORIA_EDAD = 18

function esMayorDeEdad (persona) {
  return persona.edad >= MAYORIA_EDAD
}

function imprimirProfesiones (persona) {
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} no es mayor de edad`)
  }
}

imprimirProfesiones(sacha)

const esMayorEdad2 = ({ edad }) => edad >= MAYORIA_EDAD

const denegado = persona => esMayorEdad2(persona) ? console.log('Puede acceder') : console.log('No puede acceder')

denegado(sacha)
