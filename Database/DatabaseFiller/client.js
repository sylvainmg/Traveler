import fs from "fs";
import { faker } from "@faker-js/faker";

const obj = JSON.parse(fs.readFileSync("client.json", "utf-8"));

let newCSV = "ID_CLIENT,CODE,NOM,PRENOM,EMAIL,PASSWORD\n";

for (let i = 0; i < obj.length; i++) {
    const currentClient = obj[i];
    const password = faker.internet.password();

    newCSV += `${currentClient.ID_CLIENT},${currentClient.CODE},${currentClient.NOM},${currentClient.PRENOM},${currentClient.EMAIL},${password}\n`;
}

fs.writeFileSync("newClient.csv", newCSV);
