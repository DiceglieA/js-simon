// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
const simonNumbers = []
let simons = document.getElementById('simon-numbers')


for (let i = 0; i < 5; i++) {
    simonNumber = randomNumb(1, 100) 
    if (simonNumbers.includes(simonNumber)){
        i++
    }else {
        simonNumbers.push(simonNumber)
    }
}





function randomNumb(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}