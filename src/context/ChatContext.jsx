import { createContext, useState, useEffect } from "react";
import { users as mockUsers } from "../services/mockApi";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {

  // contactos mock (ahora editable)
  const [mockContacts, setMockContacts] = useState(
    mockUsers.map(u => ({ ...u, fromMock: true }))
  );

  // usuarios registrados
  const [registeredUsers, setRegisteredUsers] = useState(() => {
    const stored = localStorage.getItem("registeredUsers");
    return stored ? JSON.parse(stored) : [];
  });

  // usuario logueado
  const [loggedUser, setLoggedUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // usuario seleccionado para chatear
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));
  }, [registeredUsers]);

  const handleUser = (user) => {
    setLoggedUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  // registro
  const register = (newUserData) => {
    const newUser = {
      id: mockContacts.length + registeredUsers.length + 1,
      firstName: newUserData.nombre,
      lastName: newUserData.apellido,
      age: newUserData.edad,
      address: { country: newUserData.pais },
      email: newUserData.email,
      password: newUserData.password,
      image: "https://via.placeholder.com/45",
      messages: []
    };

    setRegisteredUsers((prev) => {
      const updated = [...prev, newUser];
      localStorage.setItem("registeredUsers", JSON.stringify(updated));
      return updated;
    });

    handleUser(newUser);
  };

  // login
  const login = (userData) => {
    const allUsers = [...mockContacts, ...registeredUsers];
    const foundUser = allUsers.find(user => user.email === userData.email);

    if (!foundUser) return null;

    if (foundUser.password === userData.password) {
      handleUser(foundUser);
      return foundUser;
    }

    return null;
  };

  // logout
  const logout = () => {
    localStorage.removeItem("user");
    setLoggedUser(null);
  };

  // seleccionar usuario del chat
  const handleSelectedUserId = (id) => {
    setSelectedUserId(id);
  };

  // usuario seleccionado
  const selectedUser = mockContacts.find(user => user.id === selectedUserId);

  // ⭐ AGREGAR MENSAJES
  const handleMessages = (newMessage) => {
    setMockContacts(prev =>
      prev.map(user => {
        if (user.id === selectedUserId) {
          return {
            ...user,
            messages: [...user.messages, newMessage]
          };
        }
        return user;
      })
    );
  };

  return (
    <ChatContext.Provider
      value={{
        mockContacts,
        registeredUsers,
        login,
        logout,
        register,
        loggedUser,
        handleUser,
        handleSelectedUserId,
        selectedUser,
        handleMessages
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };