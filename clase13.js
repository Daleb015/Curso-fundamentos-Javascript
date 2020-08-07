var daniel = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 31,
  peso: 93
}

console.log(`Al inicio del año ${daniel.nombre} pesa ${daniel.peso}`)

const aumentarPeso = persona => persona.peso++
const disminuirPeso = persona => persona.peso--

for (let i = 1; i < 366; i++) {
  var random = Math.random()
  if (random < 0.25) {
    aumentarPeso(daniel)
  } else {
    disminuirPeso(daniel)
  }
}

console.log(`Al final del año ${daniel.nombre} pesa ${daniel.peso}`)
