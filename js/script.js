
/* QUELL'ULTIMO TRENO */

// 1. Quanti KM l'utente vuole percorrere

var distanza = prompt("Salve e grazie per aver scelto di viaggiare con noi! Si prega di dichiarare il numero di KM relativi alla tratta che si intende percorrere.");

var controllo = true;

if (isNaN(distanza)) {
  controllo = false;
  document.getElementById("main-container").innerHTML = "<h1>ATTENZIONE!</h1><br><h2>Si prega di scrivere soltanto un valore numerico: ricaricare la pagina per calcolare il prezzo del Vostro biglietto.</h2>";
}

// 2. Quanti anni di età l'utente dichiara di avere

if (controllo) {
  var eta = prompt("Bene, adesso dichiarare il numero di anni compiuti.");

  if (isNaN(eta)) {
    controllo = false;
      document.getElementById("main-container").innerHTML = "<h1>ATTENZIONE!</h1><br><h2>Si prega di scrivere soltanto un valore numerico: ricaricare la pagina per calcolare il prezzo del Vostro biglietto.</h2>";
  }

}

// 3. Definizione del prezzo base del biglietto in base ai KM percorsi

if (controllo){
  var prezzoLordo = 0.21 * distanza;
  // 4. Applicazione dello sconto in base all'età dichiarata

  if (eta < 18) {
    prezzoNetto = prezzoLordo * 0.8;
  }

  else if (eta >= 65) {
    prezzoNetto = prezzoLordo * 0.6;
  }

  else {
    prezzoNetto = prezzoLordo;
  }

  // 5. Stampa del risultato finale con il prezzo base moltiplicato per la giusta percentuale di sconto

  document.getElementById("prezzo-netto").innerHTML = prezzoNetto + "€";

}
