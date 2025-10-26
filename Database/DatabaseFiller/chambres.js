import fs from "fs";

const data = fs.readFileSync("hotel.json", "utf-8");
const obj = JSON.parse(data);

function randomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

class category {
    nom;
    prix;

    constructor(nom, prix) {
        this.nom = nom;
        this.prix = prix;
    }
}

function generateCategory(star) {
    const oneStar = [
        new category("Simple", randomPrice(30, 50)),
        new category("Double", randomPrice(50, 70)),
    ];
    const twoStar = [
        new category("Simple", randomPrice(40, 60)),
        new category("Double", randomPrice(60, 80)),
        new category("Triple", randomPrice(80, 100)),
    ];
    const threeStar = [
        new category("Simple", randomPrice(50, 70)),
        new category("Double", randomPrice(70, 100)),
        new category("Triple", randomPrice(100, 130)),
        new category("Familiale", randomPrice(130, 160)),
    ];
    const fourStar = [
        new category("Standard", randomPrice(80, 120)),
        new category("Supérieure", randomPrice(120, 180)),
        new category("Suite", randomPrice(180, 250)),
    ];
    const fiveStar = [
        new category("Supérieure", randomPrice(150, 250)),
        new category("Deluxe", randomPrice(250, 400)),
        new category("Suite", randomPrice(400, 500)),
        new category("Présidentielle", randomPrice(500, 1000)),
    ];

    switch (star) {
        case 1:
            return oneStar;
        case 2:
            return twoStar;
        case 3:
            return threeStar;
        case 4:
            return fourStar;
        case 5:
            return fiveStar;
    }
}

let csv_chambre = "";
let csv_posseder = "";

let num_chambre = 1;

for (let i = 0; i < obj.length; i++) {
    const nb_etoile = Number(obj[i].NB_ETOILE);
    const categories = generateCategory(nb_etoile);
    const id_hotel = Number(obj[i].ID_HOTEL);

    // on parcourt chaque élément de l'array de catégorie générée
    for (let j = 0; j < categories.length; j++) {
        csv_chambre +=
            num_chambre +
            "," +
            categories[j].nom +
            "," +
            categories[j].prix +
            "\n";

        csv_posseder += id_hotel + "," + num_chambre + "\n";

        num_chambre++;
    }
}

fs.writeFileSync("chambre.csv", csv_chambre);
fs.writeFileSync("posseder.csv", csv_posseder);
