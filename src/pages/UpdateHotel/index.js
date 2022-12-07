import { useState, useContext, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Context } from "../../context";
import { useParams } from "react-router-dom";
import { Rating, Typography } from "@mui/material";
import { Stack } from "@mui/system";

const initialize = {
  id: "",
  name: "",
  address: "",
  hotelPhone: "",
  stars: parseFloat(0),
  location: 0,
};

const UpdateHotel = () => {
  const { id } = useParams();
  const { state, dispatch } = useContext(Context);
  const [hotel, setHotel] = useState(initialize);
  useEffect(() => {
    const hotelId = id;
    const selectedHotel = state.hotels.find(
      (hotel) => hotel.id === parseInt(hotelId)
    );
    setHotel(selectedHotel);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_HOTEL", payload: hotel });
    console.log("HOTEL : ", hotel);
    setHotel(initialize);
  };

  const { name, address, hotelPhone, stars } = hotel;
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
        name="name"
        onChange={handleInputChange}
        value={name}
        required
      />
      <TextField
        id="standard-basic"
        label="Address..."
        variant="outlined"
        name="address"
        onChange={handleInputChange}
        value={address}
        required
      />
      <TextField
        id="outlined-basic"
        label="Phone..."
        variant="outlined"
        name="hotelPhone"
        onChange={handleInputChange}
        value={hotelPhone}
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
      <Button
        type="submit"
        variant="contained"
        // component={NavLink}
        // to="/hotels"
      >
        Update Manager
      </Button>
    </Box>
  );
};

export default UpdateHotel;
