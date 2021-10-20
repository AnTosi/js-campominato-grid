// chiedo all'utente la difficoltà (magari con un bottone? in tal caso dovrò impostare un reset prima della creazione della nuova griglia)
// in base alla difficoltà scelta genero griglia quadrata con ogni cella un numero in un range
// quando l'utente clicca sulla casella (addEventListener) si colora di azzurro

//strumenti

//3 bottoni con event listener per far scegliere la difficoltà e scegliere quale ciclo innescare
//3 cicli uno per difficoltà vincolati all if - bottone cliccato per generare la griglia con innerHTML, append o insertAdjacentHTML, dovrebbero funzionare tutti e 3
//essendo 3 cicli uguali farò una funzione
//per i numeri delle celle scriverò dentro alla cella stessa l'i del ciclo nel processo di generazione
//eventListener (click, ) nelle celle per colorarle con il click

// comincio con i 3 bottoni di generazione della griglia
// ok li ho creati in HTML
const easyN = 49;
const mediumN = 81;
const hardN = 100;

const easy = "easy";
const medium = "medium";
const hard = "hard";
let choice = "";


// l'event listener  per qualche strano motivo non mi prende gli argomenti e/o non accetta la funzione, provo con return true e if sotto
//non funziona, probabilmente con il prompt mi semplificherei la vita di molto
let easyClick = document.getElementById("buttOne").addEventListener("click", function () {
    let choice = "ez";
}); 

let mediumClick = document.getElementById("buttTwo").addEventListener("click", function () {
    return medium;
}); 

let hardClick = document.getElementById("buttThree").addEventListener("click", function () {
    return hard;
}); 



//ora creo funzione, prima funzione normale poi se funziona inserisco anche reset

function generateGrid (difficulty, cellN) {
    for (let i = 1; i < cellN; i++) {
        document.querySelector(".container").insertAdjacentHTML("beforeend", `<div class= "cell" + ${difficulty}">${i}</div>`);
    }
}



// ho riscontrato problemi a inserire la funzione nell'event listener (non mi prende i parametri), ora provo a mettere gli if: 

// function generateGrid (easy, easyN);

// SONO STATO PIù DI UN'ORA BLOCCATO PERCHé IL DEBUGGER MI DICEVA CHE MANCAVA UNA GRAFFA E INVECE AVEVO SCRITTO MALE L'ADJACENT HTML

//ora provo a inserire il ciclo for testato nell'event listener tramite la funzione
    // for (let i = 1; i < easyN + 1; i++) {
    //     document.querySelector(".container").insertAdjacentHTML("beforeend", `<div class= "cell ${easy}">${i}</div>`);
    // }

    if (easy) generateGrid(easy, easyN);
