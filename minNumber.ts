let i:number = 0;
let storage:number[] = [];
while(i < 100){    
    let inp:number = prompt("Inserisci numero")*1;
    if (inp > 0) storage.push(inp)
    if (inp == -1) break;
i++
}
let min = Math.min(...storage);
console.log(`Il numero più alto inserito è ${min}`);