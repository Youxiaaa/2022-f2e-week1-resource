import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'
import gsap from 'gsap'
import { onMounted } from 'vue'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export const useLoading = () => {
  gsap.to('.progress__bar', {
    width: '100%',
    ease: 'power3.out',
    duration: 2.5
  })
  gsap.to('.progress__container', {
    opacity: '0',
    ease: 'power3.out',
    duration: .5,
    delay: 2.5
  })
}

// 開場動畫
function useStartAnimation() {
  gsap.to('.animate__container', {
    opacity: '1',
    duration: '.5',
    ease: 'power3.out'
  })
  gsap.from('.road', {
    duration: 1,
    ease: 'power3.out',
    y: '300px'
  })
  gsap.from('.pole', {
    duration: 0.5,
    ease: 'power3.out',
    yPercent: '100',
    delay: .3
  })
  gsap.from('.logo', {
    duration: 2,
    ease: 'elastic',
    y: '-300px',
    delay: 0.8
  })
  gsap.from('.title', {
    duration: 1,
    ease: 'expo',
    scale: '0',
    delay: 1.5
  })
  gsap.utils.toArray('.runner__container').forEach((item, idx) => {
    gsap.to(item, {
      duration: 1,
      ease: 'expo',
      scale: '1',
      delay: `${1.5 + (idx * 0.2)}`
    })
  })
  gsap.to('.cloud__left', {
    duration: 1,
    ease: 'expo',
    scale: 1,
    delay: 2.2
  })
  gsap.to('.cloud__right', {
    duration: 1,
    ease: 'expo',
    scale: 1,
    delay: 2.2
  })
  gsap.to('.status__ready-1', {
    right: '0',
    ease: 'expo',
    duration: 1,
    delay: 2.5
  })
  gsap.to('.join__container', {
    scale: '1',
    ease: 'expo',
    duration: 1,
    delay: 2.8
  })
}

