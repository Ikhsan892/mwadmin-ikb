import Layout from "@mwadmin/components/Layout";
import { ReactElement } from "react";

function Form() {
  return <div>Form</div>;
}

Form.getLayout = function getLayout(page: ReactElement) {
  // @ts-ignore
  return <Layout>{page}</Layout>;
};

export default Form;
