import reducer, { darkMode } from "../reduxslice/dashboardSlice";

describe("test dashboard reducer", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      color: "primary",
      dark: false,
      notification: [],
    });
  });
  test("toggle ke dark", () => {
    expect(reducer(undefined, darkMode(true))).toEqual({
      color: "primary",
      dark: true,
      notification: [],
    });
  });

  test("toggle ke light", () => {
    let prevState = {
      color: "primary",
      dark: true,
      notification: [],
    };
    expect(reducer(prevState, darkMode(false))).toEqual({
      color: "primary",
      dark: false,
      notification: [],
    });
  });
});
