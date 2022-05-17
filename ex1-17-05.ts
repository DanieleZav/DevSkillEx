let i:number = 0;
const div:number = +prompt("Inserisci il divisore");
const box:number[] = [];
while (i < 10){
    const inp:number = +prompt("Inserisci i numeri");     
    box.push(inp);
    i++
}
(box.some((item) => item % div === 0) === true) ? console.log("NO") : console.log("OK");