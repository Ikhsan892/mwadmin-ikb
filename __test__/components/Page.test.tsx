import { render } from "@testing-library/react";
import Page from "@mwadmin/components/Page";
import MWBreadcrumbs from "@mwadmin/components/MWBreadcrumbs";

describe("Page", () => {
  test("ambil snapshot dulu", () => {
    let comps = render(<Page title={"test-title"}>testu</Page>);

    expect(comps).toMatchSnapshot();
  });
});
