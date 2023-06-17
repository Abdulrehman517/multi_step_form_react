import React, { Component } from "react";
import { Button, TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";

export class FormPersonalDetail extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <AppBar
          position="static"
          style={{ display: "flex", alignItems: "center", height: "3rem" }}
        >
          Enter Personal Details
        </AppBar>
        <br />
        <br />
        <TextField
          label="Enter Your Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <br />
        <TextField
          label="Enter Your City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <br />
        <TextField
          label="Enter Your Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />

        <br />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Continue
        </Button>
        <br />
        <br />
        <Button variant="contained" color="secondary" onClick={this.back}>
          Back
        </Button>
      </>
    );
  }
}

export default FormPersonalDetail;
