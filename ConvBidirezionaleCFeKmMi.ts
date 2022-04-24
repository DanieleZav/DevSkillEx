const convertitore = (scelta: number,numero: number,unitaDiMisura: string): void => {
    if (unitaDiMisura == "C" ||  unitaDiMisura == "F") console.log(`Hai inserito ${numero}°${unitaDiMisura}`);
    if (unitaDiMisura == "KM" || unitaDiMisura == "MI") console.log(`Hai inserito ${numero}${unitaDiMisura}`);
    if (scelta == 1) {
        if (unitaDiMisura == "C") return console.log(`Che equivale a ${((numero * 9 / 5) + 32)}°F`);
        return console.log(`Che equivale a ${((numero - 32) * 5 / 9)}°C`);
    }
    if (unitaDiMisura=="KM") return console.log(`Che equivale a ${(numero / 1.6)}MI`);
    return console.log(`Che equivale a ${(numero * 1.6)}KM`);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const cho: number = +prompt("Inserisci '1' per convertitore temperatura o '2' per convertire distanza");
const inp: number = +prompt("Inserisci il numero da convertire");
const unita: string = prompt("Patate? Pere? Mele? specifica l'unita' di misura del precedente numero inserito").toUpperCase();
    
if (cho > 2 || cho < 1) console.log("Non hai inserito un comando valido.");

if (unita != "KM" && unita != "MI" && unita != "C" && unita != "F") console.log("Hai inserito un'unità di misura non compatibile.");
convertitore(cho, inp, unita);