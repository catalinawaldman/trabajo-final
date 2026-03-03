import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

const RouteProtected = ({ children }) => {
  const { loggedUser } = useContext(ChatContext);

  
  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export { RouteProtected };
