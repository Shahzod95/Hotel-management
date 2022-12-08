import { useState, useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../../context";
import { useParams } from "react-router-dom";

const initialize = {
  id: "",
  fullname: "",
  username: "",
  phone: "",
  password: "",
  hotel_id: 0,
};

const UpdateManager = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(Context);
  const [manager, setManager] = useState(initialize);
  useEffect(() => {
    const managerId = id;
    const selectedManager = state.managers.find(
      (manager) => manager.id === parseInt(managerId)
    );
    setManager(selectedManager);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setManager({ ...manager, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_MANAGER", payload: manager });
    console.log("Manager : ", manager);
    setManager(initialize);
  };

  const { fullname, username, phone, password, hotel_id } = manager;
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
      <TextField
        id="outlined-basic"
        label="Hotel id..."
        variant="outlined"
        name="hotel_id"
        onChange={handleInputChange}
        value={hotel_id}
      />
      <Button type="submit" variant="contained">
        Update Manager
      </Button>
    </Box>
  );
};

export default UpdateManager;
