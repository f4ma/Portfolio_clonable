/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import gsap from 'gsap'
//import { Flip } from 'gsap/Flip'
//import { Observer } from 'gsap/Observer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function animateElements() {
  // Scroll into view

  // Scroll into view
  function cursosAnimation() {
    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-intro_component',
        start: 'top top',
        end: 'bottom top',
        scrub: true,

        toggleActions: 'restart pause resume pause',
      },
    })

    tl2.to(
      '.cards_item',
      {
        y: 230,
        opacity: 0,
        ease: 'none',
        stagger: { each: 0.4, from: 'end' },
        // ease: 'power4.out',
        duration: 1,
      },
      0
    )
  }
  cursosAnimation()
}

export default animateElements
