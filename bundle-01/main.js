/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 1.1 : questo codice stampa a monitor la variabile i attraverso un ciclo.

// 1.2 : la sintassi del codice è corretta.

/* 1.3 : sono presenti errori logici, in questo caso il ciclo non viene mai eseguito
 perchè i è inizializzata a 0 e il ciclo viene eseguito finchè i è maggiore di 5.
*/

// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

/* 2.1 : Questo codice crea una funzione che passatogli come argomento un numero restituirà un numero diverso a seconda dei casi.
Se il numero inserito come argomento è pari il risultato restituito sarà la somma tra questo numero e 5.
Nel caso in cui il numero passato come argomento fosse dispari la funzione restituirà il numero stesso.*/

// 2.2 : La sintassi del codice è errata, infatti per confrontare due numeri l'operatore corretto è '===' e non '=' che invece serve per gli assegnamenti.

// 2.3 : Nel codice non sono presenti errori logici.

// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// 3.1 : Questo codice crea una funzione che se richiamata stamperà in console i primi 5 numeri im ordine crescente partendo da 0 (0, 1, 2, 3, 4)

/* 3.2 : La sintassi del codice è errata, la sintassi corretta per un ciclo for è:

for (let i = 0; i < 5; i++) {//cerano le virgole
        console.log(i);
    }

bisogna utilizzare ';' e non ',' per separare inizializzazione, condizione e incremento/decremento */

// 3.3 : Nel codice non sono presenti errori logici.

// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {//un punto e virgola di troppo
        if (numbers[i] % 2 === 0){//uguale e punto e virgola {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

// 4.1 : Questo codice crea una funzione che restituisce i numeri pari dell'array 'numbers'

/* 4.2 : Questo codice presenta diversi errori di sintassi:
- Dopo l'incremento (i++) non va inserito ';'.
- Dopo la condizione if non va messo ';' ma direttamente '{'.
- Nella condizione del if per confrontare due numeri l'operatore corretto è '===' e non '=' che invece serve per gli assegnamenti.
*/

/* 4.3 errori logici:
- nella condizione if non devo confrontare numbers (è un array!!!), ma il suo cintenuto in posizione 'i', ossia numbers[i].
- Dentro evenNumbers non devo pushare i ma numbers[i].
-il return non deve essere dentro al ciclo for ma fuori.
- La condizione dentro al ciclo for deve essere 'i < numers.length' non 'i < numbers.length - 1' altrimenti non prendiamo l'ultimo elemento ossia '8'. */
