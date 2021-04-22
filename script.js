// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
console.log('test')
var studente = {
    nome: 'Luca',
    cognome: 'rossi',
    eta: 28
}
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
    console.log(key, studente[key]);
}
// Creare un array di oggetti di studenti.
var arrayStudenti = [];
var studenteUno = {
    nome: Uto,
    cognome: Ughi,
    eta: 21
};

var studenteDue = {
    nome: Tonio,
    cognome: Cartonio,
    eta: 22
}

var studenteTre = {
    nome: Tania,
    cognome: Cagnotto,
    eta: 22
}

for (i = 0; i < 3; i++){
    arrayStudenti.push()
}
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.


// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
// function nuovoStudente (){
// for (i = 0; i < 3; i++) {
//     nuovOggettoStud = prompt('Inserisci nome studente');
//         if(!nuovoOggettoStud){

//         } else {
//             alert('Nome inserito non valido')
//         }

//     nuovOggettoStud = prompt('Inserisci cognome studente');
//     nuovOggettoStud = prompt('Inserisci età studente');
// }
// }