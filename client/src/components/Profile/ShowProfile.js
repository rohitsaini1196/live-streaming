import React, { useState, useEffect } from "react";
import ProfilePosts from "../Posts/ProfilePosts";
import ProfileHeader from "./ProfileHeader";
import ProfileTabs from "./ProfileTabs";
import userService from "../../services/user";
import { useParams } from "react-router-dom";
import { CircularProgress, Paper, Typography } from "@material-ui/core";
import ScheduledStream from "./ScheduledStream";

function ShowProfile() {
  const { username } = useParams();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isUserFound, setIsUserFound] = useState(false);
  useEffect(async () => {
    if (username) {
      const user = await userService.fetchUser(username);
      if (user) {
        setUser(user);
        setIsUserFound(true);
      }
      setIsLoading(false);
    }
  }, [username]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isUserFound ? (
            <div>
              <ProfileHeader user={user} />
              <ProfileTabs
                child1={<ProfilePosts username={user.username} />}
                child2={<ScheduledStream />}
              />
            </div>
          ) : (
            <UserNotFound username={username} />
          )}
        </div>
      )}
    </div>
  );
}

export default ShowProfile;

function Loading() {
  return (
    <div style={{ padding: "1rem" }}>
      <CircularProgress />
    </div>
  );
}

function UserNotFound({ username }) {
  return (
    <div>
      <Paper style={{ padding: "2rem" }}>
        <Typography>
          User <strong>{username}</strong> does not exist on our platform
        </Typography>
      </Paper>
    </div>
  );
}
