/**************************************************************** 
 * Compteur de largeur et détection orientation - NE PAS MODIFIER
*****************************************************************/
window.onload = init;
window.onresize = init;
var largeur = document.querySelector('#largeur');
var sensEcran = document.querySelector('#orientation');


function init() {
    largeur.textContent = window.innerWidth; 
    if (window.innerHeight  > window.innerWidth) {
        sensEcran.textContent = "Portrait";  
    } else {
        sensEcran.textContent = "Paysage";  
    }
}

