/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(()=> {
    let number = 155;

    if (number > 0 && number < 100) {
        number % 3 === 0 && number % 5 === 0 ? console.log("fizzbuz")
        : number % 3 === 0 ? console.log("fizz")
        : number % 5 === 0 ? console.log("buzz")
        : undefined;
    } else {
        console.log(number)}
})();
