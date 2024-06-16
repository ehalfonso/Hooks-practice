import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../09-useContext/context/UserContext";
import { LoginPage } from "../../../09-useContext/pages/LoginPage";

describe("Test on <LoginPage />", () => {
  const user = { name: "Robert", email: "r@r.com", id: 456 };
  const setUserMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test("should show component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  test("should show component with user", () => {
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    // screen.debug();
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
