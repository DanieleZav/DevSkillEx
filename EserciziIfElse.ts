let numero:number = prompt("Inserisci un numero");

if (numero > 0){ console.log("Il numero è positivo");
               }
else if (numero == 0){console.log ("Il numero non è né positivo né negativo");
                    }
else{console.log("Il numero è negativo");
    }
----------------------------------

let numero:number = prompt("Inserisci un numero");

if (numero % 2 == 0){
    console.log("Il numero è pari");
                }

else {console.log("Il numero è dispari");
     }

-Variazione con switch----------------------------------------

let numero:number = prompt("Inserisci un numero");

switch (numero % 2){
    case 0:{console.log("il numero è pari");break;}
    default:{console.log("il numero è dispari");break;}
}

-----------------------------------

let n1:number = prompt("Inserisci il primo valore")*1;
let n2:number = prompt("Inserisci il secondo valore")*1;
let n3:number = prompt("Inserisci il terzo valore")*1;



if (n1 > n2){
    if (n1 > n3){console.log("N1 è il più grande con il numero "+n1);
                }
    else {console.log("N3 è il più grande con il numero "+n3);
          }
}

else if (n2 > n1){
    if (n2 > n3){console.log("N2 è il più grande con il numero "+n2);
              }else 
              {console.log("N3 è il più grande con il numero "+n3);}
          }
else if (n3 > n1){
	if (n3 > n2) {console.log("N3 è il più grande con il numero "+n3);
}

}
-----------------------------------------------------

let eta:number = prompt("Inserisci il tuo anno di nascita");

if (eta > 2022){
    console.log("Wow vieni dal futuro");
                }
else if (eta < 1900){
    console.log("Grande Vlad III di Valacchia le porgo i miei ossequi");
                    }
else{
    console.log("Hai" 2022-eta "anni");
    }
------------------------------------------------------

let anno:number = prompt("Inserisci l'anno di tuo interesse");



if (anno % 400 == 0){
    console.log("L'anno è bisestile");
    }
else if (anno % 4== 0){
    if (anno % 100!= 0){
        console.log("l'hanno è bisestile");
    }
    else{
    console.log("L'anno non è bisestile");
    }
}
