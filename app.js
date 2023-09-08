// const data = document.querySelector('.card__content')
// data.innerHTML = '<em>Welcome</em> to Udacity'

// const mainHeading = document.querySelector('h1')

// const otherHeading = document.querySelector('h4')

// const excitedText = document.createElement('span')

// excitedText.textContent = '!!!'
// mainHeading.appendChild(excitedText)
// otherHeading.appendChild(excitedText)

// const commSect = document.querySelector('.testimonials')

// const h1El = document.querySelector('h1')

// const h2El = document.createElement('h2')

// h1El.addEventListener

// h2El.textContent = 'Advice for New Udacity Students'

// commSect.appendChild(h2El)

// h2El.insertAdjacentHTML(
//   'afterend',
//   '<p>Try your best to keep up with your study schedules</p>'
// )

// document.querySelector('#start-now').style.cssText =
//   'border-radius: 5rem; background: #2015ff'

// const section = document.querySelector('.hero--homepage')
// const cards = document.querySelectorAll('.card')

// section.classList.add('new-hero')

// cards.forEach((card) => {
//   if (card.classList.contains('card')) {
//     card.classList.add('new-card')
//   }
// })

// h1El.addEventListener('mouseenter', () => {
//   h1El.textContent = 'Build an AR App'
// })

// h1El.addEventListener('mouseleave', () => {
//   h1El.textContent = 'Learn ARKit'
// })

// const hero = document.querySelector('.hero__module')

// const removal = () => {
//   hero.lastElementChild.remove()
//   document.removeEventListener('click', removal)
// }
// document.addEventListener('click', removal)

const nanoDeg = document.querySelectorAll('.card--nanodegree__title')

nanoDeg.forEach((x) => {
  let favButton = document.createElement('button')
  favButton.textContent = 'Add to Favorites'
  favButton.className = 'button button--primary'
  x.appendChild(favButton)
})

const changeStatus = (e) => {
  const target = e.target
  if (target.nodeName.toLowerCase() === 'button') {
    e.preventDefault()
    if (target.textContent.includes('Add')) {
      target.textContent = 'Remove From Favorites'
      const status = document.createElement('p')
      status.textContent = '⭐'

      target.parentElement.appendChild(status)
    } else {
      target.textContent = 'Add To Favorites'
      target.nextSibling.remove()
    }
  }
}

document.addEventListener('click', changeStatus)
