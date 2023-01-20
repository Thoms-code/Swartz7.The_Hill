/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let result;
    do {
        let age = prompt("Donnez-votre age") * 1;
        let sex = prompt("indiquez votre sexe");
        let city = prompt("Indiquez votre ville");
        result = prompt(`Votre Age : ${age} \nVotre Sexe : ${sex} \nVotre Ville : ${city} \n\nEst-ce correct ? (oui/non)`);
    } while (result !== "oui");
})();
