import { useState, useContext, forwardRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Context } from "../../context";

const initialize = {
  id: "",
  name: "",
  address: "",
  hotelPhone: "",
  stars: 0.0,
  location: 0,
};

const AddHotel = () => {
  const { _, dispatch } = useContext(Context);
  const [state, setState] = useState(initialize);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, address, hotelPhone, stars } = state;
    console.log(stars);
    const newHotel = {
      name,
      address,
      hotelPhone,
      stars: parseFloat(stars),
    };
    dispatch({ type: "ADD_HOTEL", payload: newHotel });
    console.log("Hotel : ", newHotel);
    setState(initialize);
  };

  const { name, address, hotelPhone, stars } = state;
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "75ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
      spacing={2}
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Name..."
        variant="outlined"
        name="name"
        value={name}
        onChange={handleInputChange}
        required
      />
      <TextField
        id="outlined-basic"
        label="Address.."
        variant="outlined"
        name="address"
        value={address}
        onChange={handleInputChange}
        required
      />
      <TextField
        id="standard-basic"
        label="Phone"
        variant="outlined"
        name="hotelPhone"
        value={hotelPhone}
        onChange={handleInputChange}
        required
      />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" component="h5">
          Stars :
        </Typography>
        ;
        <Rating
          name="stars"
          defaultValue={2.5}
          precision={0.5}
          size="large"
          value={parseFloat(stars)}
          onChange={handleInputChange}
          required
        />
      </Stack>
      <Button type="submit" variant="contained">
        Add Hotel
      </Button>
    </Box>
  );
};

export default AddHotel;
