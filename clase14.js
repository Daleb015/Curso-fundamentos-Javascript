var daniel = {
  nombre: 'Daniel',
  apellido: 'Lineros',
  edad: 31,
  peso: 93
}

const INCREMENTO_PESO = 0.3

const aumentarPeso = persona => persona.peso += INCREMENTO_PESO;
const bajarPeso = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
const META = daniel.peso - 10
var dias = 0

while (daniel.peso > META) {
  debugger
  if (comeMucho()) {
    aumentarPeso(daniel)
  }
  if (realizaDeporte()) {
    bajarPeso(daniel)
  }
  dias++
}

console.log(`Pasaron ${dias} para que daniel quedara en el peso de ${daniel.peso}`)
