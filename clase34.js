const API_URL = 'http://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const OPTS = { crossDomain: true }

function obtenerPersonaje (id, callback) {
  const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(URL, OPTS, function (persona) {
    console.log(`Hola, soy ${persona.name}`)
    if (callback) {
      callback()
    }
  })
}

obtenerPersonaje(1, function () {
  obtenerPersonaje(2, function () {
    obtenerPersonaje(3)
  })
})
