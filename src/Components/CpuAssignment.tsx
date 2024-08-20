import React from "react";
import { createUseStyles } from "react-jss";

const cpuList = [
  {
    htmlname: "brandname",
    text: "Brand Name",
    required: true,
  },
  {
    htmlname: "serialNo",
    text: "Serial No",
    required: true,
  },
  {
    htmlname: "modelNo",
    text: "Model No",
    required: true,
  },
  {
    htmlname: "problem",
    text: "Problem",
    required: true,
  },
  {
    htmlname: "warrentyStartDate",
    text: "WarrentyStartDate",
    required: true,
  },
  {
    htmlname: "warrentyEndDate",
    text: "WarrentyEndDate",
    required: true,
  },
  {
    htmlname: "ssd",
    text: "SSD",
    required: true,
  },
  {
    htmlname: "hdd",
    text: "HDD",
    required: true,
  },
  {
    htmlname: "ram",
    text: "Ram",
    required: true,
  },
  {
    htmlname: "processor",
    text: "Processor",
    required: true,
  },
  {
    htmlname: "osSerialNumber",
    text: "OS Serial Number",
    required: true,
  },
  {
    htmlname: "os",
    text: "OS",
    required: true,
  },
  {
    htmlname: "chipSet",
    text: "ChipSet",
    required: true,
  },
];

export default function CpuAssignment() {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
      <div className={classes.loginContainer}>
        <h2 className={classes.h2login}>CPU Assignment</h2>
        <form action="#" method="POST" className={classes.form}>
          {cpuList.map((cpuObj) => {
            return (
              <>
                <label htmlFor={cpuObj.htmlname} className={classes.label}>
                  {cpuObj.text} :
                </label>
                <input
                  type="text"
                  id={cpuObj.htmlname}
                  className={classes.input}
                  name={cpuObj.htmlname}
                  required
                />
              </>
            );
          })}
          {/* <label htmlFor="brandname" className={classes.label}>
            Brand Name:
          </label>
          <input
            type="text"
            id="email"
            className={classes.input}
            name="brandname"
            required
          />

          <label htmlFor="serialNo" className={classes.label}>
            Serial No:
          </label>
          <input
            type="text"
            id="email"
            className={classes.input}
            name="serialNo"
            required
          /> */}

          <button type="submit" className={classes.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  mainContainer: {
    backgroundColor: "#fcfcf5",
    height: "100vh",
    padding: "4rem 4.8rem 6.4rem",
  },
  loginContainer: {
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
    height: "110vh",
    width: 400,
    backgroundColor: "#fcfcf5",
    margin: "auto",
    marginTop: "10px",
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
