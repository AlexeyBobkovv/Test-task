// Test import of a JavaScript module
// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

import './js/popup'
import './js/timer'

import openPopup from './js/popup'

const form = document.querySelector('form')
const input = document.querySelector('[name="email"]')

form.addEventListener('submit', function (e) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

  if (input.value.match(pattern)) {
    e.preventDefault()
    let myForm = form
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => openPopup(true))
      .catch((error) => alert(error), openPopup(false))
  } else {
    alert('Please enter correct email address')
  }

  input.value = ''
})
