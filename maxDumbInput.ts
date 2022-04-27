const calcMaxV = (numbers:number[]):number => Math.max(...numbers);
let box:number[] = [];    
for (let i = 0; i < 10; i++){
    box.push(prompt("Inserisci i numeri")*1);
}
console.log(calcMaxV(box));