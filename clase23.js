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

var daniel = new Persona('Daniel', 'Lineros', 1.86)
var lina = new Persona('Lina', 'cardenas', 1.75)
daniel.saludar()
lina.saludar()

