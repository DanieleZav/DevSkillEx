function nomeCognome (nome:string,cognome:string):string{
    let nc:string= nome+" "+cognome;
    return console.log(nc.toUpperCase());
    
}

///////////////////////////////////////////////////////


let parametro1:string = prompt("Inserisci Nome");
let parametro2:string = prompt("Inserisci Cognome");

nomeCognome(parametro1,parametro2);
