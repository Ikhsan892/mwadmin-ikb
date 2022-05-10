import { render, cleanup } from "@testing-library/react";
import MWBreadcrumbs from "@mwadmin/components/MWBreadcrumbs";
import "@testing-library/jest-dom/extend-expect";

describe("MWBreadcrumbs", () => {
  afterEach(cleanup);
  test("ambil snapshot dulu", () => {
    let comps = render(<MWBreadcrumbs links={[]} />);

    expect(comps).toMatchSnapshot();
  });

  test("ada satu link kalo ditambahin", () => {
    let { getByRole } = render(
      <MWBreadcrumbs
        links={[
          {
            name: "Test-label",
            href: "test-label",
          },
        ]}
      />
    );

    expect(getByRole("link", { name: "bc-link" })).toHaveTextContent(
      "Test-label"
    );

    expect(getByRole("link", { name: "bc-link" })).toHaveAttribute(
      "href",
      "test-label"
    );
  });
});
