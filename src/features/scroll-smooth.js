/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
//import Lenis from '@studio-freight/lenis'
import dragscroll from 'dragscroll'
import luxyMin from 'luxy.js'

function smoothScroll() {
  /*
  const lenis = new Lenis({
    duration: 1.5,
    lerp: 0.1,
    // easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
    direction: 'vertical',
    smooth: true,
    smoothTouch: false,
    fastScrollEnd: false,
    touchMultiplier: 1.5,
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)+
  */

  var isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)
  if (!isMobile) {
    luxyMin.init({
      wrapper: '#smooth',
      wrapperSpeed: 0.065,
    })
  }
  document
    .querySelectorAll('body')
    .forEach((target) => target.classList.add('dragscroll'))
}

export default smoothScroll
