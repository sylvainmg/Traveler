import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Bookings from "./pages/Bookings";
import Conventions from "./pages/Conventions";
import Account from "./pages/Account";
import Clients from "./pages/Clients";

function App() {
    return (
        <BrowserRouter>
            <nav className="select-none">
                <Navbar />
            </nav>
            <main className="selection:bg-emerald-400">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/bookings" element={<Bookings />} />
                    <Route path="/conventions" element={<Conventions />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
