import React from "react";
import { createUseStyles } from "react-jss";

export default function Logo() {
  const classes = useStyles();
  return (
    <div className={classes.divContainer}>
      <img
        className={classes.imgContainer}
        src="../../public/stock-management.jpg"
        alt="stockManagamenetLogo"
      />
      <h2 className={classes.h2}>Stock Management</h2>
    </div>
  );
}

const useStyles = createUseStyles({
  divContainer: {
    textAlign: "center",
    paddingTop: "5px",
    marginBottom: "60px",
  },
  imgContainer: {
    height: "9.6rem",
    width: "auto",
    backgroundColor: "#fcfcf5",
  },
  h2: {
    borderBottomStyle: "ridge",
    paddingBottom: "20px",
  },
});