function useTimeLine() {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.phase1',
      start: 'top top',
      end: '+=8000px',
      pin: true,
      scrub: true
    }
  })
  tl.to('.status__ready-1', {
    display: 'none'
  }, '<')
    .to('.status__ready-2', {
      display: 'block'
    })
    .to('.cloud__left', {
      scale: '0.8',
      x: '80px'
    }, '<')
    .to('.cloud__right', {
      scale: '0.8',
      x: '-80px'
    }, '<')
    .to('.status__ready-2', {
      display: 'none'
    })
    .to('.status__ready-3', {
      display: 'block'
    })
    .to('.cloud__left', {
      scale: '0.5',
      x: '160px'
    }, '<')
    .to('.cloud__right', {
      scale: '0.5',
      x: '-160px'
    }, '<')
    .to('.status__ready-3', {
      display: 'none'
    })
    .to('.status__ready-4', {
      display: 'block'
    })
    .to('.cloud__left', {
      scale: '0',
      x: '250px',
      opacity: '0'
    }, '<')
    .to('.cloud__right', {
      scale: '0',
      x: '-250px',
      opacity: '0'
    }, '<')
    .to('.status__ready-4', {
      opacity: '0'
    })
    .to('.runner__title', {
      opacity: '0'
    }, '<')
    .to('.title', {
      opacity: '0'
    })
    .to('.pole', {
      opacity: '0'
    }, '<')
    .to('.logo', {
      opacity: '0'
    }, '<')
    .to('.second__title', {
      opacity: '1'
    }, '<')
    .to('.road', {
      width: '45%'
    })
    .to('.pole', {
      display: 'none'
    }, '<')
    .to('.runner', {
      scale: '0.7'
    }, '<')
    .to('.runner__outside', {
      width: '40%'
    }, '<')
    .to('.runner-1', {
      y: '20px'
    }, '<')
    .to('.runner-2', {
      y: '20px'
    }, '<')
    .to('.left__tree', {
      left: '25%',
      bottom: '-20px'
    }, '<')
    .to('.right__tree', {
      right: '25%',
      bottom: '-20px'
    }, '<')
    .to('.talking-1', {
      opacity: '1'
    }, '<')
    .to('.left__tree', {
      left: '30%',
      bottom: '-15px',
      scale: '0.9'
    })
    .to('.right__tree', {
      right: '30%',
      bottom: '-15px',
      scale: '0.9'
    }, '<')
    .to('.question-1', {
      opacity: '1',
      scale: '1'
    }, '<')
    .to('.left__tree', {
      left: '35%',
      bottom: '0px',
      scale: '0.7'
    })
    .to('.right__tree', {
      right: '35%',
      bottom: '0px',
      scale: '0.7'
    }, '<')
    .to('.question-2', {
      opacity: '1',
      scale: '1'
    }, '<')
    .to('.left__tree', {
      left: '40%',
      bottom: '15px',
      opacity: '0',
      scale: '0.5'
    })
    .to('.right__tree', {
      right: '40%',
      bottom: '15px',
      opacity: '0',
      scale: '0.5'
    }, '<')
    .to('.question-3', {
      opacity: '1',
      scale: '1'
    }, '<')
    .to('.question__container', {
      opacity: '0',
      scale: '0'
    })
    .to('.talking-1', {
      opacity: '0',
      scale: '0'
    }, '<')
    .to('.talking-2', {
      opacity: '1'
    })
    .to('.road', {
      width: '60%'
    })
    .to('.question__container', {
      display: 'none'
    }, '<')
    .to('.runner', {
      scale: '1'
    }, '<')
    .to('.runner__outside', {
      width: '50%'
    }, '<')
    .to('.runner-1', {
      y: '0px'
    }, '<')
    .to('.runner-2', {
      y: '0px'
    }, '<')
    .to('.player__container', {
      opacity: '1',
      zIndex: '9999',
      y: '0px'
    })
    .to('.player__container', {
      opacity: '0',
      y: '30px'
    })
    .to('.talking-2', {
      opacity: '0',
      y: '30px'
    }, '<')
    // 跑者縮小
    .to('.runner', {
      scale: '0.7'
    }, '<')
    .to('.runner__outside', {
      width: '40%'
    }, '<')
    .to('.runner-1', {
      y: '20px'
    }, '<')
    .to('.runner-2', {
      y: '20px'
    }, '<')
    //
    .to('.talking-3', {
      opacity: '1',
      scale: '1'
    })
    .to('.player__container', {
      display: 'none'
    }, '<')
    .to('.runner__title', {
      display: 'none'
    }, '<')
    .to('.week1__container', {
      bottom: '50%',
      y: '50%',
      opacity: '1'
    })
    .to('.week1__container', {
      bottom: '100%',
      opacity: '0'
    })
    .to('.week2__container', {
      bottom: '50%',
      y: '50%',
      opacity: '1'
    }, '<')
    .to('.week2__container', {
      bottom: '100%',
      opacity: '0'
    })
    .to('.week3__container', {
      bottom: '50%',
      y: '50%',
      opacity: '1'
    }, '<')
    .to('.week3__container', {
      bottom: '100%',
      opacity: '0'
    })
    .to('.talking-3', {
      opacity: '0',
      scale: '0'
    })
    // 跑者放大
    .to('.runner', {
      scale: '1'
    }, '<')
    .to('.runner__outside', {
      width: '50%'
    }, '<')
    .to('.runner-1', {
      y: '0px'
    }, '<')
    .to('.runner-2', {
      y: '0px'
    }, '<')
    .to('.line__container', {
      z: '100'
    })
    .to('.line__mask', {
      left: '100%'
    }, '<')
    .to('.step__circle--1', {
      opacity: '1'
    })
    .to('.step__line--1', {
      height: '50px'
    })
    .to('.step1__container', {
      opacity: '1'
    })
    .to('.step__circle--2', {
      opacity: '1'
    })
    .to('.step__line--2', {
      height: '25px'
    })
    .to('.step2__container', {
      opacity: '1'
    })
    .to('.step__circle--3', {
      opacity: '1'
    })
    .to('.step__line--3', {
      height: '50px'
    })
    .to('.step3__container', {
      opacity: '1'
    })
    .to('.step__outside', {
      opacity: '0'
    })
    .to('.line__container', {
      opacity: '0'
    }, '<')
    .to('.anime__img--1', {
      left: '0%'
    })
    .to('.anime__img--2', {
      right: '0%'
    }, '<')
    .to('.runner__outside', {
      width: '60%'
    }, '<')
    .to('.road', {
      width: '70%'
    }, '<')
    .to('.sp__title', {
      scale: '1',
      opacity: '1'
    })
    .to('.anime__img--1', {
      bottom: '60%',
      left: '15%'
    }, '<')
    .to('.anime__img--2', {
      bottom: '60%',
      right: '15%'
    }, '<')
    .to('.sp__title', {
      opacity: '0'
    })
    .to('.anime__img--1', {
      opacity: '0'
    }, '<')
    .to('.anime__img--2', {
      opacity: '0'
    }, '<')
    .to('.runner__outside', {
      width: '50%'
    })
    .to('.road', {
      width: '60%'
    }, '<')
    .to('.talking-4', {
      opacity: '1'
    })
    .fromTo('.award__content', {
      opacity: '0',
      x: '-50px'
    }, {
      opacity: '1',
      x: '50px'
    })
    .fromTo('.trophy', {
      opacity: '0',
      left: '0%'
    }, {
      opacity: '1',
      left: '50%'
    }, '<')
    .fromTo('.light', {
      opacity: '0',
      left: '0%'
    }, {
      opacity: '1',
      left: '16%'
    }, '<')
    .to('.trophy', {
      left: '100%',
      opacity: '0'
    })
    .to('.light', {
      left: '40%',
      opacity: '0'
    }, '<')
    .to('.award__content', {
      x: '100px',
      opacity: '0'
    }, '<')
    .to('.talking-4', {
      opacity: '0'
    }, '<')
    .to('.road', {
      width: '75%'
    })
    .to('.runner-1', {
      scale: '1.1',
      x: '-50px'
    }, '<')
    .to('.runner-2', {
      scale: '0.8'
    }, '<')
    .to('.runner-3', {
      scale: '0.7',
      x: '50px'
    }, '<')
    .to('.left__tree--2', {
      bottom: '0%',
      left: '5%',
      opacity: '1'
    })
    .to('.right__tree--2', {
      bottom: '0%',
      right: '5%',
      opacity: '1'
    }, '<')
    .to('.talking-5', {
      opacity: '1'
    }, '<')
    .to('.company--1', {
      opacity: '1',
      y: '0px'
    })
    .to('.company--2', {
      opacity: '1',
      y: '0px'
    })
    .to('.left__tree--2', {
      bottom: '5%',
      left: '15%',
    }, '<')
    .to('.right__tree--2', {
      bottom: '5%',
      right: '15%',
    }, '<')
    .to('.company--3', {
      opacity: '1',
      y: '0px'
    })
    .to('.company--1', {
      opacity: '0'
    })
    .to('.company--2', {
      opacity: '0'
    }, '<')
    .to('.company--3', {
      opacity: '0'
    }, '<')
    .to('.talking-5', {
      opacity: '0'
    }, '<')
    .to('.left__tree--2', {
      bottom: '5%',
      left: '40%',
      scale: '0.5',
      opacity: '0'
    }, '<')
    .to('.right__tree--2', {
      bottom: '5%',
      right: '40%',
      scale: '0.5',
      opacity: '0'
    }, '<')
    .to('.left__cloud--2', {
      left: '0%'
    })
    .to('.right__cloud--2', {
      right: '0%'
    }, '<')
    .to('.left__cloud--2', {
      left: '10%'
    })
    .to('.right__cloud--2', {
      right: '10%'
    }, '<')
    .to('.road', {
      width: '85%'
    }, '<')
    .to('.runner-1', {
      y: '-30px'
    }, '<')
    .to('.runner-2', {
      scale: '1.3',
      y: '-30px'
    }, '<')
    .to('.runner-3', {
      scale: '1',
      y: '-15px'
    }, '<')
    .to('.finish', {
      display: 'block'
    }, '<')
    .to('.finish', {
      opacity: '1'
    }, '<')
    .to('.finish__line__left', {
      opacity: '1',
      zIndex: '9999'
    }, '<')
    .to('.finish__line__right', {
      opacity: '1'
    }, '<')
    .fromTo('.finish', {
      scale: '1.8'
    }, {
      scale: '1'
    })
    .to('.runner-1', {
      scale: '1.6',
      x: '-50px'
    }, '<')
    .to('.runner-2', {
      scale: '1.6'
    }, '<')
    .to('.runner-3', {
      scale: '1.6',
      x: '50px'
    }, '<')
    .to('.finish__line__left', {
      rotate: '-10deg',
      left: '-20%'
    }, '<')
    .to('.finish__line__right', {
      rotate: '10deg',
      right: '-20%'
    }, '<')
    .to('.finish__line__left', {
      rotate: '-15deg',
      opacity: '0',
      left: '-40%'
    })
    .to('.finish__line__right', {
      rotate: '15deg',
      opacity: '0',
      right: '-40%'
    }, '<')
    .to('.runner__outside', {
      scale: '1.2',
      opacity: '0'
    })
    .to('.finish', {
      opacity: '0'
    }, '<')
    .to('.left__cloud--2', {
      opacity: '0'
    }, '<')
    .to('.right__cloud--2', {
      opacity: '0'
    }, '<')
    .to('.second__title', {
      opacity: '0'
    })
    .to('.runner__outside', {
      display: 'none'
    })
    .to('.third__title', {
      display: 'block'
    })
    .to('.third__title', {
      opacity: '1'
    })
    .to('.join__container', {
      opacity: '0'
    }, '<')
    .to('.signup__container', {
      opacity: '1'
    }, '<')
}

