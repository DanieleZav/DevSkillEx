let arrayA:number[] = [];
let arrayB:number[] = [];
let arrayC:number[] = [];


for (let i = 0; i < 5; i++){
    let inputA:number = prompt("inserisci valori di Array A")*1;
    arrayA.push(inputA);
}


for (let i = 0; i < 5; i++){
    let inputB:number = prompt("inserisci valori di Array B")*1;
    arrayB.push(inputB); 
}

arrayC.push(arrayA);
arrayC.push(arrayB.reverse());
console.log(arrayC);