var sacha = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 28
}

var dario = {
  nombre: 'Dario',
  apellido: 'Perez',
  edad: 27
}

function imprimirNombreMayusculas (nombre) {
  nombre.nombre = nombre.nombre.toUpperCase()
  console.log(nombre)
}
imprimirNombreMayusculas(sacha)
imprimirNombreMayusculas(dario)

function imprimirObjeto ({ nombre }) {
  console.log(nombre)
}
imprimirObjeto(dario)

function cumpleanos (persona) {
  persona.edad += 1
}

cumpleanos()

function cumpleanosNoModifica (persona) {
  return {
    ...persona,
    edad: persona.edad + 1
  }
}

cumpleanosNoModifica()
