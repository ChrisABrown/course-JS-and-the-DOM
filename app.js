const data = document.querySelector('.card__content')
data.innerHTML = '<em>Welcome</em> to Udacity'

const mainHeading = document.querySelector('h1')
const otherHeading = document.querySelector('h4')
const excitedText = document.createElement('span')

excitedText.textContent('!!!')
mainHeading.appendChild(excitedText)
otherHeading.appendChild(excitedText)
