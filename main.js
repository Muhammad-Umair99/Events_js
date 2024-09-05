//WHAT IS EVENT
//THE CHANGE IN THE STATE OF AN OBJECT IS KNOWN AS AN EVENT
//1)MOUSE EVENT
//2)KEYBOARD EVENTS
//3)FORMS EVENTS (SUBMIT ETC)
//4)PRINT EVENT


// let out = document.querySelector("#btn")

// let currMode = "light"

// out.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark"
//         document.querySelector("body").style.background = "black"
//     } else {
//         currMode = "light"
//         document.querySelector("body").style.background = "gray"

//     }
//     console.log(currMode);
// })



// let but = document.querySelector("#btn");
// let currMode = "light";

// but.addEventListener("click", () => {
//     if (currMode === "light") {
//         currMode = "dark";
//         console.log("Switched to dark mode");
//         document.body.classList.add("dark-mode");
//         document.body.classList.remove("light-mode");
//     } else {
//         currMode = "light";
//         console.log("Switched to light mode");
//         document.body.classList.add("light-mode");
//         document.body.classList.remove("dark-mode");
//     }
// });




// Let's see how it works with a simple example:

// Suppose number is 3.
//1) Math.random() might give 0.7.
//2) Multiplying by 4 (because 3 + 1 = 4), we get 0.7 * 4 = 2.8.
//3) Math.floor(2.8) rounds it down to 2.
//4) So, calling random(3) might give you 0, 1, 2, or 3, each equally likely.

// Visual Summary
// 1 )Generate a random decimal: 0.234
// 2 ) Scale it up: 0.234 * (number + 1) → 0.234 * 4 = 0.936
// 3 ) Round it down: Math.floor(0.936) → 0

// const btn = document.querySelector("button");

// function random(number) {
//   return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });