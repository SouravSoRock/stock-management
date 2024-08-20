import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink, useNavigate } from "react-router-dom";

export default function MainNav() {
  const navigate = useNavigate();
  const classes = useStyles();
  const navLinkList = [
    {
      liClassName: classes.liLink,
      urlTo: "/userdashboard",
      navLinkClassName: classes.NavLink,
      text: "Home",
    },
    {
      liClassName: classes.liLink,
      urlTo: "/userdashboard",
      navLinkClassName: classes.NavLink,
      text: "IP Assignment",
    },
    {
      liClassName: classes.liLink,
      urlTo: "/userdashboard",
      navLinkClassName: classes.NavLink,
      text: "Register User",
    },
    {
      liClassName: classes.liLink,
      urlTo: "/addCpu",
      navLinkClassName: classes.NavLink,
      text: "CPU",
    },
    {
      liClassName: classes.liLink,
      urlTo: "/userdashboard",
      navLinkClassName: classes.NavLink,
      text: "UPS",
    },
    {
      liClassName: classes.liLink,
      urlTo: "/userdashboard",
      navLinkClassName: classes.NavLink,
      text: "Monitor",
    },
  ];
  function handleNavigation(url: string) {
    navigate(url);
  }
  return (
    <nav>
      <ul className={classes.unorderList}>
        {navLinkList.map((navObj) => (
          <li
            className={navObj.liClassName}
            onClick={() => handleNavigation(navObj.urlTo)}
          >
            <NavLink to={navObj.urlTo} className={navObj.navLinkClassName}>
              {navObj.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const useStyles = createUseStyles({
  unorderList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  NavLink: {
    textDecoration: "none",

    fontFamily: "sans-serif",
    fontWeight: "700",
    color: "black",
  },
  liLink: {
    listStyleType: "none",
    padding: "10px 10px 10px 20px",
    "&:hover": {
      backgroundColor: "#a3a39d",
      borderRadius: "20px",
    },
  },
});
