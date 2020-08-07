var daniel = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 31,
  altura: 1.85
}

var lina = {
  nombre: 'Lina',
  apellido: 'Cardenas',
  edad: 25,
  altura: 1.75
}

var lorena = {
  nombre: 'Lorena',
  apellido: 'Valencia',
  edad: 31,
  altura: 1.60
}

var paola = {
  nombre: 'Paola',
  apellido: 'Fuentes',
  edad: 25,
  altura: 1.60
}

var personas = [daniel, lina, lorena, paola]

var personasCms = personas.map(
  persona => {
    persona.altura *= 100
    return persona
  }
)

var personasAlturaCms = personas.map(
  persona => ({
    ...persona,
    altura: persona.altura * 100
  })
)

console.log(personasAlturaCms)
