let displayValue = '';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function appendNumber(number) {
  if (displayValue === '0') displayValue = '';
  displayValue += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentOperation !== null) calculate();
  firstOperand = parseFloat(displayValue);
  currentOperation = operation;
  displayValue = '';
}

function calculate() {
  if (currentOperation === null || displayValue === '') return;
  secondOperand = parseFloat(displayValue);

  switch (currentOperation) {
    case '+':
      displayValue = (firstOperand + secondOperand).toString();
      break;
    case '-':
      displayValue = (firstOperand - secondOperand).toString();
      break;
    case '*':
      displayValue = (firstOperand * secondOperand).toString();
      break;
    case '/':
      displayValue = secondOperand === 0 ? 'Error' : (firstOperand / secondOperand).toString();
      break;
  }

  currentOperation = null;
  firstOperand = null;
  secondOperand = null;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue;
}