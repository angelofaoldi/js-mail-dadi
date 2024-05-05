'use strict';

// UTENTE NUMERO RANDOM 1-6 
const tiraU = Math.floor((Math.random() * 6) +1);
console.log('Risultato: ', tiraU);

// COMPUTER NUMERO RANDOM 1-6

const tiraC = Math.floor((Math.random() * 6) +1);
console.log('Risultato: ', tiraC);

// VINCE IL PUNTEGGIO PIù ALTO oppure PAREGGIO

if 
(tiraU > tiraC)
{console.group('Vittoria!');}

else if
(tiraU < tiraC)
{console.log('Ha vinto il computer!');}

else
{console.log('Pareggio. Ritenta');}

