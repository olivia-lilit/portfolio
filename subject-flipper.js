// function to run constantly, changing the word in site use span
let intervalId;
let i=0;
const target = document.querySelector("#siteUse");

changeContinuously();
changeWord();

function changeContinuously() {
intervalId = setInterval(changeWord, 2000);
}


// function changeWord(){
//     let classes = ["bakery", "art"];
//     if (i === classes.length - 1) {i = 0;}
//     else {i = i + 1;}
//     target.classList.toggle(classes[0])
//     target.classList.toggle(classes[1])
//     console.log(target.classList)
// } 

function changeWord(){
    let words = [" cake ", " work ", " art ", " book ", " idea "];

    if (i === words.length - 1) {i = 0;}
    else {i = i + 1;}

    target.textContent = words[i];

} 


// function toggleTransition() {
//     // removing any previous listener and
//     // adding an click event listerner on button to
//     // trigger toggleTransition method
//     target.removeEventListener("transitionend", onTransitionEnd);
//     target.addEventListener("transitionend", onTransitionEnd);
//     // removing the class for leave state
//     target.classList.remove("fade");
//   }

//   function onTransitionEnd() {
//     // removing the listener again so that it is triggered only once
//     target.removeEventListener("transitionend", onTransitionEnd);
  
//     // Finding the content and adding class again
//     const content = $text2.textContent === "Old Text" ? "New Text" : "Old Text";
//     $text2.innerHTML = content;
//     $text2.classList.add("fade");
//   }
  
//   $button2.addEventListener("click", toggleTransition);

// //   toggleTransition should be whaat is run when there is a change 
// // ontransitionend is the resting state
  