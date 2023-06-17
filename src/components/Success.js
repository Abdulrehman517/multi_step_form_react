import React, { Component } from "react";

import AppBar from "@mui/material/AppBar";

import { Typography } from "@mui/material";

export class Success extends Component {
  render() {
    return (
      <>
        <AppBar
          position="static"
          style={{ display: "flex", alignItems: "center", height: "3rem" }}
        >
          Success
        </AppBar>
        <br />
        <br />
        <h2>ThankYou for Submitting data!</h2>
        <Typography>You will be informed Soon!</Typography>
      </>
    );
  }
}

export default Success;
