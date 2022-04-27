//const duplicateSearchAndDestroy = (arry:number[]) => arry.filter((item:number, index:number) => arry.indexOf(item) !== index);

let storage:number[] = [];
let cunt = {}; // o forse era count.. non lo so

for (let i = 0; i < 100; i++){
    let inp:number = prompt("Inserisci numero")*1;
    if (inp > 0)  storage.push(inp);
    if (inp == -1)  break;
}
    //const duplicateElements = duplicateSearchAndDestroy(storage);
    for (const element of storage){
    (cunt[element]) ? cunt[element] += 1 : cunt[element] = 1;  
}
//for (const element of cunt){
   // ()
//}
console.log(...Object.entries(cunt));