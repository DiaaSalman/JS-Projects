let minutesEl = document.querySelector('.minutes')
let secondsEl = document.querySelector('.seconds')
let startButton = document.querySelector('.start-button')
let resetButton = document.querySelector('.reset')

let timerInterval
let isRunning = false

function startTimer(duration, minutesEl, secondsEl) {
  let timer = duration,
    minutes,
    seconds
  if (!isRunning) {
    isRunning = true
    timerInterval = setInterval(() => {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10)

      minutes = minutes < 10 ? '0' + minutes : minutes
      seconds = seconds < 10 ? '0' + seconds : seconds

      minutesEl.textContent = minutes
      secondsEl.textContent = seconds

      if (--timer < 0) {
        clearInterval(timerInterval)
        alert('Time is up!')
      }
    }, 1000)
  } else {
    alert("Timer's already running!")
  }
}

function resetTitmer() {
  clearInterval(timerInterval)
  isRunning = false
  minutesEl.textContent = '25'
  secondsEl.textContent = '00'
}

resetButton.addEventListener('click', () => {
  resetTitmer()
})

startButton.addEventListener('click', () => {
  const duration = 60 * 25 // 25 minutes
  startTimer(duration, minutesEl, secondsEl)
})
