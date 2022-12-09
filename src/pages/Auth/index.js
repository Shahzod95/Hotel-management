import { useContext, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Context } from "../../context";

const theme = createTheme();
const initialize = {
  username: "",
  password: "",
};
export default function SignIn() {
  const { state } = useContext(Context);
  const [manager, setManager] = useState(initialize);
  const [user, setUser] = useState(initialize);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log("User: ", user);

  for (let i = 0; i < state.managers.length; i++) {
    if (
      state.managers[i].username === user.username &&
      state.managers[i].password === user.password
    ) {
      // const { username, password } = state.manager[i];
      // setManager((prevState) => ({ ...prevState, username, password }));
      console.log(state.managers[i]);
    }
  }

  console.log(manager);
  // setManager(filterManager[0]);
  // console.log(filterManager[0]);
  const handleSubmit = () => {
    const { username, password } = user;
    if (username === "hotelmanager" && password === "hotelmanager") {
      localStorage.setItem("usernameData", "hotelmanager");
      localStorage.setItem("password", "hotelmanager");
    } else if (username === manager.username && password === manager.password) {
      localStorage.setItem("manager", JSON.stringify(manager));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            HOTEL MANAGEMENT
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              onChange={handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handleChange}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
