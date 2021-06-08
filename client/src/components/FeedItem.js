import {
  Paper,
  Typography,
  IconButton,
  CardHeader,
  Avatar,
  Card,
  Menu,
  MenuItem,
  Chip,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Moment from "react-moment";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { blue } from "@material-ui/core/colors";
import userService from "../services/user";
import postService from "../services/post";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@material-ui/icons/ThumbDownAltOutlined";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },

  avatar: {
    marginLeft: "0.5rem",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  title: {
    textAlign: "left",
  },
}));

function FeedItem({ data, cUser, deletePost }) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [user, setUser] = useState({
    image: "https://avatars.githubusercontent.com/u/31476481?v=4",
    name: "Stract User",
  });

  useEffect(async () => {
    if (data.username) {
      const user = await userService.fetchUser(data.username);
      // console.log(user);
      setUser(user);
    }
  }, [data]);

  return (
    <div style={{ margin: "1.5rem 0rem" }}>
      <div>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar
                className={classes.avatar}
                src={user.image}
                alt={user.name}
              />
            }
            action={
              <IconButton aria-label="More actions" onClick={handleMenuOpen}>
                <MoreVertIcon />
              </IconButton>
            }
            title={
              <Typography variant="body1" className={classes.title}>
                {user.name}{" "}
                {/* <span style={{ fontSize: "0.9rem" }} color="grey">
                  @rohits17
                </span> */}
              </Typography>
            }
            subheader={
              <Typography variant="body2" className={classes.title}>
                <Moment fromNow>{data.createdAt}</Moment>
                {data.createdAt === data.updatedAt ? (
                  ""
                ) : (
                  <Chip
                    label="Edited"
                    size="small"
                    variant="outlined"
                    style={{ margin: "0.1rem 0.2rem" }}
                  />
                )}
              </Typography>
            }
          />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Share</MenuItem>
            <MenuItem
              onClick={() => {
                handleMenuClose();
                deletePost(data._id);
              }}
            >
              Delete
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>Report</MenuItem>
          </Menu>

          <div
            style={{
              padding: "0rem 2rem 1rem 1.5rem",
            }}
          >
            <Typography variant="body1" color="textSecondary" component="p">
              {data.content}
            </Typography>
          </div>

          <div
            style={{
              padding: "0rem 2rem 1rem 1.5rem",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0rem 0.5rem",
              }}
            >
              <IconButton size="small" style={{}}>
                <ThumbUpAltOutlinedIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle2">10</Typography>
            </div>

            <div>
              <IconButton size="small" style={{ margin: "0rem 0.5rem" }}>
                <ThumbDownAltOutlinedIcon fontSize="small" />
              </IconButton>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "0rem 0.5rem",
              }}
            >
              <IconButton size="small">
                <CommentOutlinedIcon fontSize="small" />
              </IconButton>
              <Typography variant="subtitle2">60</Typography>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FeedItem;
