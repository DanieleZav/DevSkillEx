//let gino:number[] = [...Array(114).keys()].map(i => i + 1);
let i:number = 2;        //i=3 o = 2
let countPrimi:number = 0;

while (countPrimi < 30){
    let notPrime:boolean = false
    if(i === 2){ 
        console.log(i);
        countPrimi++;
    }
    else{
        for(let o = 2; o < i; o++){
            if (i % o == 0){
                notPrime = true;
                break;
            }
        }
        if (notPrime == false){ 
            console.log(i);
            countPrimi++
        }
    }
    i++
}