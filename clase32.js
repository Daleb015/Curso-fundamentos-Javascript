const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true }, function (luke) {
  console.log(`Yo soy ${luke.name}`)
})

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, { crossDomain: true }, function () {
  console.log(arguments[0])
})
