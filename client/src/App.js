import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavBar from "./components/navbar";

class App extends Component {
  render() {
    return (
      <div>
        <AppBar color="primary" position="static">
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
            >
              Material-UI React Practice
            </Typography>
            <NavBar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
