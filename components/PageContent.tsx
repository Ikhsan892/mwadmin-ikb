import React from "react";

type TPageContent = {
  left: number;
  right: number;
  top: number;
  bottom: number;
  children?: React.ReactNode | undefined;
};

const PageContent: React.FC<TPageContent> = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  children,
}) => {
  return (
    <div
      data-testid="page-content"
      style={{
        paddingLeft: left,
        paddingRight: right,
        paddingTop: top,
        paddingBottom: bottom,
      }}
    >
      {children}
    </div>
  );
};

export default PageContent;
