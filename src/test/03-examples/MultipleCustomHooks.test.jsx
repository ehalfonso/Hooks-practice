import { render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../03-examples/MultipleCustomHooks";
import { useFetch } from "../../hooks/useFetch";

// jest.mock("../../hooks/useFetch");

describe("Test on MultipleCustomHooks", () => {
  test("should show the default component", () => {
    // useFetch.mockReturnValue({
    //   data: null,
    //   isLoading: true,
    //   hasError: false,
    // });
    render(<MultipleCustomHooks />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText("Pockemon information"));
    const nextButton = screen.getByRole("button", { name: "Next" });
    expect(nextButton.disabled).toBeTruthy();
  });
  //   test("should show an image", () => {
  //     useFetch.mockReturnValue({
  //       data: [{ name: "Eric", url: "https://pokeapi.co/api/v2/pokemon/1/" }],
  //       isLoading: false,
  //       hasError: null,
  //     });
  //     render(<MultipleCustomHooks />);
  //     screen.debug();
  //   });
});
