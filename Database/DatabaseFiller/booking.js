import fs from "fs";
import { faker } from "@faker-js/faker";

const vol = JSON.parse(fs.readFileSync("outputs/vol.json", "utf-8"));
const hotel = JSON.parse(fs.readFileSync("outputs/hotel.json", "utf-8"));
const client = JSON.parse(fs.readFileSync("outputs/client.json", "utf-8"));

function getBooking() {
    // destination de départ
    const initialFlight = vol[Math.floor(Math.random() * vol.length)];

    // recherche de la destination inverse
    const reversedFlightArray = vol.filter((el) => {
        const initialDate = new Date(initialFlight.date_vol);

        return (
            el.code_decoller === initialFlight.code_atterir &&
            el.code_atterir === initialFlight.code_decoller &&
            new Date(el.date_vol) > initialDate
        );
    });
    const reversedFlight =
        reversedFlightArray[
            Math.floor(Math.random() * reversedFlightArray.length)
        ];

    if (!reversedFlight) return null;

    const duration =
        (new Date(reversedFlight.date_vol) - new Date(initialFlight.date_vol)) /
        (1000 * 60 * 60 * 24);

    return {
        initialFlight,
        reversedFlight,
        duration,
    };
} // return : initialFlight, reversedFlight, duration | null

function getHotel(code) {
    const hotels = hotel.filter((el) => el.CODE === code);

    return hotels[Math.floor(Math.random() * hotels.length)] || null;
}

let csv =
    "NUM_RESERVATION,NUM_VOL_ALLER,NUM_VOL_RETOURNER,ID_HOTEL,CODE,ID_CLIENT,DATE_RESERVATION,DEBUT_SEJOUR,DUREE_SEJOUR\n";
fs.writeFileSync("csv/booking.csv", csv);

//4761 (clients)
for (let i = 0; i < 7000; i++) {
    let booking = null;
    let selectedHotel = null;

    if (
        !(() => {
            booking = getBooking();
            selectedHotel = getHotel(booking?.reversedFlight.code_atterir);
            return booking && selectedHotel;
        })()
    ) {
        i--;
        continue;
    }

    const code = ["GRP", "IND"][Math.floor(Math.random() * 2)];
    const date_reservation = faker.date
        .between({
            from: "2023-01-01",
            to: booking.initialFlight.date_vol,
        })
        .toISOString()
        .split("T")[0];

    let id_client = null;

    if (
        !(() => {
            const clientArray = client.filter(
                (c) => c.code === booking.initialFlight.code_decoller
            );
            const randomClient =
                clientArray[Math.floor(Math.random() * clientArray.length)];

            id_client = randomClient?.id_client;
            return randomClient;
        })()
    ) {
        i--;
        continue;
    }

    csv = `${i + 1},${booking.initialFlight.num_vol},${
        booking.reversedFlight.num_vol
    },${selectedHotel.ID_HOTEL},${code},${id_client},${date_reservation},${
        booking.initialFlight.date_vol
    },${booking.duration}\n`;

    fs.appendFileSync("csv/booking.csv", csv);

    console.log(csv);
}

console.log("====================================");
console.log("Opération terminée.");
console.log("====================================");
