import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/Home";       
import { NotFound } from "../views/NotFound"; 
import { Login } from "../views/Login";       
import Registro from "../pages/Registro";    
import { RouteProtected } from "../components/RouteProtected";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const RouterApp = () => {
  const { loggedUser } = useContext(ChatContext);

  return (
    <BrowserRouter>
      <Routes>
    
        <Route
          path="/"
          element={loggedUser ? <Navigate to="/chat" replace /> : <Registro />}
        />

        {/* Chat protegido */}
        <Route
          path="/chat"
          element={
            <RouteProtected>
              <Home />
            </RouteProtected>
          }
        />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Registro */}
        <Route path="/registro" element={<Registro />} />

        {/* Fallback */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };