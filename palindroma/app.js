console.log('ciao')

/* consegna: Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma. Questa funzione deve ricevere come input la parola inserita dall’utente e ritornare true se la parola è palindroma e false se la parola non è palindroma */


// chiedo all'utente di inserite una parola:
const parola = prompt('inserisci una parola');
console.log("La parola inserita dall'utente è: " + parola)

const risultato = palindroma(parola) // true|false

// creo una condizione per la quale SE il risultato è true la parola è palindroma, Altrimenti false --> la parola non è palindroma:

    if(risultato === true){
        console.log('la parola ' + parola + ' è palindroma')
    } else{
        console.log('la parola ' + parola + ' non è palindroma') 
    }

// dichiaro la funzione palindroma:
function palindroma(text){  // text sarebbe parola ma non posso mettere una variabile come paramentro della funzione
    console.log(text)
    // return boolean
    let invertedText = invertiParola(text)

    // inverto la parola usando il ciclo for, devo partire dalla fine quindi pongo la prima espressione -1 e la terza espressione con decremento :
    for(let i = text.length -1; i >= 0; i--){
        const char = text[i]
        console.log(char)
        invertedText = invertedText + char
    }
    // se la parola (text=parametro) è = parolaInvertita(invertedText)
    if(text === invertedText){
        // return true
        return true
    }else{
        // altrimenti return false
        return false
    }
}

// dichiaro una funzione che mi serve ad invertire la parola che stavolta la chiamerò string:
function invertiParola(string){
    let invertedText = ''

    //genero la stringa invertita usando il ciclo for:
    for(let i = string.length -1; i >= 0; i--){
        const char = string.charAt(i)
    console.log(char)
    invertedText += char
    }
    return invertedText
}






