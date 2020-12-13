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

  for (let i = 0; i < 6; i++) {
    if (i === randomNum) {
      const { r, g, b } = dot[wordList[i]];
      document.getElementById("rgb-value").innerText = `RGB (${r}, ${g}, ${b})`;
    }
  }
}

colorDots();

const buttons = document.querySelectorAll("button");
console.log(buttons);

buttons.forEach((button) => {
  // button.addEventListener('click', () => {
  // });
  console.log(button);
});
