import { darkMode } from "../../action";

describe("Test action dashboardActions", () => {
  test("return true", () => {
    let hasil = darkMode(true);
    expect(hasil.data.dark).toBeTruthy();
  });

  test("return false", () => {
    let hasil = darkMode(false);
    expect(hasil.data.dark).toBeFalsy();
  });
});
