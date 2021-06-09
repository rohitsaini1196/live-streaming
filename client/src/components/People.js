import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  CardHeader,
  CardActionArea,
  TextField,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import userService from "../services/user";

const useStyles = makeStyles((theme) => ({
  peoplediv: {
    background: "transparent",
    "&:hover": {
      background: "#242B2E",
    },
  },
}));

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
    if (query.length > 0) {
      setFilteredUsers(
        users.filter(
          (user) =>
            user.name.toLowerCase().includes(query.toLowerCase()) ||
            user.username.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setFilteredUsers([]);
    }
  }, [query, users]);

  return (
    <div>
      <div>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
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
            <SearchItem user={user} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SearchItem({ user }) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.peoplediv} elevation={0}>
        <CardActionArea href={"/u/rohit"}>
          <CardHeader
            avatar={<Avatar src={user.image} alt={user.name} />}
            title={<Typography variant="body1">{user.name}</Typography>}
            subheader={"@" + user.username}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
