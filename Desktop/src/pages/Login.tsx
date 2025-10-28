import { useState } from "react";
import logo from "../assets/traveler-nobg.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../api/Auth";
import { useAuth } from "../contexts/AuthContext";

function Login() {
    const [admin, setAdmin] = useState({
        email: "",
        password: "",
    });
    const { setToken } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const data = await login(admin);
            setToken(data.token);
            return data.status;
        } catch (err) {
            console.log("Login failed", err);
            alert("Email ou mot de passe incorrect !");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="grid grid-rows-3">
                <div className="row-span-1 flex justify-center items-center select-none">
                    <img src={logo} alt="traveler-icon" className="w-1/2" />
                </div>
                <div className="row-span-2">
                    <p className="text-center text-2xl">Bienvenue !</p>
                    <p className="text-center text-xl">
                        Veuillez saisir vos identifiants administrateur.
                    </p>
                    <div className="p-5 grid grid-cols-3 gap-3 items-center">
                        <div className="col-span-1">E-mail</div>
                        <input
                            type="text"
                            className="col-span-2 border border-black p-1"
                            value={admin.email}
                            onChange={(e) =>
                                setAdmin({ ...admin, email: e.target.value })
                            }
                        />
                        <div className="col-span-1">Mot de passe</div>
                        <input
                            type="text"
                            className="col-span-2 border border-black p-1"
                            value={admin.password}
                            onChange={(e) =>
                                setAdmin({ ...admin, password: e.target.value })
                            }
                        />
                        <div className="col-span-1"></div>
                        <Button
                            className="bg-green-300 hover:bg-green-400 transition-colors duration-300 col-span-1 mt-3"
                            onClick={async () => {
                                const status = await handleSubmit();
                                if (status === 200) navigate("/");
                            }}
                        >
                            <p>Valider</p>
                        </Button>
                        <div className="col-span-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
