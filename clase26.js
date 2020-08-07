class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar (funcion) {
    console.log(`mi nombre es: ${this.nombre}`)
    if (funcion) {
      funcion(this.nombre, this.apellido, false)
    }
  }

  soyAlto () {
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor (nombre, apellido, altura) {
    super()
    this.altura = altura
    this.nombre = nombre
    this.apellido = apellido
  }

  saludar () {
    console.log(`Yo ${this.nombre} soy dev`)
  }
}

function responderSaludo (nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log('No sabia que eras desarrollador')
  }
}

var daniel = new Desarrollador('Daniel', 'Lineros', 1.86)
var lina = new Persona('Lina', 'Cardenas', 1.75)
daniel.saludar()
lina.saludar(responderSaludo)
