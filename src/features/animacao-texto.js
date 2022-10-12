/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */
/* eslint-disable no-empty */
/* eslint-disable no-undef */
import anime from 'animejs/lib/anime.es.js'

function animateTitle() {
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others

  // Find all text with .tricks class and break each letter into a span
  var tricksWord = document.getElementsByClassName('tricks')
  for (var i = 0; i < tricksWord.length; i++) {
    var wordWrap = tricksWord.item(i)
    wordWrap.innerHTML = wordWrap.innerHTML.replace(
      /(^|<\/?[^>]+>|\s+)([^\s<]+)/g,
      '$1<span class="tricksword">$2</span>'
    )
  }

  var tricksLetter = document.getElementsByClassName('tricksword')
  for (var i = 0; i < tricksLetter.length; i++) {
    var letterWrap = tricksLetter.item(i)
    letterWrap.innerHTML = letterWrap.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    )
  }
  // Copyright end

  // Fade Up Animation
  var fadeUpProjetos = anime.timeline({
    loop: false,
    autoplay: false,
  })
  //window.onload = function () {
  fadeUpProjetos.add({
    targets: '.projeto-content_wrapper',
    translateY: [200, 0],
    translateZ: 0,
    opacity: [0.5, 1],
    easing: 'easeOutExpo',
    duration: 1400,
    delay: (el, i) => 300 + 200 * i,
  })

  // Play animation when scrolled into view
  $('.projetos_wrapper').on('inview', function (event, isInView) {
    if (isInView) {
      // Put the play below this line
      fadeUpProjetos.play()
    } else {
    }
  })
  //}
}

export default animateTitle
