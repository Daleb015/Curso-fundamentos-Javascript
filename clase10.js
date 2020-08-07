var sacha = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 31,
  ingeniero: true,
  cocinero: false,
  cantante: false,
  dj: false,
  guitarrista: false,
  drone: true
}

function imprimirProfesiones (persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log('Ingeniero')
  }
}

imprimirProfesiones(sacha)
