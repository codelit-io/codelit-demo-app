import React from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import MUILink from "@material-ui/core/Link";
import { Link } from "react-router-dom";

const MoBreadcrumbs = ({ breadcrumbsOptions }) => {
  return (
    <Breadcrumbs
      aria-label="breadcrumb"
      maxItems={3}
      style={{ marginLeft: "1rem" }}
    >
      {breadcrumbsOptions.map((item, index) => (
        <MUILink
          component={Link}
          color="inherit"
          key={index}
          to={item.url || "#"}
          // onClick={handleClick}
        >
          {item.title}
        </MUILink>
      ))}
    </Breadcrumbs>
  );
};

export default MoBreadcrumbs;
