let computerSelection = document.querySelector('.computer .selected-icon')
let playerSelection = document.querySelector('.player .selected-icon')
let playerChoices = document.querySelectorAll('.choices .choice')
let statusMessage = document.querySelector('.status-message')
let resetButton = document.querySelector('.reset')
let computerScore = document.querySelector('.computer .score')
let playerScore = document.querySelector('.player .score')

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

      computerTurn()

      determineWinner()
    })
  })
}

let computer = 0,
  player = 0
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
  } else {
    statusMessage.style.display = 'block'
    statusMessage.textContent = 'Draw'
    statusMessage.style.color = '#827986'
    statusMessage.style.backgroundColor = '#e6e6e6'
  }
}

resetButton.addEventListener('click', () => {
  if (resetButton.style.cursor == 'pointer') location.reload()
})

playerTurn()
