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
    let age = prompt("Donnez-votre age") *1;
    let sex = prompt("indiquez votre sexe");
    let city = prompt("Indiquez votre ville");

    const showPrompt = () => {
        return prompt(`Votre Age : ${age} \nVotre Sexe : ${sex} \nVotre Ville : ${city} \n\nEst-ce correct ?`);
    }

    switch (showPrompt()) {
        case "oui" :
            alert("Ok");
            break;
        default :
            showPrompt();
    }

})();
