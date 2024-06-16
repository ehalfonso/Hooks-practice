import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="pre">{JSON.stringify(user, null, 3)}</pre>
      <button
        className="btn btn-primary"
        onClick={() => setUser({ name: "Robert", email: "r@r.com", id: 456 })}
        aria-label="set"
      >
        Set user
      </button>
    </>
  );
};
