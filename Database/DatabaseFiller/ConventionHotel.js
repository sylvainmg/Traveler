import { faker } from "@faker-js/faker";
import fs from "fs";

const data = fs.readFileSync("hotel.json", "utf-8");
const obj = JSON.parse(data);

let csv = "";

for (let i = 0; i < 100; i++) {
    csv += obj[i].ID_HOTEL + ","; // num_convention
    csv += obj[i].ID_HOTEL + ","; // id

    const date = faker.date
        .between({ from: "2023-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.writeFileSync("ConventionHotel.csv", csv);

csv = "";

for (let i = 100; i < 872; i++) {
    csv += obj[i].ID_HOTEL + ","; // num_convention
    csv += obj[i].ID_HOTEL + ","; // id

    const date = faker.date
        .between({ from: "2025-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.appendFileSync("ConventionHotel.csv", csv);

csv = "";

for (let i = 872; i < 922; i++) {
    csv += obj[i].ID_HOTEL + ","; // num_convention
    csv += obj[i].ID_HOTEL + ","; // id

    const date = faker.date
        .between({ from: "2024-01-01", to: "2025-10-10" })
        .toISOString()
        .split("T")[0];

    csv += date + "\n";
}
fs.appendFileSync("ConventionHotel.csv", csv);
