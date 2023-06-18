import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export class FormUserDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <AppBar
          position="static"
          style={{ display: "flex", alignItems: "center", height: "3rem", justifyContent:"center" }}
        >
          Enter User Details
        </AppBar>
        <br />
        <br />
        <TextField
          label="Enter Your First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <br />
        <TextField
          label="Enter Your Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <br />
        <TextField
          label="Enter Your Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />

        <br />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </>
    );
  }
}

export default FormUserDetail;
