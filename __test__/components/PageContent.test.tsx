import { render, cleanup } from "@testing-library/react";
import PageContent from "@mwadmin/components/PageContent";
import "@testing-library/jest-dom";

describe("PageContent", () => {
  afterEach(cleanup);
  test("ambil snapshot dulu", () => {
    let comps = render(
      <PageContent left={12} right={12} top={12} bottom={12} />
    );

    expect(comps).toMatchSnapshot();
  });

  test("apakah ada padding nya?", () => {
    let screen = render(
      <PageContent left={12} right={12} top={12} bottom={12} />
    );

    expect(screen.getByTestId("page-content")).toHaveStyle({
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 12,
      paddingBottom: 12,
    });
  });
});
