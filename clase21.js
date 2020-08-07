function Persona (nombre, apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

Persona.prototype.saludar = function () {
  console.log(` Hola, me llamo ${this.nombre}`)
}

var daniel = new Persona('Daniel', 'Lineros')
var lina = new Persona('Lina', 'cardenas')
daniel.saludar()
lina.saludar()

