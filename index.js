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

function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function generateRGBvalues() {
  const dot = {};
  const wordList = ["first", "second", "third", "fourth", "fifth", "sixth"];

  for (let i = 0; i < 6; i++) {
    dot[wordList[i]] = {
      r: randomNumber(),
      g: randomNumber(),
      b: randomNumber(),
    };
  }

  return { dot, wordList };
}

const { dot, wordList } = generateRGBvalues();

for (let i = 0; i < 6; i++) {
  const { r, g, b } = dot[wordList[i]];
  document.getElementById(
    `${wordList[i]}-dot`
  ).style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}
