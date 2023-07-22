'use strict';
// Always try to improve our coding
// To get users letter A=20 poäng B=17.5 poäng C=15 poäng D=12.5 poäng E=10 poäng F=0 poäng
// When a click of F button get a score = 0 and then take its value and add it too the A1
// Do the same with the F button to all the other buttons

const grades = {
  F: 0,
  E: 10,
  D: 12.5,
  C: 15,
  B: 17.5,
  A: 20,
};
// Get the score element
let scoreElement = document.querySelector('.A2');
let FgradeElement = document.getElementsByClassName('.F');
let EgradeElement = document.querySelectorAll('.E');
let DgradeElement = document.querySelectorAll('.D');
let CgradeElement = document.querySelectorAll('.C');
let BgradeElement = document.querySelectorAll('.B');
let AgradeElement = document.querySelectorAll('.A');
let ResetElement = document.querySelector('#ResetBtn');

// Function to handle click events

// Get the score element

// Function to handle click events

let clickEvent = value => {
  return () => {
    let currentScore = parseFloat(scoreElement.textContent);
    let newScore = currentScore + value;
    scoreElement.textContent = newScore;
  };
};

// Attach event listeners to buttons
for (let grade in grades) {
  let elements = document.querySelectorAll('.' + grade);
  elements.forEach(item => {
    item.addEventListener('click', clickEvent(grades[grade]));
  });
}

ResetElement.addEventListener('click', function () {
  scoreElement.textContent = 0;
});
