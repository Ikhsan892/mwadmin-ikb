import "@testing-library/jest-dom";
import { render } from "../test-util";
import { AppBar } from "../../components/AppBar";

describe("Appbar", () => {
  let appbar: any;
  beforeEach(() => {
    appbar = render(<AppBar opendesktop={false} />);
  });

  it("render appbar correctly", function () {
    expect(appbar).toMatchSnapshot();
  });
});
