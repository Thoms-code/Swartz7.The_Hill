/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
    let opOne = Number(document.querySelector("#op-one").value);
    let opTwo = Number(document.querySelector("#op-two").value);
    //take value
    document.getElementById("addition").addEventListener("click", () => {
       alert(opOne + opTwo);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        alert(opOne - opTwo);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        alert(opOne * opTwo);
    });

    document.getElementById("division").addEventListener("click", () => {
        alert(opOne / opTwo);
    });
})();
