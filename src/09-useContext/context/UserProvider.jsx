import React, { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//   email: "ehalfonso@gmail.com",
//   id: 123,
//   name: "Ezequiel",
// };
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  return (
    // <UserContext.Provider value={{ hola: "Mundo", user }}>
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
