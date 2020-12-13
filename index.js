// const fs = require("fs");

// fs.readFile("/data.json", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

/*
Create a random number generator to fill in rgb values for each dot

Pick one of those rgb values and set it to the RGB H2

If the button is click and is not the right button
    Add text that says Incorrect! Try Again.
else
    Add text that says Correct!
*/

function generateRGBvalues() {
  const dot = {};
  const wordList = ["first", "second", "third", "fourth", "fifth", "sixth"];

  for (let i = 0; i < 6; i++) {
    dot[wordList[i]] = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
  }

  return { dot, wordList };
}

function colorDots() {
  const { dot, wordList } = generateRGBvalues();
  const randomNum = Math.floor(Math.random() * 6);
  const rgbValueArr = [];

  // Colors each dot by their respective index

  for (let i = 0; i < 6; i++) {
    const { r, g, b } = dot[wordList[i]];

    document.getElementById(
      `${wordList[i]}-dot`
    ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  }

  // Fills the RGB title values
  let rgbValue = '';

  for (let i = 0; i < 6; i++) {
    if (i === randomNum) {
      const { r, g, b } = dot[wordList[i]];
      document.getElementById("rgb-value").innerText = `RGB (${r}, ${g}, ${b})`;
      rgbValue = `rgb(${r}, ${g}, ${b})`;
    }
  }

  return rgbValue;

}

let rgbValue = colorDots();

const buttons = document.querySelectorAll("button");
console.log(buttons);
const wrapper = document.querySelector('.wrapper');
const h1 = document.createElement('h1');
wrapper.appendChild(h1);
h1.classList.add('resultMessage');

buttons.forEach((button) => {
  h1.textContent = '';
  button.addEventListener('click', () => {
    if (button.style.backgroundColor === rgbValue) {
      h1.style.border = `4px solid green`
      h1.style.fontSize = '28px';
      h1.style.color = 'green';
      h1.textContent = 'Winner!';
    } else {
      h1.style.border = `4px solid ${button.style.backgroundColor}`
      h1.style.fontSize = '28px';
      h1.style.color = 'red';
      h1.textContent = 'You Lose!';
    }
  });
  console.log(button);
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
  h1.textContent = '';
  rgbValue = colorDots();
});