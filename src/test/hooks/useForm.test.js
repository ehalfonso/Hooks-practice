import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe("Test on useForm", () => {
  const initialValue = {
    name: "Eric",
    email: "Df2iJ@example.com",
  };
  test("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialValue));
    expect(result.current).toEqual({
      name: initialValue.name,
      email: initialValue.email,
      formState: initialValue,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });
  test("should change the name on the form", () => {
    const newValue = "Emilio";
    const { result } = renderHook(() => useForm(initialValue));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newValue } });
    });
    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });
  test("should reset the name on the form", () => {
    const { result } = renderHook(() => useForm(initialValue));
    const { onInputChange, onResetForm } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: "Emilio" } });
      onResetForm();
    });
    expect(result.current.name).toBe(initialValue.name);
    expect(result.current.formState.name).toBe(initialValue.name);
  });
});
