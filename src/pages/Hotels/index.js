import { useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Rating from '@mui/material/Rating';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const hotels = [
    {id:1, name:"Mehmonxona", address:"Navoi", phone:"+99891111111", stars:5, location:32.2},
    {id:2, name:"Mehmonxona2", address:"Navoi2", phone:"+99891111111", stars:5, location:32.2},
    {id:3, name:"Mehmonxona3", address:"Navoi3", phone:"+99891111111", stars:5, location:32.2},
    {id:4, name:"Mehmonxona4", address:"Navoi4", phone:"+99891111111", stars:5, location:32.2},
    {id:5, name:"Mehmonxona5", address:"Navoi5", phone:"+99891111111", stars:5, location:32.2}
]

const columns = [
    { id: 'ID', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Name', minWidth: 100 },
    {
      id: 'address',
      label: 'Address',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'phone',
      label: 'Phone',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'stars',
      label: 'Stars',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'update',
        label: 'Update',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },
    {
        id: 'delete',
        label: 'Delete',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toFixed(2),
    },

  ];

const Hotels = () => {
    const [hotel, setHotel] = useState(hotels)
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
    };
    const remove = (id) => {
        setHotel(hotels.filter(hotel => hotel.id !== id))
    }
    
    return ( 
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
                overflow: 'auto',
                }}
            >
            <TableContainer sx={{ maxHeight: 440 }} size="small">
                <Table stickyHeader aria-label="sticky table" size="small">
                <TableHead>
                    <TableRow>
                    {columns.map((column) => (
                        <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        >
                        {column.label}
                        </TableCell>
                    ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {hotels
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow key={row.id} hover role="checkbox" tabIndex={-1} align="center">
                                <>
                                <TableCell align="center">
                                    {row.id}
                                </TableCell>
                                <TableCell align="center">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">
                                    {row.address}
                                </TableCell>
                                <TableCell align="center">
                                    {row.phone}
                                </TableCell>
                                <TableCell align="center">
                                    <Rating name="half-rating" defaultValue={row.stars} precision={0.5} size="large" readOnly />
                                </TableCell>
                                <TableCell align="center">
                                    <Button variant="contained">
                                        <EditIcon />
                                    </Button>
                                </TableCell>
                                <TableCell align="center">
                                    <Button 
                                        variant="contained" 
                                        color="error"
                                        onClick={remove}
                                        >
                                        <DeleteIcon />
                                    </Button>
                                </TableCell>
                                </>
                        </TableRow>
                        );
                    })}
                </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={hotels.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </Grid>
     );
}
 
export default Hotels;