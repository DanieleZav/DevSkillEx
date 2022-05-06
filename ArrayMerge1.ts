let minMax:number = prompt("inserisci un numero di valori compresi tra 5 e 10")*1;

if (minMax >= 5 && minMax <= 10){
let arrayA:number[] = [];
let arrayB:number[] = [];
let arrayC:number[] = [];

for (let i = 0; i < minMax; i++){
    let inputA:number = prompt("inserisci valori di Array A")*1;
    arrayA.push(inputA);
}

for (let i = 0; i < minMax; i++){
    let inputB:number = prompt("inserisci valori di Array B")*1;
    arrayB.push(inputB);
}

arrayA.forEach((item, index) => {
    if(index % 2 == 0){
        arrayC.push(item);
    } else {
        arrayC.push(arrayB[index]);
    }
})
console.log(arrayC);
}
else {
    alert("Hai inserito troppi o troppo pochi valori!");
}