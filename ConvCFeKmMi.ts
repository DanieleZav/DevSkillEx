function convTemp(temperatura:number):number{
    meas = (inp*9/5)+32
    return meas 
}

function convDist(inp:number):number{
    meas = inp / 1.6
    return meas 
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cho:string=prompt("Inserisci '1' per convertitore temperatura o '2' per convertire distanza")
let inp:number=prompt("Inserisci '1' per convertitore temperatura o '2' per convertire distanza")
let meas:number;
if (cho=="1"){
    convTemp(inp);
    console.log(inp +" °C");
    console.log(meas +" °F");
}
else if (cho=="2"){
    convDist(inp);
    console.log(inp+" Km");
    console.log(meas+" Mi");
}
