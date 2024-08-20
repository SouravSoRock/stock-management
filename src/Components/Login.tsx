import { createUseStyles } from "react-jss";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  function handleLogin() {
    //TODO: HANDLE AUTHENTICATION
    navigate("/userdashboard");
  }
  return (
    <div className={classes.loginContainer}>
      <h2 className={classes.h2login}>Login</h2>
      <form action="#" method="POST" className={classes.form}>
        <label htmlFor="email" className={classes.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={classes.input}
          name="email"
          required
        />

        <label htmlFor="password" className={classes.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={classes.input}
          name="password"
          required
        />

        <button type="submit" className={classes.button} onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

const useStyles = createUseStyles({
  loginContainer: {
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    height: "30vh",
    width: 500,
    backgroundColor: "#fcfcf5",
    margin: "auto",
    marginTop: "200px",
  },
  h2login: {
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: 5,
  },
  input: {
    padding: 7,
    marginBottom: 15,
    border: "1px solid #ccc",
    borderRadius: 8,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    color: "white",
    backgroundColor: "#007BFF",
    cursor: "pointer",
    fontSize: 16,
    marginTop: 15,
    "&:hover": {
      backgroundColor: "#0056b3",
      border: "none",
    },
  },
});

export default Login;
