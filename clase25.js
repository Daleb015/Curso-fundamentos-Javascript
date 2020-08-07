class Persona {
  constructor (nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }

  saludar () {
    console.log(`mi nombre es: ${this.nombre}`)
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

var daniel = new Persona('Daniel', 'lineros', 1.86)
console.log(daniel)
var daniel2 = new Desarrollador('Pedro', 'Perez', 1.70)
console.log(daniel2)
