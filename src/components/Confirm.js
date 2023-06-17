import React, { Component } from "react";
import { Button, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const {
      values: { firstName, lastName, occupation, email, city, bio },
    } = this.props;
    return (
      <>
        <AppBar
          position="static"
          style={{ display: "flex", alignItems: "center", height: "3rem" }}
        >
          Confirm User Data
        </AppBar>
        <br />
        <br />
        <Grid container justifyContent="center">
          <Grid item xs={2}>
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={firstName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={lastName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Occupation" secondary={occupation} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={bio} />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <br />
        <br />
        <Button variant="contained" onClick={this.continue}>
          Confirm & Continue
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

export default Confirm;
