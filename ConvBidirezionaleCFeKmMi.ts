function convCelFar(temperatura:number):number{
    meas = (inp*9/5)+32
    return meas 
}
function convFarCel(temperatura:number):number{
    meas = (inp-32) * 5/9
    return meas 
}
function convKmMi(Distanza:number):number{
    meas = inp / 1.6
    return meas 
}
function convMiKm(Distanza:number):number{
    meas = inp * 1.6
    return meas 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cho:number=prompt("Inserisci '1' per convertitore temperatura o '2' per convertire distanza")*1;
let inp:number=prompt("Inserisci il numero da convertire")*1;
let unita:string=prompt("Patate? Pere? Mele? specifica l'unita' di misura del precedente numero inserito");


let meas:number;
if (cho==1){
    if(unita=="c" || unita=="C"){
    convCelFar(inp);
    console.log("Hai inserito"+inp +" °C");
    console.log("Che equivale a "+meas +" °F" );
    }
    else{
        console.log("Unita' di misura non corretta");
    }
    if(unita=="f"||unita=="F"){
        convFarCel(inp);
        console.log("Hai inserito "+inp +" °F");
        console.log("Che equivale a "+meas +" °C" );
    }
    else{
        console.log("Unita' di misura non corretta");
    }
    }
if (cho==2){
    if(unita=="km" || unita=="KM"||unita=="Km"){
    convKmMi(inp);
    console.log("Hai inserito "+inp +" Km");
    console.log("Che equivale a "+meas +" Mi");
    }
    
    if(unita=="mi"||unita=="MI"||unita=="Mi"){
        convMiKm(inp);
        console.log("Hai inserito "+inp +" Mi");
        console.log("Che equivale a "+meas +" Km" );
    }
    
}
if (cho >2 || cho < 1){
    console.log("Riavvia il programma e scegli SOLO tra '1' e '2'");
}
