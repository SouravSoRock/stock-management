import React from "react";
import { createUseStyles } from "react-jss";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function SideBar() {
  const classes = useStyles();
  return (
    <aside className={classes.mainContainer}>
      <Logo />
      <MainNav />
    </aside>
  );
}

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: "#fcfbdc",
    padding: "1.5rem 2.4rem",
    gridRow: "1/-1",
    borderRightColor: "black",
    borderRight: "10px",
    borderRightWidth: "20px",
  },
});
