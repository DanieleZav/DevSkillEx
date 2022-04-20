let h:number = prompt("Inserisci l'altezza in piedi")*1;   //INSERIRE ALTEZZA
let p:number = prompt ("inserisci il peso in libre")*1;    //INSERIRE PESO
h= h * 0.3; //conversione in metri
p= p * 0.4; //conversione in kg

//console.log(h);
//console.log(p);

let bmi: number;
bmi = p / (h*2);
//console.log(bmi);


//SEZIONE DELLA TABELLA BMI
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



//SEZIONE INERENTE AL SECONDO CALCOLO
let mp:string = prompt("Inserisci 'si' per andare avanti o 'no' per fermarti qui");

 if (mp == "no"){
    console.log("Arrivederci!");
  }//SE LA STRINGA INSERITA AL PROMPT SARA' DIVERSA DA "si" IL PROGRAMMA SI FERMERA'


else if (mp == "si"){
let s:string= prompt("inserisci il tuo sesso biologico, 'f' per femmina oppure 'm' per maschio");
let pl:number= prompt("inserisci la circonferenza del tuo polso in centimetri")*1;

if (s =="m" && pl <17){console.log("Esile");
}
else if (s =="f" && pl <15){console.log("Esile");
}



if (s == "m" && (pl >=17 && pl <=18)){
    console.log("Normale");}

else if (s =="f" && (pl >=15 && pl <=16)){;
    console.log("Normale");}



if (s == "m" && pl >18){
    console.log("Robusto");
}
else if (s =="f" && pl >16){;
    console.log("Robusta");}

}
