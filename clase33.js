const API_URL = 'http://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function obtenerPersonaje (id) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, OPTS, onPeopleResponse)
}

function onPeopleResponse (persona) {
  console.log(`Hola, soy ${persona.name}`)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
