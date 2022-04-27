// Metodo veramente brutto e macchinoso, mentre tento di capire come usare .every per gli array
console.log(2);
console.log(3);
console.log(5);
console.log(7);
for (let i = 2; i <= 113; i++){
    if(i % i == 0 && i % 2 != 0 && i % 3 !=0 && i % 5 !=0 && i % 7 !=0) console.log(i);
}