
/* QUELL'ULTIMO TRENO */

// 1. Quanti KM l'utente vuole percorrere

var distanza = prompt("Salve. Grazie per aver scelto di viaggiare con noi. Dichiarare il numero dei KM che si intende percorrere");

// 2. Quanti anni di età l'utente dichiara di avere

var eta = prompt("Bene, adesso dichiarare il numero di anni compiuti.")

// 3. Definizione del prezzo base del biglietto in base ai KM percorsi

var prezzoLordo = 0.21 * distanza

// 4. Applicazione dello sconto in base all'età dichiarata

if (eta < 18) {
  prezzoNetto = prezzoLordo * 0.8
}

else if (eta >= 65) {
  prezzoNetto = prezzoLordo * 0.6
}

else {
  prezzoNetto = prezzoLordo
}

// 5. Stampa del risultato finale con il prezzo base moltiplicato per la giusta percentuale di sconto

console.log("Il tuo biglietto costa " + prezzoNetto + "€")
