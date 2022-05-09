const operation = (oneNumber:number) => {
    const oneArray:number[] = [oneNumber]
    while (oneNumber > 1){ 
        (oneNumber % 2 === 0) ? oneNumber = oneNumber / 2 : oneNumber = (oneNumber * 3) + 1;
        oneArray.push(oneNumber);
    }
    //console.log("Func", oneArray);
    return oneArray;
}
const swapNumber = (oneNumber:number, anotherNumber:number) => {
    oneNumber = oneNumber + anotherNumber;
    anotherNumber = oneNumber - anotherNumber;
    oneNumber = oneNumber - anotherNumber;
    return [oneNumber, anotherNumber]
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let i:number = +prompt("Numero 'i'");
let j:number = +prompt("Numero 'j'");
let maxLengthCycle:number[] = []
if((i > 0 && i < 10000) && (j > 0 && j < 10000)){
if (i > j){
    const [firstNumber, secondNumber] = swapNumber(i,j);    //destrutturazione
    i = firstNumber;
    j = secondNumber;
}
for (let x = i; x <= j; x++){
    const lengthCycle = operation(x)
    if (lengthCycle.length > maxLengthCycle.length){
        maxLengthCycle = lengthCycle
    }
}
console.log(i, j, maxLengthCycle.length)
} else {
    console.log("Almeno uno dei due input non rispecchia i parametri richiesti");
}