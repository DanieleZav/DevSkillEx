////////////////////////////////////////////////////////////////////////////////
//AREA FUNZIONI, NON C'E' NULLA DA VEDERE QUI///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function piediMetri (altezza:number,cdc1:number):number{      //cdc=coefficiente di conversione
    ;
     return h
   }
   
   function libreChili (peso:number,cdc2:number):number{         //cdc=coefficiente di conversione
     
     return p
   }
   
   function calcBmi(altezza:number,peso:number){
    
   
   return bmi= p/ h*h
   }
   
   function compBmi(bodymassindex:number):string{
   
   if (bmi < 16.5){console.log("Sottopeso severo");
   }
   else if(bmi >=16.5 && bmi <18.4){console.log("Sottopeso");
   }
   else if(bmi > 18.5 && bmi <24.9){console.log("Normale");
   }
   else if(bmi > 25 && bmi <30){console.log("Sovrappeso");
   }
   else if(bmi > 30.1 && bmi <34.9){console.log("Obesità primo grado");
   }
   else if(bmi > 35 && bmi <40){console.log("Obesità secondo grado");
   }
   else if(bmi > 40){console.log("gskianto");
   }
   return prima="La prima misurazione e' terminata! Ti consigliamo di eseguirne una più precisa." 
   }
   
   function calcPreciso(sesso:string,polso:number):void{
     
     if (s =="m" && pl <17){console.log("Esile");
   }
   else if (s =="f" && pl <15){console.log("Esile");
   }
   
   if (s == "m" && (pl >=17 && pl <=18)){
       console.log("Normale");
       }
   
   else if (s =="f" && (pl >=15 && pl <=16)){;
       console.log("Normale");
       }
   
   if (s == "m" && pl >18){
       console.log("Robusto");
   }
   else if (s =="f" && pl >16){;
       console.log("Robusta");
       }
   }
   
   ////////////////////////////////////////////////////////////////////////////////
   // INIZIA DA QUI ///////////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////////////////////////
   
   let input1:number = prompt("Inserisci l'altezza in piedi")*1;   //INSERIRE ALTEZZA
   let input2:number = prompt ("inserisci il peso in libre")*1;    //INSERIRE PESO
   let cpiedi:number= 0.3
   let clibre:number= 0.4
   let p:number;
   let h:number;
   let bmi:number;
   let prima:string;
   
   piediMetri(input2,cpiedi);
   libreChili(input2,clibre);
   calcBmi(h,p);
   compBmi(bmi);
   console.log(prima);
   
   
   //SEZIONE INERENTE AL SECONDO CALCOLO
   let mp:string = prompt("Inserisci 'si' per andare avanti o 'no' per fermarti qui");
   let s:string= prompt("inserisci il tuo sesso biologico, 'f' per femmina oppure 'm' per maschio");
   let pl:number= prompt("inserisci la circonferenza del tuo polso in centimetri")*1;
   
    if (mp == "no"){
       console.log("Arrivederci!");
     }//SE LA STRINGA INSERITA AL PROMPT SARA' DIVERSA DA "si" E DA "no" IL PROGRAMMA SI FERMERA' E DARA' UN MESSAGGIO DI ERRORE 
     else if (mp != "si" && mp != "no"){
       console.log("Non hai inserito una parola valida, riavvia il programma");
   }
   else if (mp == "si"){
   }
   