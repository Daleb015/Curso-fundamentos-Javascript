const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

function obtenerPersonaje (id) {
  return new Promise(function (resolve, reject) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(URL, OPTS, function (data) {
      resolve(data)
    })
      .fail(function () {
        reject(id)
      })
  })
}

var ids = [1, 2, 3]
var promesas = ids.map(id => obtenerPersonaje(id))
Promise
  .all(promesas)
  .then(personajes => console.log(personajes))
  .catch(() => console.log('Ocurrio un error'))
/* obtenerPersonaje(1)
  .then(function (personaje) {
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(2)
  })
  .then(function (personaje) {
    console.log(`El personaje es ${personaje.name}`)
    return obtenerPersonaje(3)
  })
  .then(personaje => {
    console.log(`El personaje es ${personaje.name}`)
  })
  .catch(function (id) {
    console.log(`Sucedio un error en el personaje de id ${id}`)
  })
 */
