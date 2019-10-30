import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { Home, Book, AccountBox } from '@material-ui/icons';
function NavBar(props) {
  return (
    <List component="nav">
      <ListItem component="div">
      
        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Home
          </Typography>
        </ListItemText>
        <Home />
        

        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Posts
          </Typography>
        </ListItemText>
        <Book />

        <ListItemText inset>
          <Typography color="inherit" variant="title">
            Contact
          </Typography>
        </ListItemText>
        <AccountBox />
        
      </ListItem>
    </List>
  );
}

export default NavBar;
