const container = document.querySelector(".container");
//catching the current div with class container so I can manipulate it

container.addEventListener('mouseover', function (event) {
  //attaching event listener to parent for ease of use
  if (event.target.matches('.box')) {
    //if the item in question is box
    event.target.classList.add('highlight');
    //add highlight class to it
  }
})

makeBoxes(16);
//create a default number of boxes

document.querySelector(".createGrid").onclick = function() {
  //captured the button and prompted to run anonymous function when clicked
  let promptAnswer =  prompt("How many columns and rows would you like?");
  //created a prompt to receive a value
  if(promptAnswer < 100) {
    //limit of 100 added due to Project details
    makeBoxes(promptAnswer);
  } else if (promptAnswer >= 100) {
    //if above limit, let the user know with an alert
    alert("Input number must be less than 100!")
  }
}

document.querySelector(".removeHighlight").onclick = function() {
  //captured the button and prompted to run anonymous function when clicked
  const highlightedBoxes = document.querySelectorAll(".box.highlight");
  //creating selector for items that have been highlighted
  
  highlightedBoxes.forEach((item) => {
    //looping through each item selected
      if (item !== null) {
        //if the item exists
        item.classList.remove("highlight")
        //remove the highlighted class from it
      }
    } 
  )
}

function makeBoxes(numBoxes) {
  //function to draw the boxes
  let boxNumber = 1;
  //creating variable to add a number to each box
  container.replaceChildren();
  //before we start the loop - remove any existing boxes

  container.style.gridTemplateColumns = `repeat(${numBoxes}, 1fr)`;
  //setting the number of columns I would like: repeat(how many times to repeat - however many boxes are asked for since its a square, 1fr - one fractional unit)

  for(let i = 0; i < numBoxes*numBoxes; i++) {
    // loop set to achieve the square by multipling input by itself
      const square = document.createElement("div");
      // create a div
      square.classList.add("box");
      // add class "box" to it
      container.append(square);
      // append that div to the container
      boxNumber += 1;
      //increase the number once actions have been completed
  }
}