// 響應式開場動畫
function useRwdStartAnimation() {
  gsap.to('.responsive__container', {
    opacity: '1',
    duration: '0.3'
  })
  gsap.to('.rwd__user__btn', {
    scale: '1',
    duration: 0.5,
    delay: 0.5
  })
  gsap.to('.rwd__logo', {
    scale: '1',
    duration: 0.5,
    delay: 0.5
  })
  gsap.from('.second__logo--m', {
    scale: 0,
    ease: 'elastic',
    delay: 0.5
  })
  gsap.to('.player__container-m', {
    opacity: '1',
    duration: 0.5,
    delay: 0.8
  })
  gsap.to('.runner__outside-m', {
    opacity: '1',
    duration: 0.5,
    delay: 1.2
  })
}

function useResponsiveTimeLine() {
  const tl = gsap.timeline({
    scrollTrigger: {
      target: '.responsive__container',
      start: 'top top',
      end: '+=500px',
      scrub: true
    }
  })
  tl.to('.left__cloud--1-m', {
    left: '20%',
    opacity: 0
  })
  tl.to('.right__cloud--1-m', {
    right: '20%',
    opacity: 0
  }, '<')
  tl.to('.stateReady-1-m', {
    display: 'none'
  })
  tl.to('.stateReady-4-m', {
    display: 'block'
  })
  tl.to('.stateReady-4-m', {
    right: '-100%'
  })
  tl.to('.left__cloud--1-m', {
    display: 'none'
  })
  tl.to('.right__cloud--1-m', {
    display: 'none'
  }, '<')
  tl.to('.progress__container', {
    display: 'none'
  }, '<')
}

