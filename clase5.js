var nombre = 'Daniel'
function imprimir () {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimir()

var nombre2 = 'Juan'
function imprimirLocal (nombre) {
  nombre = nombre.toUpperCase()
  console.log(nombre)
}
imprimirLocal(nombre2)
