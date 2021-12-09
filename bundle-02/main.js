/*******************************************************************************
​
    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = ''; //era const ma doveva essere let

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

/* 1.1 : questo codice crea una funzione che confrontando l'età di un ipotetico utente con il numero 18 stampa messaggi diversi a seconda se l'utente è maggiorenne o minorenne. */

// 1.2 : non ci sono errori di sintassi

/* 1.3 : sono presenti errori logici:
 - la variabile message non può essere 'const' perchè deve variare, va inizializata come 'let' */

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`); //length non lenght!!
}
printColorsNumber();

/* 2.1 : quosto codice crea una funzione che inizializza un array di stringhe di colori e stampa la frase 'nella mia palette ci sono x colori!' 
dove 'x' sta per il numero di colori presenti nel array. */

/* 2.2 : è presente un unico errore di sintassi, il metodo che richiama la lunghezza in questo caso del array si scrive 'length' non 'lenght'! */

// 2.3 : non sono presenti errori logici.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = parseInt(userNumber) + 12; //manca parseInt

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

/* 3.1 : questop codice crea una funzione che chiede all'utente di inserire un numero, a questo numero viene poi aggiunto 12 tramite un operazione di somma.
*/

// 3.2 : non sono presenti errori di sintassi.

/* 3.3 : è presente un errore di logica, il '+' non indica l'operatore di somma se uno dei due operandi è una stringa, ma indica la concatenazione. 
Di conseguenza prima di svolgere l'operazione dobbiamo trasformare il dato inserito dall'utente in un numero tramite il metodo 'parseInt()'.
*/



// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess(); //true e false sono valori booleani, non stringhe di conseguenza non devono essere tra apici.

/* 4.1 : Questo codice crea una funzione che inizializza un array di stringhe/email e chiede all'utente di inserire una stringa. 
Confrontandole tramite l'utilizzo di una variabile booleana di verifica determina se all'utente è consentito l'accesso o meno. */

/* 4.2 : sono presenti errori di sintassi : true e false sono valori booleani, non stringhe di conseguenza non devono essere tra apici. 
'grantAccess' è pensata per essere una variabile booleana. */

// 4.3 : non ci sono errori logici.

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    

    for (let i = 0; i < addresses.length; i++) {
     const email = addresses[i];
     let grantAccess = false;
      if (userEmail.length > 5) {
            
        if (email === userEmail) {
        grantAccess = true;            
            
      }
        
    }

    if (grantAccess) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
}
checkAccessImproved();

/* 5.1 : Questo codice crea una funzione che inizializza un array di stringhe/email e chiede all'utente di inserire una stringa. 
Confrontandole tramite l'utilizzo di una variabile booleana di verifica determina se all'utente è consentito l'accesso o meno. */

/* 5.2 : sono presenti errori di sintassi : true e false sono valori booleani, non stringhe di conseguenza non devono essere tra apici. 
'grantAccess' è pensata per essere una variabile booleana. */

/* 5.3 : la variabile booleana 'grantAccess' va dichiarata all'interno del ciclo for,
altrimenti una volta diventata true rimarrà tale anche per i confronti successivi causando un errore logico.
*/


























