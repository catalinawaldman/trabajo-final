import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../views/Home";
import { NotFound } from "../views/NotFound";
import { Login } from "../views/Login";
import { Registro } from "../pages/Registro";
import { Acerca } from "../views/Acerca";   
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
        <Route
          path="/chat"
          element={
            <RouteProtected>
              <Home />
            </RouteProtected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/acerca" element={<Acerca />} />  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { RouterApp };
