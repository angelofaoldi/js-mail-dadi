'use strict';

// CHIEDERE E-MAIL UTENTE

const utente = prompt('Inserisci qui la tua mail:');

// LISTA E-MAILS

const lista = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com', 'topolino@gmail.com', 'minnie@gmail.com'];

// STAMPARE

console.log('Accesso consentito: ', lista);
console.log('Utente: ', utente);

// VERIFICARE LISTA E-MAILS

let verifica = false;

/* poniamo la variabile falsa in partenza, in modo tale da poterla andare a sovrascrivere come vera solo successivamente al controllo che faremo avviando un ciclo di verifica for */



// CICLO DI VERIFICA FOR

for (let i = 0; i < verifica.lenght; i++)

    /* in questo modo impostiamo un punto di partenza del ciclo (0) ed impostiamo anche un limite, cioè la lunghezza (lenght) della lista di verifica. infine, dal punto 0, il controllo avverrà passo passo (i++) */

    {

        /* con questa condizione andremo a sovrascrivere il valore 'false' di partenza della variabile 'verifica' */

        if (utente === lista[i])
            {verifica = true; break;}
        
        /* con break; andiamo ad interrompere il ciclo poiché abbiamo trovato l'e-mail che coincide con la lista */

    }

// STAMPARE DUE OPZIONI
// ACCESSO CONSENTITO
// ACCESSO NEGATO

if 
(verifica === true)
{console.log('Accesso Verificato');}
else
{console.log('Accesso Negato');}











