import {
  Typography,
  TextField,
  Button,
  Container,
  Link,
} from "@material-ui/core";
import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  let history = useHistory();
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, password });
    login(email, password).then((res) => {
      console.log(res);
      history.push("/");
      window.location.reload(true);
    });
  };

  return (
    <div>
      <Typography variant="h6">Log In</Typography>

      <p> isAuthenticated ? {isAuthenticated ? "yes" : "no"}</p>

      <div style={{ marginTop: "3rem" }}>
        <Container maxWidth="xs">
          <form autoComplete="off" onSubmit={submitForm}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "5px",
              }}
            >
              <TextField
                label="Email"
                variant="outlined"
                style={{ margin: "0.5rem 0rem" }}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                label="Password"
                type="password"
                variant="outlined"
                style={{ margin: "0.5rem 0rem" }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Button
                style={{ textTransform: "none" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>
            </div>

            <Typography style={{ padding: "1rem 0.5rem" }}>
              New to platform? <Link href="/signup">Create Account </Link> Here
            </Typography>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Login;
