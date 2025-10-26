import ScrollArea from "../components/ScrollArea";

function Clients() {
    return (
        <div className="flex flex-col h-screen overflow-hidden">
            {/* Headers */}
            <div className="grid grid-cols-5">
                <div className="col-span-1 text-center font-bold bg-gray-400/30 p-2">
                    Identifiant
                </div>
                <div className="col-span-1 text-center font-bold bg-gray-400/30 p-2">
                    Nom
                </div>
                <div className="col-span-1 text-center font-bold bg-gray-400/30 p-2">
                    Prénoms
                </div>
                <div className="col-span-1 text-center font-bold bg-gray-400/30 p-2">
                    E-mail
                </div>
                <div className="col-span-1 text-center font-bold bg-gray-400/30 p-2">
                    Pays
                </div>
            </div>
        </div>
    );
}

export default Clients;
