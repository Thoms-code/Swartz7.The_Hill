/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
// const randomColor = require('randomcolor');
let btnScript = document.querySelector("#run");
let body = document.querySelector("body");

let colors = [
    "blue",
    "green",
    "yellow",
    "red",
    "purple"
];
(() => {
    let random = Math.floor(Math.random() * colors.length);
    btnScript.addEventListener("click", () => {
        body.style.backgroundColor = colors[random];
    })
})();
