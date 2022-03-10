const crossBtn = document.querySelectorAll('.popup__exit-btn')
const popup = document.querySelector('.popup')

crossBtn.forEach((el) =>
  el.addEventListener('click', () => {
    popup.style.display = 'none'
  })
)

const header = document.querySelector('.popup__header')
const subtext = document.querySelector('.popup__help-text')

function openPopup(isOk) {
  popup.style.display = 'block'

  if (isOk) {
    header.innerHTML = 'SUCCESS!'
    subtext.innerHTML = 'You have successfully subscribed to the email newsletter'
  } else {
    header.innerHTML = 'Fail?!'
    subtext.innerHTML = 'You have faild subscribe, how?'
  }
}

export default openPopup
