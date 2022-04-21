function isBisestile (anno:number):number {
    if ((anno % 400==0) || (anno%4==0 && anno%100!=0)){
        console.log("E' bisestile")
     
}    

else{
    console.log("Non e' bisestile");
}
}

///////////////////////////////////////////////////////

let data:number = prompt("Inserisci l'anno di tuo interesse");
isBisestile(data);