function useResponsiveAnimation() {
  // fade
  gsap.utils.toArray('.fade').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    tl.fromTo(item, {
      opacity: 0
    }, {
      opacity: 1,
      duration: 0.5,
      ease: 'power3.out'
    })
  })
  // fade-left
  gsap.utils.toArray('.fade-left').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 40%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    tl.fromTo(item, {
      opacity: 0,
      x: '-30px'
    }, {
      opacity: 1,
      x: '0px',
      duration: 0.5,
      ease: 'power3.out'
    })
  })
  // fade-right
  gsap.utils.toArray('.fade-right').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top 40%',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    tl.fromTo(item, {
      opacity: 0,
      x: '30px'
    }, {
      opacity: 1,
      x: '0px',
      duration: 0.5,
      ease: 'power3.out'
    })
  })
  // scale
  gsap.utils.toArray('.scaleAnimation').forEach((item) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'bottom top',
        toggleActions: 'play none none reverse'
      }
    })
    tl.fromTo(item, {
      scale: 0
    }, {
      scale: 1,
      duration: 0.6,
      ease: 'power3.out'
    })
  })
}

function initAnimation() {
  const windowWidth = window.innerWidth
  if (windowWidth > 1280) {
    useStartAnimation()
    useTimeLine()
  } else {
    useRwdStartAnimation()
    useResponsiveTimeLine()
    useResponsiveAnimation()
  }
}

export const startAnimation = () => {
  onMounted(() => {
    useLoading()
    setTimeout(() => {
      initAnimation()
    }, 2500)
  })
}
