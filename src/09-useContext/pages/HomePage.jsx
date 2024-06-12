import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const HomePage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>HomePage {user?.name}</h1>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ name: "Robert", email: "r@r.com", id: 456 })}
      >
        Set user
      </button>
    </>
  );
};
