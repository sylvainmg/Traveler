import fs from "fs";

const data = fs.readFileSync("countries.json", "utf-8");
const obj = JSON.parse(data);
let id = 1;

let csv_airlines = "";
let csv_served = "";

function checkArray(array, element) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === element) return true;
    }

    return false;
}

function generateAirways(country) {
    const suffixes = [
        "Air",
        "Airlines",
        "Airways",
        "Express",
        "Aviation",
        "Jet",
        "International",
        "Sky",
        "Flight",
        "Aeronautics",
    ];

    const randomNumber = Math.floor(
        Math.random() * (suffixes.length - 2 + 1) + 2
    );

    const airlines = [];

    for (let i = 0; i < randomNumber; i++) {
        const randomIndex = Math.floor(Math.random() * suffixes.length);
        if (checkArray(airlines, suffixes[randomIndex])) {
            i--;
            continue;
        } else {
            csv_airlines += id + ",";
            csv_airlines += country + " " + suffixes[randomIndex] + "\n";

            const initialCode = obj.find((el) => el.NOM === country).CODE;
            csv_served += id + ",";
            csv_served += initialCode + "\n";

            generateServed(initialCode);

            id++;

            airlines.push(suffixes[randomIndex]);
        }
    }
}

function generateServed(initialCode) {
    const randomCountryNumber = Math.floor(Math.random() * (50 - 10 + 1) + 10);
    const countries = [];
    countries.push(initialCode);

    for (let i = 0; i < randomCountryNumber; i++) {
        const randomCountryIndex = Math.floor(Math.random() * obj.length);

        if (checkArray(countries, obj[randomCountryIndex].CODE)) {
            i--;
            continue;
        } else {
            csv_served += id + ",";
            csv_served += obj[randomCountryIndex].CODE + "\n";

            countries.push(obj[randomCountryIndex].CODE);
        }
    }
}

for (let i = 0; i < obj.length; i++) {
    generateAirways(obj[i].NOM);
}

fs.writeFileSync("csv/airlines.csv", csv_airlines);
fs.writeFileSync("csv/desservir.csv", csv_served);
