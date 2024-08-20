import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";
import { createUseStyles } from "react-jss";

export default function AppLayout() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
}

const useStyles = createUseStyles({
  mainContainer: {
    display: "grid",
    gridTemplateColumns: "26rem 1fr",
    gridTemplateRows: "auto 1fr",
    height: "100vh",
  },
});
