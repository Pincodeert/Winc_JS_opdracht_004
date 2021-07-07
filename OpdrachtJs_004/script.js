// Dit is deel 1 van opdracht 3
const age = 12
console.log(age)
if (age > 17) {
    console.log("Je bent 18 jaar of ouder en je mag naar binnen");
    
}
else{
    console.log("Je bent helaas nog te jong en wordt vriendelijk verzocht buiten te blijven");
}

// Dit is deel 2 van opdracht 3
const isFemale = false;
if (isFemale) {
    console.log("Welkom lady, op de ladiesnight");
}
else {
    console.log("Sorry, vanavond zijn we alleen open voor ladies");
}

// Dit is deel 3 van opdracht 3
const driverStatus = "BOB";
if (driverStatus ==="BOB") {
    console.log("Geweldig! 0% op, 100% BOB");
}
else { 
    console.log("Dat wordt niet meer rijden voor jou. Zal ik een taxi voor je bellen?");
}

//Vanaf hier is opdracht 4
// deel 1: toepassen van 50 % korting voor bezoekers tussen de 18 en 25 jaar
if (age >= 18 && age <= 25) {
    console.log( "Je krijgt 50% korting!")
}
else {
    console.log("jij bent oud en wijs en betaalt gewoon de volle prijs!") 
} // moet hier nog een if regel aan worden toegevoegd, opdat iemand die onder de 18 is niet de tekst krijgt dat hij/zjij de volle prijs moet betalen?

// Hieronder deel 2 van opdracht 4: Als je Bram of Sara heet krijg je een gratis biertje
const firstname ="Bram"
if (firstname === "Bram" || firstname === "Sarah") {
    console.log("Hee geluksvogel, een gratis biertje voor jou vandaag!")
} else {
    console.log('Welkom op ons jubileumfeest')
}

// hieronder deel3 van opdracht 4: vanaf een betaald bedrag krijg je iets gratis
const totalAmount = 30
if (totalAmount >=25 && totalAmount <50) {
    console.log("gefeliciteerd, je krijgt gratis (vega)bitterballen")
} 
if (totalAmount >=50 && totalAmount <100) {
    console.log("alsjeblief, een gratis portie nachos")
}
if (totalAmount >=100) {
    console.log("kijk eens, een gratis fles Champagne")
}