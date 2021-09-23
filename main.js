var charEntered = document.getElementById('char-entered')
var charRemaining = document.getElementById('char-remaining')
var charUpdate = document.getElementById('char-update')
var textarea = document.querySelector('textarea')

window.addEventListener('DOMContentLoaded', event => {
  charEntered.textContent = 0
  charRemaining.textContent = 280
});

textarea.addEventListener('input', event => {
  let text = event.target.value
  charEntered.textContent = text.length
  charRemaining.textContent = 280 - text.length

  if (text.length > 280) {
    charUpdate.style.color = 'red'
    textarea.style.border = '3px solid red'
  } else {
    charUpdate.style.color = '#1DA1F2'
    textarea.style.border = '3px solid #1DA1F2'
  }
})
