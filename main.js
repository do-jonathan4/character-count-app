var charEntered = document.getElementById('char-entered')
var charRemaining = document.getElementById('char-remaining')
var textarea = document.querySelector('textarea')

window.addEventListener('DOMContentLoaded', event => {
  charEntered.textContent = 0
  charRemaining.textContent = 280
});

textarea.addEventListener('input', event => {
  let text = event.target.value
  charEntered.textContent = text.length
  charRemaining.textContent = 280 - text.length
})
