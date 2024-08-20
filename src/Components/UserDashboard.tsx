import React from "react";
import { createUseStyles } from "react-jss";

export default function UserDashboard() {
  const classes = useStyles();
  return <div className={classes.mainContainer}>DASHBOARD</div>;
}

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: "#fcfcf5",
    height: "100vh",
    padding: "4rem 4.8rem 6.4rem",
  },
});
