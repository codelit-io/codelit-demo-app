/**
 * Helmet adds SEO meta tags to pages
 * @prop {Object} description - Describe the page
 * @prop {Object} title - Title for the page
 * @prop {Object} path - Path of the current page
 * @returns renders your wrapped components
 */

import React from "react";
import { Helmet } from "react-helmet";

const MoHelmet = ({ description, title, path }) => (
  <Helmet>
    {/* html attributes */}
    <html lang="en" amp />
    {/* body attributes */}
    <body className="root" />
    {/* title attributes and value */}
    <title itemProp="name" lang="en">
      {title}
    </title>
    {/* base element */}
    {path && <base target="_blank" href={path} />}
    {/* multiple meta elements */}
    <meta name="description" content={description} />
    <meta property="og:type" content="article" />
    {/* multiple link elements */}

    {path && <link rel="canonical" href={path} />}
  </Helmet>
);

export default MoHelmet;
