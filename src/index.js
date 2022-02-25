// Test import of a JavaScript module
import { example } from '@/js/example'

// Test import of styles
import '@/styles/index.scss'

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

var controller = new ScrollMagic.Controller()

var tweenItm = TweenMax.staggerFromTo(
    '.list-el',
    1,
    { left: 0 },
    { left: -865, ease: Back.linear },
    0
)

// create a scene
new ScrollMagic.Scene({
    offset: 1000,
    triggerHook: 'onLeave',
    duration: '50%',
})
    .setPin('#pinnContainer')
    .setTween(tweenItm)
    .addTo(controller) // assign the scene to the controller

var tweenPrB = TweenMax.staggerFromTo(
    '.services__slide-progress-bar',
    2,
    { width: 574 },
    { width: 1920, ease: Back.linear },
    0.1
)

new ScrollMagic.Scene({
    // triggerElement: '#pinnContainer',
    offset: 1000,
    triggerHook: 'onLeave',
    duration: '50%',
})
    .setTween(tweenPrB)
    .addTo(controller) // assign the scene to the controller
