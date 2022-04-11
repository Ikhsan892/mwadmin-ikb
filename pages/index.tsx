import Layout from "../components/Layout";
import { ReactElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { darkMode } from "../action";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(darkMode(true));
  }, []);
  return <div>Home A a</div>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  // @ts-ignore
  return <Layout>{page}</Layout>;
};

export default Home;
