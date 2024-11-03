window.addEventListener('scroll', () => {
  const nav = document.getElementById('top-nav')
  const scrollPosition = 310

  if (window.scrollY > scrollPosition) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
})

// seleziono tutte le lettere M della SVG tramite un attributo
const totalM = document.querySelectorAll('[stroke-linecap="butt"]')

const changeOpacity = function () {
  const random = Math.floor(Math.random() * totalM.length)
  // seleziono la lettera con l'indice casuale generato
  const selectedM = totalM[random]

  // una classe opacità nel file css porta l'opacity a 0 facendo scomparire la lettera selezionata
  //con IF controllo de la M ha l'opacità eventualmente la tolgo, se no ha la classe opacità allora la aggiungo
  if (selectedM.classList.contains('opacità')) {
    selectedM.classList.remove('opacità')
  } else {
    selectedM.classList.add('opacità')
  }
}

setInterval(changeOpacity, 100)
