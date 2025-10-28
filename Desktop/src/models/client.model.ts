export default interface Client {
    clients: {
        ID_CLIENT: number;
        CODE: string;
        NOM: string;
        PRENOM: string;
        EMAIL: string;
    }[];
}
