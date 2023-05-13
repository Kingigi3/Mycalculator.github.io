document.addEventListener("DOMContentLoaded", (event) => {
  let toggle = document.querySelector(".toggle");
  let label = document.getElementById("label");
  let state = 0;

  let body = document.querySelector("body");
  let calculator = document.querySelector(".calculator");
  let buttons = calculator.querySelectorAll(".button");
  let screen = document.querySelector(".screen");
  let buttonbig2 = document.querySelector(".buttonbig2");
  let buttonbig = document.querySelector(".buttonbig");
  let button1 = document.querySelector(".button1");
  let output = document.querySelector(".output");
  let inside = document.querySelector(".Inside");
  let numbers = document.querySelector(".numbers");
  let title = document.querySelector(".title");
  let button = document.querySelector("#label");

  toggle.addEventListener("click", () => {
    state = (state + 1) % 3;
    if (state === 0) {
      label.style.left = "5px";
      body.style.backgroundColor = "";
      calculator.style.backgroundColor = "";
      screen.style.backgroundColor = "";
      buttonbig2.style.backgroundColor = "";
      buttonbig.style.backgroundColor = "";
      button1.style.backgroundColor = "";
      button.style.backgroundColor = "rgb(255, 137, 49)";
      buttonbig2.style.boxShadow = "0px 3px 2px rgb(105, 42, 50)";
      output.style.color = "";
      buttonbig.style.boxShadow = "0px 3px 2px rgb(65, 80, 121)";
      inside.style.color = "";
      numbers.style.color = "";
      title.style.color = "";
      button.style.color = "";
      button1.style.boxShadow = "0px 3px 2px rgba(65, 78, 113)";
      buttons.forEach((button) => {
        button.style.backgroundColor = "rgb(234, 227, 219)";
        button.style.color = "black";
        button.style.boxShadow = "0px 3px 0px rgba(179, 161, 149)";
      });
    }
    if (state === 1) {
      label.style.left = "30px";
      body.style.backgroundColor = "rgb(230, 230, 230)";
      calculator.style.backgroundColor = "rgb(211, 205, 205)";
      screen.style.backgroundColor = "rgb(238, 238, 238)";
      buttonbig2.style.backgroundColor = "rgb(255, 139, 56)";
      buttonbig2.style.boxShadow = "0px 3px 2px rgb(120, 67, 25)";
      buttonbig.style.backgroundColor = "rgb(98, 181, 189)";
      button1.style.backgroundColor = "rgb(98, 181, 189)";
      buttonbig.style.boxShadow = "0px 3px 2px rgb(30, 97, 105)";
      button.style.backgroundColor = "rgb(255, 137, 49)";
      output.style.color = "black";
      inside.style.color = "black";
      numbers.style.color = "black";
      title.style.color = "black";
      button.style.color = "black";
      buttons.forEach((button) => {
        button.style.backgroundColor = "rgb(234, 227, 219)";
        button.style.color = "black";
        button.style.boxShadow = "0px 3px 0px rgba(179, 161, 149)";
      });
    }

    if (state === 2) {
      label.style.left = "55px";
      body.style.backgroundColor = "rgb(23, 6, 42)";
      calculator.style.backgroundColor = "rgb(30, 8, 54)";
      screen.style.backgroundColor = "rgb(30, 8, 54)";
      buttonbig2.style.backgroundColor = "rgb(148, 255, 248)";
      buttonbig.style.backgroundColor = "rgb(134, 49, 176)";
      button1.style.backgroundColor = "rgb(132, 50, 174)";
      button1.style.boxShadow = "0px 3px 2px rgb(189, 20, 243)";
      button.style.backgroundColor = "rgb(149, 252, 248)";
      output.style.color = "rgb(243, 215, 53)";
      inside.style.color = "rgb(243, 215, 53)";
      numbers.style.color = "rgb(243, 215, 53)";
      title.style.color = "rgb(243, 215, 53)";
      buttonbig2.style.boxShadow = "0px 3px 2px rgb(136, 235, 240)";
      buttonbig.style.boxShadow = "0px 3px 2px rgba(190, 21, 244)";
      buttons.forEach((button) => {
        button.style.backgroundColor = "rgb(51, 27, 77)";
        button.style.color = "rgb(255, 224, 64)";
        button.style.boxShadow = "0px 3px 2px rgba(123, 35, 147)";
      });
    }
  });
});

//calculator logic fully initialized
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll(".button");
const deleteButton = document.querySelector("#deleteButton");
const equalsButton = document.querySelector(".buttonbig2");
const operatorButtons = document.querySelectorAll(".operator");
const allClearButton = document.querySelector(".buttonbig");
const screen = document.querySelector(".output");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => appendNumber(button.textContent));
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => setOperation(button.textContent));
});

equalsButton.addEventListener("click", evaluate);
allClearButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteNumber);

function appendNumber(number) {
  if (screen.textContent === "0" || shouldResetScreen) resetScreen();
  screen.textContent += number;
}

function setOperation(operator) {
  if (currentOperation !== null) evaluate();
  firstOperand = parseFloat(screen.textContent);
  currentOperation = operator;
  shouldResetScreen = true;
}

function evaluate() {
  if (currentOperation === null || shouldResetScreen) return;
  secondOperand = parseFloat(screen.textContent);
  screen.textContent = String(operate(currentOperation, firstOperand, secondOperand));
  currentOperation = null;
}

function reset() {
  screen.textContent = "0";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
}

function resetScreen() {
  screen.textContent = "";
  shouldResetScreen = false;
}

function deleteNumber() {
  if (screen.textContent.length === 1) {
    screen.textContent = "0";
  } else {
    screen.textContent = screen.textContent.slice(0, -1);
  }
  shouldResetScreen = false;
}

// Calculation Functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  let result = 0;
  switch (operator) {
    case "+":
      result = add(a, b);
      break;
    case "÷":
      if (b === 0) return "Error";
      else result = divide(a, b);
      break;
    case "-":
      result = subtract(a, b);
      break;
    case "*":
      result = multiply(a, b);
      break;
    case "/":
      if (b === 0) return "Error";
      else result = divide(a, b);
      break;
    default:
      return null;
  }
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

