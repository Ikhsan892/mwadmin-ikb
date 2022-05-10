import Layout from "../components/Layout";
import { ReactElement } from "react";

function Home() {
  return <div>Home</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  // @ts-ignore
  return <Layout>{page}</Layout>;
};

export default Home;
