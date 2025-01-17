function Persona (nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}

Persona.prototype.saludar = function () {
  console.log(` Hola, me llamo ${this.nombre}`)
}

Persona.prototype.soyAlto = function () {
  return this.altura > 1.8
}

function Desarrollador (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
  console.log(`Hola, me llamo ${this.nombre} y soy desarrollador`)
}

var heredaDe = function (prototipoHijo, prototipoPadre) {
  var fn = function () {}
  fn.prototype = prototipoPadre.prototype
  prototipoHijo.prototype = new fn()
  prototipoHijo.prototype.constructor = prototipoHijo
}

heredaDe(Desarrollador, Persona)

