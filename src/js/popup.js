const crossBtn = document.querySelectorAll('.popup__exit-btn')
const popup = document.querySelector('.popup')

crossBtn.forEach((el) =>
  el.addEventListener('click', () => {
    popup.style.display = 'none'
  })
)
