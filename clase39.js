const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'
const OPTS = { crossDomain: true }

async function obtenerPersonaje (id) {
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

async function obtenerPersonajes () {
  var ids = [1, 2, 3]
  var promesas = ids.map(id => obtenerPersonaje(id))
  try {
    var personajes = await Promise.all(promesas)
    console.log(personajes)
  } catch (id) {
    console.log(`Ocurrio un error ${id}`)
  }
}

obtenerPersonajes()
