let input: number[] = [prompt("X")*1,prompt("Y")*1];

console.log(input[0]+ input[1]);
(input[0] > input[1]) ? console.log(input[0] - input[1]) : console.log(input[1] - input[0]);
console.log(input[0]* input[1]);
(input[0] > input[1]) ? console.log(input[0] / input[1]) : console.log(input[1] / input[0]);