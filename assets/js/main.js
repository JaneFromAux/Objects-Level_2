
console.log("Level_2_1_!");
let edelMetallPreise = [
    { name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
    { name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
    { name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
    { name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
    { name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
    { name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
    { name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
    { name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
    { name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" }
];

let emptyName = [];
edelMetallPreise.forEach(elm => {
    emptyName.push(elm.name);
});
console.log(emptyName);

edelMetallPreise.map(elm => {
    console.log(elm.name);
})

let emptyGramEu = [];
edelMetallPreise.forEach(elm => {
    emptyGramEu.push(elm.preiseGramEuro);
})
console.log(emptyGramEu);

edelMetallPreise.map(elm => {
    console.log(elm.preiseGramEuro);
})

let emptyVerand = [];
edelMetallPreise.forEach(elm => {
    emptyVerand.push(elm.veraenderung);
})
console.log(emptyVerand);

edelMetallPreise.map(ele => {
    console.log(ele.veraenderung);
})

function PreisEu(Euros) {
    Euros >= 50;
}
edelMetallPreise.filter(PreisEu);
let ergebnis = edelMetallPreise.filter((i) => {
    if (i.preiseGramEuro > 50) {
        console.log(i.preiseGramEuro);
    }
});

console.log("Level_2_2_!");
const singers = [
    { name: 'The Beatles', country: 'United Kingdom', period_active: { start: 1960, end: 1970 }, genre: "Rock / Pop" },
    { name: 'Elvis Presley', country: 'United States', period_active: { start: 1954, end: 1977 }, genre: "Rock and roll" },
    { name: 'Michael Jackson', country: 'United States', period_active: { start: 1964, end: 2009 }, genre: "Pop / Rock / Dance / Soul / R&B" },
    { name: 'Elton John', country: 'United Kingdom', period_active: { start: 1964, end: "present" }, genre: "Pop / Rock" },
    { name: 'Madonna', country: 'United States', period_active: { start: 1979, end: "present" }, genre: "Pop / Dance / Electronica" },
    { name: 'Led Zeppelin', country: 'United Kingdom', period_active: { start: 1968, end: 1980 }, genre: "Hard rock / Blues rock / Folk rock" },
    { name: 'Rihanna', country: 'United States', period_active: { start: 2005, end: "present" }, genre: "R&B / Pop / Dance / Hip-hop" },
    { name: 'Pink Floyd', country: 'United Kingdom', period_active: { start: 1965, end: 1996, extra: 2014 }, genre: "Progressive rock / Psychedelic rock" },
];

// for (let i = 0; i < singers.length; i++) {

//     console.log(singers.sort((a, b) => {
//         if(a.name - b.nam);
//     }));
// }

let alpha = (a, b) => {
    if (a.name > b.name) {
        return 1;
    } else if (a.name < b.name) {
        return -1;
    }
    return 0;
}
let newArr = singers.sort(alpha);
console.log(newArr);


