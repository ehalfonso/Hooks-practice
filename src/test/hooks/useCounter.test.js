import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../hooks/useCounter";

describe("Test on the useCounter", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("should return value equal 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("should increment the value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;
    act(() => increment(1));
    expect(result.current.counter).toBe(101);
  });

  test("should decrement the value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;
    act(() => decrement(1));
    expect(result.current.counter).toBe(99);
  });
  test("should reset the value", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement, reset } = result.current;
    act(() => {
      decrement();
      reset();
    });
    expect(result.current.counter).toBe(100);
  });
});
