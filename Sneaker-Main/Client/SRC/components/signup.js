import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
 
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Sneakers Seekers
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
 
const theme = createTheme();
 
export default function SignUp() {
  const [errorMessage, setErrorMessage] = React.useState(false);
 
  const [avatar, setAvatar] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    //post img to imgbb
 
    if (avatar) {
      let formData = new FormData();
      formData.append("image", avatar);
      formData.append("key", `c8818fe821c0aee81ebf0b77344f0e2b`);
      axios.post("https://api.imgbb.com/1/upload", formData).then((res) => {
        const imgURL = res.data.data.url;
        axios
          .post("https://mern-sneaker-project.herokuapp.com/api/users", {
            fullname:
              event.target.firstName.value + " " + event.target.lastName.value,
            email: event.target.email.value,
            password: event.target.password.value,
            avatar: imgURL ? imgURL : "",
          })
          .then((res) => {
            alert("Sign up successfully! Now you can sign in");
            navigate("/sign-in");
          });
      });
    } else {
      axios
        .post("https://mern-sneaker-project.herokuapp.com/api/users", {
          fullname:
            event.target.firstName.value + " " + event.target.lastName.value,
          email: event.target.email.value,
          password: event.target.password.value,
          avatar: "",
        })
        .then((res) => {
          alert("Sign up successfully! Now you can sign in");
          navigate("/sign-in");
        })
        .catch((err) => {
          setErrorMessage(err?.response?.data?.message);
        });
    }
  };
 
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "secondary.main",
            }}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  sx={{
                    marginTop: -1,
                    marginBottom: 1,
                  }}
                >
                  (optional)
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    component="label"
                    sx={{
                      width: 1 / 3,
                    }}
                  >
                    Upload File
                    <TextField
                      type="file"
                      sx={{
                        display: "none",
                      }}
                      onChange={(e) => setAvatar(e.target.files[0])}
                      name="avatar"
                    />
                  </Button>
                  <Typography
                    sx={{
                      ml: 2,
                    }}
                  >
                    {avatar?.name}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  to="/sign-in"
                  variant="body2"
                  style={{
                    color: "blue",
                    fontSize: "14px",
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 2 }} />
      </Container>
    </ThemeProvider>
  );
}
 
