const fs = require("fs");

fs.readFile("/data.json", (err, data) => {
  if (err) throw err;
  console.log(data);
});

/*
Create a random number generator to fill in rgb values for each dot

Pick one of those rgb values and set it to the RGB H2

If the button is click and is not the right button
    Add text that says Incorrect! Try Again.
else
    Add text that says Correct!
*/
