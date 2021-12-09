/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
const cars = [
    {
        manufacturer: 'Ford',
        model: 'Fiesta',
        type: 'diesel'
    },
    {
        manufacturer: 'Audi',
        model: 'A1',
        type: 'benzina'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Golf',
        type: 'Benzina'
    },
    {
        manufacturer: 'Fiat',
        model: 'Panda',
        type: 'metano'
    },
    {
        manufacturer: 'Fiat',
        model: 'Multipla',
        type: 'GPL'
    },
    {
        manufacturer: 'Tesla',
        model: 'Model 3',
        type: 'elettrico'
    },
    {
        manufacturer: 'Volkswagen',
        model: 'Polo',
        type: 'benzina'
    },
    {
        manufacturer: 'Ford',
        model: 'Kuga',
        type: 'Diesel'
    },
    {
        manufacturer: 'Seat',
        model: 'Ibiza',
        type: 'metano'
    }, //mancava una virgola
    {
        manufacturer: 'Audi',
        model: 'R8',
        type: 'Benzina'
    },
];

const gasolineCars = cars.filter( auto => {
    if (auto.type.toLowerCase() === 'benzina')
    return auto;//una parentesi di troppo
}); // sbagliata la sintassi di filter

const dieselCars = cars.filter( (auto) => {
    if (auto.type.toLowerCase() === 'diesel') return auto;
});

const otherCars = cars.filter( (auto) => {
    if (auto.type.toLowerCase() !== 'benzina' && auto.type.toLowerCase() !== 'diesel') return auto; // && non \\
});

console.log('Auto a benzina');
console.log('*******************************');
console.log(gasolineCars);

console.log('Auto a diesel');
console.log('*******************************');
console.log(dieselCars);

console.log('Tutte le altre auto');
console.log(otherCars);

/* 1.1 : Questo codice inizializzato un array di oggetti(auto) tramite il metodo filter stampa array diversi suddividendo le auto per carburante utilizzato (benzina, diesel, altro). 
*/

/* 1.2 : sono presenti diversi errori di sintassi:
- prima di dichiarare un nuovo oggetto in un array bisogna utilizzare ',' dopo aver chiuso con '{' l'ultimo oggetto dichiarato.

- il metodo filterf prevede l'utilizzo di un return e di un if.

*/

/* 1.3 : sono presentik anche errori logici:
prima di confrontare 'auto.type' dobbiamo trasformarlo utilizzando il metodo toLowerCase() in modo da superare problemi riguardanti le eventuali maiuscole presenti nell'oggetto.
*/


