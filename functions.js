const container = document.querySelector(".container");
//catching the current div with class container so I can manipulate it

makeBoxes(16);
//create a default number of boxes

document.querySelector(".createGrid").onclick = function() {
  //captured the button and prompted to run anonymous function when clicked
  let promptAnswer =  prompt("How many columns and rows would you like?");
  //created a prompt to receive a value
  if(promptAnswer < 100) {
    makeBoxes(promptAnswer);
  } else if (promptAnswer >= 100) {
    alert("Input number must be less than 100!")
  }
}


function makeBoxes(numBoxes) {
  //function to draw the boxes
  let boxNumber = 1;
  //creating varialbe to add a number to each box
  container.replaceChildren();
  //before we start the loop - remove any existing boxes

  container.style.gridTemplateColumns = `repeat(${numBoxes}, 1fr)`;
  //setting the number of columns I would like: repeat(how many times to repeat - however many boxes are asked for since its a square, 1fr - one fractional unit)

  for(let i = 0; i < numBoxes*numBoxes; i++) {
    // loop set to achieve the square by multipling input by itself
      const box = document.createElement("div");
      // create a div
      box.classList.add("box");
      // add class "box" to id
      box.textContent = boxNumber;
      // add text in the box of the current number
      container.append(box);
      // append that box to the container
      boxNumber += 1;
      //increase the number once actions have been completed
  }
}
