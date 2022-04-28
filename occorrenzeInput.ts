//const duplicateSearchAndDestroy = (arry:number[]) => arry.filter((item:number, index:number) => arry.indexOf(item) !== index);
function insert ():number{
    return +prompt("Inserisci un numero");
}

let storage:number[] = [];
let cunt = {}; // o forse era count.. non lo so
let inp = insert()

while (inp != -1){
    storage.push(inp);
    inp = insert()

}
    //const duplicateElements = duplicateSearchAndDestroy(storage);
    for (const element of storage){
    (cunt[element]) ? cunt[element] += 1 : cunt[element] = 1;  
}
//for (const element of cunt){
   // ()
//}
console.log(...Object.entries(cunt));