import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  Paper,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  TextField,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import userService from "../services/user";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function People() {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [filteredUser, setFilteredUsers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(async () => {
    const localusers = await userService.fetchAllUsers();
    if (localusers) {
      // console.log(localusers);
      setUsers(localusers);
    }
  }, []);

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query.length > 1) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.username.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, users]);

  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          size="small"
          placeholder="search users"
          value={query}
          onChange={changeQuery}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
        {filteredUser.map((user, i) => (
          <div key={i}>
            <Typography variant="subtitle2">{user.name}</Typography>
          </div>
        ))}
      </div>
      {/* <div>
        <List
          subheader={<ListSubheader component="div">Online</ListSubheader>}
          style={{ borderRadius: 30 }}
        >
          <ListItem button>
            <ListItemIcon>
              <Avatar
                src="https://avatars.dicebear.com/api/male/Fortwin.svg"
                alt="Fortwin"
              />
            </ListItemIcon>
            <ListItemText primary="FortwinInc" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar
                src="https://avatars.dicebear.com/api/male/Addict.svg"
                alt="Fortwin"
              />
            </ListItemIcon>
            <ListItemText primary="Addict27" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <Avatar
                src="https://avatars.dicebear.com/api/male/TheGuru.svg"
                alt="Fortwin"
              />
            </ListItemIcon>
            <ListItemText primary="TheGuru" />
          </ListItem>
        </List>
      </div> */}
    </div>
  );
}
