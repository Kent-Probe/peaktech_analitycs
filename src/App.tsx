import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import Login from "./login/login";
import Home from "./principal/home";
import MenuAdmin from "./ui/menuAdmin";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<MenuAdmin />}>
                <Route path="" element={<Dashboard />} />
            </Route>
        </Routes>
    );
}

export default App;
