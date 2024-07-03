let computerSelection = document.querySelector('.computer .selected-icon')
let playerSelection = document.querySelector('.player .selected-icon')
let playerChoices = document.querySelectorAll('.choices .choice')
let statusMessage = document.querySelector('.status-message')
let resetButton = document.querySelector('.reset')
let computerScore = document.querySelector('.computer .score')
let playerScore = document.querySelector('.player .score')
let mode = document.querySelector('.ui-switch input')

let computer = 0
let player = 0

// Load scores and theme from local storage
window.onload = function () {
  if (localStorage.getItem('computerScore')) {
    computer = parseInt(localStorage.getItem('computerScore'), 10)
    computerScore.textContent = computer
  }
  if (localStorage.getItem('playerScore')) {
    player = parseInt(localStorage.getItem('playerScore'), 10)
    playerScore.textContent = player
  }
  if (localStorage.getItem('theme') === 'dark') {
    mode.checked = true
    switchMode()
  }
  // Restore reset button state
  if (localStorage.getItem('resetButtonStyle')) {
    const style = JSON.parse(localStorage.getItem('resetButtonStyle'))
    resetButton.style.backgroundColor = style.backgroundColor
    resetButton.style.cursor = style.cursor
  }
}

function switchMode() {
  if (mode.checked) {
    document.querySelector('body').classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.querySelector('body').classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

function computerTurn() {
  let random = Math.floor(Math.random() * 3)

  if (random === 0) {
    computerSelection.textContent = '✊'
  } else if (random === 1) {
    computerSelection.textContent = '🖐️'
  } else {
    computerSelection.textContent = '✌️'
  }
}

function playerTurn() {
  playerChoices.forEach((item) => {
    item.addEventListener('click', function () {
      playerChoices.forEach((item) => item.classList.remove('active'))
      this.classList.add('active')
      playerSelection.textContent = this.textContent

      resetButton.style.backgroundColor = '#af66da'
      resetButton.style.cursor = 'pointer'
      localStorage.setItem(
        'resetButtonStyle',
        JSON.stringify({
          backgroundColor: resetButton.style.backgroundColor,
          cursor: resetButton.style.cursor,
        }),
      )

      computerTurn()

      determineWinner()
    })
  })
}

function determineWinner() {
  if (
    (computerSelection.textContent.trim() === '✊' &&
      playerSelection.textContent.trim() === '✌️') ||
    (computerSelection.textContent.trim() === '🖐️' &&
      playerSelection.textContent.trim() === '✊') ||
    (computerSelection.textContent.trim() === '✌️' &&
      playerSelection.textContent.trim() === '🖐️')
  ) {
    statusMessage.style.display = 'block'
    statusMessage.textContent = 'Computer Wins'
    statusMessage.style.color = '#892222'
    statusMessage.style.backgroundColor = '#fde5e5'
    computer++
    computerScore.textContent = computer
    localStorage.setItem('computerScore', computer)
  } else if (
    (computerSelection.textContent.trim() === '✌️' &&
      playerSelection.textContent.trim() === '✊') ||
    (computerSelection.textContent.trim() === '✊' &&
      playerSelection.textContent.trim() === '🖐️') ||
    (computerSelection.textContent.trim() === '🖐️' &&
      playerSelection.textContent.trim() === '✌️')
  ) {
    statusMessage.style.display = 'block'
    statusMessage.textContent = 'You Win'
    statusMessage.style.color = '#22893d'
    statusMessage.style.backgroundColor = '#d7f7da'
    player++
    playerScore.textContent = player
    localStorage.setItem('playerScore', player)
  } else {
    statusMessage.style.display = 'block'
    statusMessage.textContent = 'Draw'
    statusMessage.style.color = '#827986'
    statusMessage.style.backgroundColor = '#e6e6e6'
  }
}

resetButton.addEventListener('click', () => {
  computer = 0
  player = 0
  computerScore.textContent = computer
  playerScore.textContent = player
  localStorage.setItem('computerScore', computer)
  localStorage.setItem('playerScore', player)
  statusMessage.style.display = 'none'
  playerChoices.forEach((item) => item.classList.remove('active'))
  resetButton.style.backgroundColor = '#827986'
  resetButton.style.cursor = 'not-allowed'
  localStorage.setItem(
    'resetButtonStyle',
    JSON.stringify({
      backgroundColor: resetButton.style.backgroundColor,
      cursor: resetButton.style.cursor,
    }),
  )
})

mode.addEventListener('change', () => {
  switchMode()
})

playerTurn()
