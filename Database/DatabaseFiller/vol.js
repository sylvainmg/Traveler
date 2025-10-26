import { faker } from "@faker-js/faker";
import fs from "fs";

const date_debut = "2025-10-20";
const date_fin = "2026-12-31";

const data = fs.readFileSync("desservir.json", "utf-8");
const obj = JSON.parse(data);

let csv =
    "NUM_VOL,CODE_ATTERIR,CODE_DECOLLER,ID_COMPAGNIE_AERIENNE,PRIX,DATE_VOL,HEURE_DEPART\n";

let num_vol = 332773;

function randomCode(id) {
    const filteredObj = obj.filter((obj) => obj.id === id);
    const randomIndex = Math.floor(Math.random() * filteredObj.length);

    return filteredObj[randomIndex].code;
}

function randomRange(min, max, modulo = null) {
    if (modulo) return Math.floor(Math.random() * 12) * modulo;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getOccurences(id) {
    return obj.filter((obj) => obj.id === id).length;
}

function generateOneFlight(id_compagnie_aerienne) {
    const code_atterir = randomCode(id_compagnie_aerienne);
    const code_decoller = (function () {
        let code = randomCode(id_compagnie_aerienne);
        while (code === code_atterir) {
            code = randomCode(id_compagnie_aerienne);
        }

        return code;
    })();
    const price = randomRange(500, 1500);
    const date_vol = faker.date
        .between({ from: date_debut, to: date_fin })
        .toISOString()
        .split("T")[0];

    const hour = randomRange(0, 23);
    const minute = randomRange(0, 60, 5);

    num_vol++;

    return {
        num_vol,
        code_atterir,
        code_decoller,
        id_compagnie_aerienne: id_compagnie_aerienne,
        prix: price,
        date_vol,
        heure_depart:
            String(hour).padStart(2, "0") +
            ":" +
            String(minute).padStart(2, "0"),
    };
}

function generateFlights(occurences) {
    for (let k = 0; k < occurences; k++) {
        for (let i = 0; i < 1511; i++) {
            const occurences = getOccurences(i + 1);

            for (let j = 0; j < occurences; j++) {
                const {
                    num_vol,
                    code_atterir,
                    code_decoller,
                    id_compagnie_aerienne,
                    prix,
                    date_vol,
                    heure_depart,
                } = generateOneFlight(i + 1);

                csv += `${num_vol},${code_atterir},${code_decoller},${id_compagnie_aerienne},${prix},${date_vol},${heure_depart}\n`;
            }
        }
    }
}

generateFlights(3);
fs.writeFileSync("csv/vol3.csv", csv);
