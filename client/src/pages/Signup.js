import {
  Typography,
  TextField,
  Button,
  Container,
  Link,
} from "@material-ui/core";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Register() {
  let history = useHistory();
  const { isAuthenticated, logout, register } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();
    console.log({ username, name, email, password });
    const res = await register({ name, username, email, password });

    if (res) {
      console.log(res);
      history.push("/");
      window.location.reload(true);
    } else {
      console.log("Something went very wrong");
    }
  };

  return (
    <div>
      <Typography variant="h6">Sign Up</Typography>

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
                label="Username"
                variant="outlined"
                style={{ margin: "0.5rem 0rem" }}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
              <TextField
                label="Name"
                variant="outlined"
                style={{ margin: "0.5rem 0rem" }}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
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
              Already haven an account ? <Link href="/signup">Login </Link> Here
            </Typography>
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Register;
