// Genera 16 numeri bomba (non duplicati) in un array da 1 a 100 

var numeriRandomPc = [];

var numeriMassimi = 100;
var numeroBombe = 16;

while ( numeriRandomPc.length < numeroBombe ) {
    var randomNumber = generaBomba(numeriMassimi);

    if ( !numeriRandomPc.includes(randomNumber) ) {
        numeriRandomPc.push(randomNumber);
    }
}

console.log(numeriRandomPc);

// creare una variabile array con i numeri non-bomba inseriti dall'utente
var numeriUtenteArray = [];

// var flag con valore booleano che indica se è stata trovata una bomba
var bombaTrovata = false;


// ciclo while (la bomba non viene beccata && il numero degli elementi inseriti dall'utente è inferiore a 84)
  // chiedere il numero all'utente
  //
  // if se è una bomba cambio valore alla var flag
  // 
  // else il numero se non è gia stato inserito viene pushato nell'array dei numeri inseriti 
while ( numeriUtenteArray.length < (numeriMassimi - numeroBombe) && bombaTrovata == false) {
      
     var numero = parseInt(prompt('inserisci un numero'));

     var isNumeroBomba = isBombaTrovata(numero, numeriRandomPc);

     if ( isNumeroBomba == false) {

        if (numeriUtenteArray.includes(numero) == false) {

            numeriUtenteArray.push(numero);
        } else {
            alert('il numero è già presente');
        }

     } else {
         alert('Hai trovato una bomba');
         bombaTrovata = true;
     }
}

// Stampo la lunghezza dell'array dei numeri corretti

function generaBomba(max) {
  return Math.floor(Math.random() * max) + 1;
}


function isBombaTrovata (numeroInserito, listaBombe) {
    var found = false;

    for ( var i = 0; i < listaBombe.length; i++) {

        var numeroArray = listaBombe[i];

        if ( numeroInserito == numeroArray) {
            found = true;
        }

    }

    return found;
}

// esito della giocata 
var totaleNumeriInseriti = numeriUtenteArray.length;

if (bombaTrovata) {
   alert('Hai perso! Punteggio : ' + totaleNumeriInseriti);
} else {
    alert('hai vinto! Punteggio : ' + totaleNumeriInseriti);
}