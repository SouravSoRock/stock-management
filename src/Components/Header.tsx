import React from "react";
import { createUseStyles } from "react-jss";

export default function Header() {
  const classes = useStyles();
  return (
    <header className={classes.mainContainer}>
      <button className={classes.button}>Logout</button>
    </header>
  );
}

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: "#b0b0a5",
    padding: "1.2rem 4.8rem",
  },
  button: {
    padding: "5px 5px",
    float: "right",
    cursor: "pointer",
    backgroundColor: "#f5f531",
    borderRadius: "8px",
    width: "80px",
    height: "30px",
    fontWeight: "bold",
  },
});
