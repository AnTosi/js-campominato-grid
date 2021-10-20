// chiedo all'utente la difficoltà (magari con un bottone? in tal caso dovrò impostare un reset prima della creazione della nuova griglia)
// in base alla difficoltà scelta genero griglia quadrata con ogni cella un numero in un range
// quando l'utente clicca sulla casella (addEventListener) si colora di azzurro

//strumenti

//3 bottoni con event listener per far scegliere la difficoltà e scegliere quale ciclo innescare
//3 cicli uno per difficoltà vincolati all if - bottone cliccato per generare la griglia con innerHTML, append o insertAdjacentHTML, dovrebbero funzionare tutti e 3
//per i numeri delle celle scriverò dentro alla cella stessa l'i del ciclo nel processo di generazione
//eventListener (click, ) nelle celle per colorarle con il click

// comincio con i 3 bottoni di generazione della griglia
// ok li ho creati in HTML

let easyClick = document.getElementById("buttOne").addEventListener("click", function () {
    console.log("ez");
  }); 

let mediumClick = document.getElementById("buttTwo").addEventListener("click", function () {
    console.log("meh");
}); 

let hardClick = document.getElementById("buttThree").addEventListener("click", function () {
    console.log("ora si comincia a ragionare");
}); 

