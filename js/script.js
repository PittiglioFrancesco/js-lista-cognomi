// Mail

// Chiedi all’utente la sua email,
//  2.  controlla che sia nella lista di chi può accedere,
//  3.  stampa un messaggio appropriato sull’esito del controllo.

// Lista Cognomi:

// chiedi all’utente il cognome
// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// Bonus: (da fare solo dopo aver concluso tutto) Trovate un modo per trasformare in maiuscolo la prima lettera 
// del cognome inserito dall'utente e tutto il resto in minuscolo.


// input

var email = prompt("Inserisci la tua e-mail");
console.log(email);

var cognome = prompt("Inserisci il tuo cognome");
console.log(cognome);

var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

//controllo accesso

for (var i = 0; i < 4; i++){

    if (cognome == cognomi[i]){
        var controllo = "yes";
    }

}

if (controllo == "yes"){

    alert("Il suo cognome è nella lista degli autorizzati.");

} else {

    alert("Il suo cognome non è nella lista degli autorizzati ma è stato appena aggiunto.");

}