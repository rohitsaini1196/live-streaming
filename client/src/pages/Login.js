import { Typography, TextField, Button, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import auth from "../services/auth";
import { useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ email, password });
    auth.login(email, password).then((res) => {
      console.log(res);
      history.push("/");
    });
  };

  useEffect(() => {
    var gg = auth.isAuthenticated();
    //console.log(gg);
    setIsAuthenticated(gg);
  }, []);

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
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Login;
