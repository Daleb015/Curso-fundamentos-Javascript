const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 100

class Juego {
  constructor () {
    setTimeout(() => {
      this.inicializar()
      this.generarSecuencia()
      this.aumentarNivel()
    }, 500)
  }

  inicializar () {
    this.toggleBtnEmpezar()
    this.nivel = 1
    this.colores = {
      celeste: celeste,
      violeta: violeta,
      naranja: naranja,
      verde: verde
    }
  }

  toggleBtnEmpezar () {
    if (btnEmpezar.classList.contains('hide')) {
      btnEmpezar.classList.remove('hide')
    } else {
      btnEmpezar.classList.add('hide')
    }
  }

  generarSecuencia () {
    this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
  }

  aumentarNivel () {
    this.subNivel = 0
    this.nombreAtributo = 'valor'
    this.iluminarSecuencia()
    this.agregarEventos()
  }

  transformarNumeroColor (numero) {
    switch (numero) {
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'
    }
  }

  transformarColorNumero (color) {
    switch (color) {
      case 'celeste':
        return 0
      case 'violeta':
        return 1
      case 'naranja':
        return 2
      case 'verde':
        return 3
    }
  }

  iluminarSecuencia () {
    for (let index = 0; index < this.nivel; index++) {
      const color = this.transformarNumeroColor(this.secuencia[index])
      console.log(color)
      setTimeout(() => this.iluminarColor(color), 1000 * index)
    }
  }

  iluminarColor (color) {
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 600)
  }

  apagarColor (color) {
    this.colores[color].classList.remove('light')
  }

  agregarEventos () {
    this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
    this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
    this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
    this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
  }

  eliminarEventosClick () {
    this.colores.celeste.removeEventListener('click', this.elegirColor.bind(this))
    this.colores.naranja.removeEventListener('click', this.elegirColor.bind(this))
    this.colores.verde.removeEventListener('click', this.elegirColor.bind(this))
    this.colores.violeta.removeEventListener('click', this.elegirColor.bind(this))
  }

  elegirColor (ev) {
    const nombreColor = ev.target.dataset.color
    const numeroColor = this.transformarColorNumero(nombreColor)
    this.iluminarColor(nombreColor)
    if (numeroColor === this.secuencia[this.subNivel]) {
      this.subNivel++
      if (this.subNivel === this.nivel) {
        this.nivel++
        this.eliminarEventosClick()
        if (this.nivel === (ULTIMO_NIVEL + 1)) {
          this.ganar()
        } else {
          setTimeout(this.aumentarNivel.bind(this), 2000)
        }
      }
    } else {
      this.perdio()
    }
  }

  ganar () {
    swal('Alerta', 'Ganaste', 'success')
      .then(this.inicializar.bind(this))
  }

  perdio () {
    swal('Alerta', 'Perdiste', 'error')
      .then(this.inicializar.bind(this))
  }
}

function empezar () {
  window.juego = new Juego()
}
