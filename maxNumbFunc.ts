const calcMaxV = (numbers:number[]):number => Math.max(...numbers);
    
let box:number[] = [1, 12, 45, 874, 3758, 18, 21, 8, 9, 2222];
console.log(calcMaxV(box));