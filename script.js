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
var arrayStudenti = [
    {
        nome: "Uto",
        cognome: "Ughi",
        eta: 21
    },
    {
        nome: "Tonio",
        cognome: "Cartonio",
        eta: 29
    },
    {
        nome: "Tania",
        cognome: "Cagnotto",
        eta: 67
    }
];

console.log(arrayStudenti);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (i = 0; i < arrayStudenti.length; i++) {
    var studenteCorrente = arrayStudenti[i];
    
    console.log(studenteCorrente.nome, studenteCorrente.cognome)
};
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nomeStudente = prompt("inserisci un nome");
var cognomeStudente = prompt("inserisci un cognome");
var etaStudente = parseInt(prompt("inserisci un'età"));

var nuovoStudente = {
    nome: capitalize(nomeStudente),
    cognome: capitalize(cognomeStudente),
    eta: etaStudente
}

function capitalize (parola) {
    var primaLettera = parola[0].toUpperCase();
    var restoParola = parola.slice(1);
    return primaLettera + restoParola;
}


arrayStudenti.push(nuovoStudente);
console.log(arrayStudenti);
