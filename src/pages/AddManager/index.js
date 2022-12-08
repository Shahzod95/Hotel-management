import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../../context";

const initialize = {
  id: "",
  fullname: "",
  username: "",
  phone: "",
  password: "",
};

const AddManager = () => {
  const { _, dispatch } = useContext(Context);
  const [state, setState] = useState(initialize);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, username, phone, password } = state;
    const newManager = {
      fullname,
      username,
      phone,
      password,
    };
    dispatch({ type: "ADD_MANAGER", payload: newManager });
    setState(initialize);
  };

  const { fullname, username, phone, password } = state;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "75ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
      spacing={2}
    >
      <TextField
        id="outlined-basic"
        label="Fullname..."
        variant="outlined"
        name="fullname"
        onChange={handleInputChange}
        value={fullname}
      />
      <TextField
        id="outlined-basic"
        label="Username..."
        variant="outlined"
        name="username"
        onChange={handleInputChange}
        value={username}
      />
      <TextField
        id="standard-basic"
        label="Phone..."
        variant="outlined"
        name="phone"
        onChange={handleInputChange}
        value={phone}
      />
      <TextField
        id="outlined-basic"
        label="Password..."
        variant="outlined"
        name="password"
        onChange={handleInputChange}
        value={password}
      />
      <Button type="submit" variant="contained">
        Add Manager
      </Button>
    </Box>
  );
};

export default AddManager;
