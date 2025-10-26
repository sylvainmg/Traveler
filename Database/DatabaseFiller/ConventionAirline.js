import { faker } from "@faker-js/faker";
import fs from "fs";

const data = fs.readFileSync("AirlineCountry.json", "utf-8");
const obj = JSON.parse(data);

let csv = "";

for (let i = 0; i < 100; i++) {
    csv += obj[i].id + ","; // num_convention
    csv += obj[i].id + ","; // id

    const date = faker.date
        .between({ from: "2023-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.writeFileSync("ConventionAirline.csv", csv);

csv = "";

for (let i = 100; i < 1372; i++) {
    csv += obj[i].id + ","; // num_convention
    csv += obj[i].id + ","; // id

    const date = faker.date
        .between({ from: "2025-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.appendFileSync("ConventionAirline.csv", csv);

csv = "";

for (let i = 1372; i < 1511; i++) {
    csv += obj[i].id + ","; // num_convention
    csv += obj[i].id + ","; // id

    const date = faker.date
        .between({ from: "2024-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.appendFileSync("ConventionAirline.csv", csv);
