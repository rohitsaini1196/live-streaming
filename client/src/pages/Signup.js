import { Typography, TextField, Button, Container } from "@material-ui/core";
import React, { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log({ username, name, email, password });
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
          </form>
        </Container>
      </div>
    </div>
  );
}

export default Register;
