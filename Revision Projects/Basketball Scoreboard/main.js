// Select DOM elements
const team1 = document.querySelector('.team-1 .score')
const team2 = document.querySelector('.team-2 .score')
const add1 = document.querySelector('.team-1 .buttons .add-1')
const add2 = document.querySelector('.team-1 .buttons .add-2')
const add3 = document.querySelector('.team-1 .buttons .add-3')
const add4 = document.querySelector('.team-2 .buttons .add-1')
const add5 = document.querySelector('.team-2 .buttons .add-2')
const add6 = document.querySelector('.team-2 .buttons .add-3')

// Function to update score
function updateScore(score, target) {
  target.innerText = score
}

// Add 1 point to team 1
add1.addEventListener('click', () => {
  updateScore(parseInt(team1.innerText) + 1, team1)
})

// Add 2 points to team 1
add2.addEventListener('click', () => {
  updateScore(parseInt(team1.innerText) + 2, team1)
})

// Add 3 points to team 1
add3.addEventListener('click', () => {
  updateScore(parseInt(team1.innerText) + 3, team1)
})

// Add 1 point to team 2
add4.addEventListener('click', () => {
  updateScore(parseInt(team2.innerText) + 1, team2)
})

// Add 2 points to team 2
add5.addEventListener('click', () => {
  updateScore(parseInt(team2.innerText) + 2, team2)
})

// Add 3 points to team 2
add6.addEventListener('click', () => {
  updateScore(parseInt(team2.innerText) + 3, team2)
})

// Initial score
team1.innerText = 0
team2.innerText = 0
