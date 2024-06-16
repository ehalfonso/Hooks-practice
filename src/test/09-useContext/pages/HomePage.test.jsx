import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../09-useContext/pages/HomePage";
import { UserContext } from "../../../09-useContext/context/UserContext";

describe("Test on <HomePage />", () => {
  const user = {
    id: 1,
    name: "eric",
  };
  test("should show the component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
    // screen.debug();
  });
  test("should show the component with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    //porque el id es numerico
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
