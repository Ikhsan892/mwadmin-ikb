import React from "react";
import { Breadcrumbs } from "@mui/material";
import Link from "@mui/material/Link";
import { TMWBreadcrumb } from "@mwadmin/type/MWBreadcrumbsType";

const MwBreadcrumbs: React.FC<TMWBreadcrumb> = ({ links = [] }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator={">"}>
      {links &&
        links.length > 0 &&
        links.map((data, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={data.href}
            aria-label="bc-link"
          >
            {data.name}
          </Link>
        ))}
    </Breadcrumbs>
  );
};

export default MwBreadcrumbs;
