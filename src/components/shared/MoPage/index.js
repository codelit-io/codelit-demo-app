import React from "react";
import styles from "./styles";
import { withRouter } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import { compose } from "recompose";
import PageHeader from "../PageHeader";
import Spinner from "../Spinner";

const MoPage = ({ classes, children, img, loading, isCard, title }) => {
  return (
    <>
      <PageHeader img="" title={title} />
      <Spinner loading={loading} color="primary" />
      <section className={`${classes.content} ${isCard && classes.card}`}>
        {children}
      </section>
    </>
  );
};

export default compose(withStyles(styles), withRouter)(MoPage);
