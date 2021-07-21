import React from "react";
import Helmet from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome to DigiWholesale || Home",
  description: "Buy all kinds of products for wholesale price!",
  keywords: "electronics, wholesale, cheap rates good products",
};

export default Meta;
