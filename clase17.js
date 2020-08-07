var daniel = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 31
}

var lina = {
  nombre: 'Lina',
  apellido: 'Cardenas',
  edad: 25
}

var lorena = {
  nombre: 'Lorena',
  apellido: 'Valencia',
  edad: 31
}

var paola = {
  nombre: 'Paola',
  apellido: 'Fuentes',
  edad: 25
}

var personas = [daniel, lina, lorena, paola]

console.log(personas)

for (let i = 0; i < personas.length; i++) {
  const persona = personas[i]
  console.log(`${persona.nombre}`)
}
