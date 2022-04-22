function convCelFar(temperatura:number):number{
    meas = (inp*9/5)+32
    return meas; 
                                              }
function convFarCel(temperatura:number):number{
    meas = (inp-32) * 5/9
    return meas; 
                                              }
function convKmMi(distanza:number):number{
    meas = inp / 1.6
    return meas; 
                                         }
function convMiKm(distanza:number):number{
    meas = inp * 1.6
    return meas;
                                        }
function stampTempConvertita(valoreInp:number,unitaDiMisura:string):void{
    if (unita=="C"){
    console.log("Hai inserito "+inp+"°"+unitaDiMisura);
    console.log("Che equivale a "+meas+"°"+"F");
                    }
    if (unita=="F"){
        console.log("Hai inserito "+inp+"°"+unitaDiMisura);
        console.log("Che equivale a "+meas+"°"+"C");
                    }
    if (unita=="KM"){
    console.log("Hai inserito "+inp+unitaDiMisura);
    console.log("Che equivale a "+meas+"MI");
                    }
    if(unita=="MI"){
    console.log("Hai inserito "+inp+unitaDiMisura);
    console.log("Che equivale a "+meas+"KM");
                    }
    
                                                                        }   
    
    

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let cho:number=prompt("Inserisci '1' per convertitore temperatura o '2' per convertire distanza")*1;
let inp:number=prompt("Inserisci il numero da convertire")*1;
let unita:string=prompt("Patate? Pere? Mele? specifica l'unita' di misura del precedente numero inserito").toUpperCase();
let meas:number;


if (cho > 2 || cho < 1){
    console.log("Non hai inserito un comando valido, per favore riavvia il programma.");
                        }
if (cho == 1){
    if (unita=="C"){
    convCelFar(inp);
    stampTempConvertita(inp,unita);
                    }
    if (unita=="F"){
    convFarCel(inp);
    stampTempConvertita(inp,unita);
                    }   
if (unita!="C"&&unita!="F"){
    console.log("Hai inserito un'unità di misura non compresa fra 'C' e 'F'. Per favore riavvia il programma.");
    }
            }
if (cho ==2){
    if(unita=="KM"){
    convKmMi(inp);
    stampTempConvertita(inp,unita);
                     }
    
    if(unita=="MI"){
    convMiKm(inp);
    stampTempConvertita(inp,unita);    
                    }
if (unita!="KM"&&unita!="MI"){
    console.log("Hai inserito un'unità di misura non compresa fra 'KM' e 'MI'. Per favore riavvia il programma.");
    }
            }