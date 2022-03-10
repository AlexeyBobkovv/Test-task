// Test import of a JavaScript module
// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

import './server.js'
import './js/popup'
// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// // Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// // Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)

document.addEventListener('DOMContentLoaded', function () {
  // конечная дата
  const deadline = new Date(2022, 12, 31)
  // id таймера
  let timerId = null
  // склонение числительных
  function declensionNum(num, words) {
    return words[
      num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 5]
    ]
  }
  // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
  function countdownTimer() {
    const diff = deadline - new Date()
    if (diff <= 0) {
      clearInterval(timerId)
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0
    $days.textContent = days < 10 ? '0' + days : days
    $hours.textContent = hours < 10 ? '0' + hours : hours
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds
  }
  // получаем элементы, содержащие компоненты даты
  const $days = document.querySelector('.time-block__days')
  const $hours = document.querySelector('.time-block__hours')
  const $minutes = document.querySelector('.time-block__minutes')
  const $seconds = document.querySelector('.time-block__seconds')
  // вызываем функцию countdownTimer
  countdownTimer()
  // вызываем функцию countdownTimer каждую секунду
  timerId = setInterval(countdownTimer, 1000)
})

const form = document.querySelector('form')
const input = document.querySelector('[name="email"]')
const popup = document.querySelector('.popup')

// formBtn.addEventListener('click', () => {

//   if (input.value.match(pattern)) {
//     formBtn.classList.add('valid')
//     formBtn.classList.remove('invalid')
//   } else {
//     formBtn.classList.remove('valid')
//     formBtn.classList.add('invalid')
//   }
//   if (input.value == '') {
//     formBtn.classList.remove('valid')
//     formBtn.classList.remove('invalid')
//   }
// })

form.addEventListener('submit', function (event) {
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (input.value.match(pattern)) {
    const searchParams = new URLSearchParams()

    searchParams.set('email', input.value)

    const path = '/handler/?' + searchParams.toString()

    fetch(path)
      .then((response) => {
        return response.text()
      })
      .then(() => {
        popup.style.display = 'block'
        input.value = ''
      })
  } else {
    alert('Please enter correct email address')
  }

  event.preventDefault()
})
