import React, { Fragment } from "react";
import Head from "next/head";

type TPage = {
  title: string;
  padding: number;
  children?: React.ReactNode | undefined;
};

const Page: React.FC<TPage> = ({
  title = "Makersware",
  padding = 0,
  children,
}) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        style={{
          padding: padding,
        }}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Page;
