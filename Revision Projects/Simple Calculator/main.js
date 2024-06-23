// Function to get a DOM element
function getElement(selector) {
  return document.querySelector(selector)
}

// Function to set up the operation
function setupOperation(operationType, containerClass) {
  const inputOne = getElement(`${containerClass} .input-1`)
  const inputTwo = getElement(`${containerClass} .input-2`)
  const button = getElement(`${containerClass} button`)
  const result = getElement(`${containerClass} .res`)

  button.addEventListener('click', () => {
    const valueOne = Number(inputOne.value)
    const valueTwo = Number(inputTwo.value)
    let operationResult

    switch (operationType) {
      case 'sum':
        operationResult = valueOne + valueTwo
        break
      case 'sub':
        operationResult = valueOne - valueTwo
        break
      case 'div':
        operationResult = valueOne / valueTwo
        break
      case 'mul':
        operationResult = valueOne * valueTwo
        break
    }

    result.innerHTML = operationResult
  })
}

// Set up operations
setupOperation('sum', '.sum')
setupOperation('sub', '.sub')
setupOperation('div', '.div')
setupOperation('mul', '.mul')

// /* Summation Code */
// let sumInputOne = document.querySelector('.sum .sum-inputs .input-1')
// let sumInputTwo = document.querySelector('.sum .sum-inputs .input-2')
// let sumBtn = document.querySelector('.sum button')
// let sumResult = document.querySelector('.sum .sum-result .res')

// /* Substraction Code */
// let subInputOne = document.querySelector('.sub .sub-inputs .input-1')
// let subInputTwo = document.querySelector('.sub .sub-inputs .input-2')
// let subBtn = document.querySelector('.sub button')
// let subResult = document.querySelector('.sub .sub-result .res')

// /* Division Code */
// let divInputOne = document.querySelector('.div .div-inputs .input-1')
// let divInputTwo = document.querySelector('.div .div-inputs .input-2')
// let divBtn = document.querySelector('.div button')
// let divResult = document.querySelector('.div .div-result .res')

// /* Multiplication Code */
// let mulInputOne = document.querySelector('.mul .mul-inputs .input-1')
// let mulInputTwo = document.querySelector('.mul .mul-inputs .input-2')
// let mulBtn = document.querySelector('.mul button')
// let mulResult = document.querySelector('.mul .mul-result .res')

// function calculateResult(operationType) {
//   if (operationType === 'sum') {
//     sumResult.innerHTML = Number(sumInputOne.value) + Number(sumInputTwo.value)
//   } else if (operationType === 'sub') {
//     subResult.innerHTML = Number(subInputOne.value) - Number(subInputTwo.value)
//   } else if (operationType === 'div') {
//     divResult.innerHTML = Number(divInputOne.value) / Number(divInputTwo.value)
//   } else {
//     mulResult.innerHTML = Number(mulInputOne.value) * Number(mulInputTwo.value)
//   }
// }

// sumBtn.addEventListener('click', () => calculateResult('sum'))
// subBtn.addEventListener('click', () => calculateResult('sub'))
// divBtn.addEventListener('click', () => calculateResult('div'))
// mulBtn.addEventListener('click', () => calculateResult('mul'))
