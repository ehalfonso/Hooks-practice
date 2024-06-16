import { render, screen } from "@testing-library/react";
import { MainApp } from "../../09-useContext/MainApp";
import { MemoryRouter } from "react-router-dom";

describe("Test on <MainApp />", () => {
  test("should show the HomePage", () => {
    render(
      //Sustituir del BrowserRouter por MemoryRouter
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText("HomePage")).toBeTruthy();
  });
  test("should show the LoginPage", () => {
    render(
      //Utilizr initialEntries para simular el segmento de la url
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    // screen.debug();
    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
  test("should show the AboutPage", () => {
    render(
      //Utilizr initialEntries para simular el segmento de la url
      <MemoryRouter initialEntries={["/about"]}>
        <MainApp />
      </MemoryRouter>
    );
    screen.debug();
    expect(screen.getByText("AboutPage")).toBeTruthy();
  });
});
