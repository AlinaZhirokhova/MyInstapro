import { Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login/Login";
import { Main } from "./pages/Main/Main";
import { Registration } from "./pages/Registration/Registration";

export default function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Main />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    );
};