import { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const initialize = {
    id:'',
    name:'',
    address: '',
    phone: '',
    stars: 0,
    location: 0,
}

const AddHotel = () => {
    const [hotel, setHotel] = useState({initialize})
    return ( 
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            noValidate
            autoComplete="off"
            spacing={2}
        >
        <TextField id="outlined-basic" label="Name..." variant="outlined" />
        <TextField id="outlined-basic" label="Address.." variant="outlined" />
        <TextField id="standard-basic" label="Phone" variant="outlined" />
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} size="large" />
        <Button variant="contained">Qo'shish</Button>
    </Box>
     );
}
 
export default AddHotel;