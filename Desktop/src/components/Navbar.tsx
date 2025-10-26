import logo from "../assets/traveler-nobg.png";
import { Home, Calendar, FileText, User2Icon, KeyIcon } from "lucide-react";
import { borderAnimation } from "../utils/borderAnimation";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    return (
        <div className="grid grid-cols-6 p-3 items-center text-black">
            <div className="col-span-1">
                <img src={logo} alt="traveler logo" className="w-full h-auto" />
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-3">
                <div className="col-span-1 text-lg grid grid-cols-5 gap-3">
                    <Link
                        to="/"
                        className={`justify-center p-2.5 pb-2.5 flex flex-row gap-2 ${
                            location.pathname !== "/"
                                ? borderAnimation
                                : "border-b-2"
                        } pb-1 flex items-center hover:bg-gray-200 transition-colors duration-300`}
                    >
                        <Home size={24} />
                        <p>Accueil</p>
                    </Link>
                    <Link
                        to="/clients"
                        className={`justify-center p-2.5 pb-2.5 flex flex-row gap-2 ${
                            location.pathname !== "/clients"
                                ? borderAnimation
                                : "border-b-2"
                        } pb-1 flex items-center hover:bg-gray-200 transition-colors duration-300`}
                    >
                        <User2Icon size={24} />
                        <p>Clients</p>
                    </Link>
                    <Link
                        to="/bookings"
                        className={`justify-center p-2.5 pb-2.5 flex flex-row gap-2 ${
                            location.pathname !== "/bookings"
                                ? borderAnimation
                                : "border-b-2"
                        } pb-1 flex items-center hover:bg-gray-200 transition-colors duration-300`}
                    >
                        <Calendar size={24} />
                        <p>Réservations</p>
                    </Link>
                    <Link
                        to="/conventions"
                        className={`justify-center p-2.5 pb-2.5 flex flex-row gap-2 ${
                            location.pathname !== "/conventions"
                                ? borderAnimation
                                : "border-b-2"
                        } pb-1 flex items-center hover:bg-gray-200 transition-colors duration-300`}
                    >
                        <FileText size={24} />
                        <p>Conventions</p>
                    </Link>
                    <Link
                        to="/account"
                        className={`justify-center p-2.5 pb-2.5 flex flex-row gap-2 ${
                            location.pathname !== "/account"
                                ? borderAnimation
                                : "border-b-2"
                        } pb-1 flex items-center hover:bg-gray-200 transition-colors duration-300`}
                    >
                        <KeyIcon size={24} />
                        <p>Compte</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
