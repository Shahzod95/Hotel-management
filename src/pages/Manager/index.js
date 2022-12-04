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
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const managers = [
    {id:1, fullname:"Kimsanov Kimsan Kimsanovich", phone:"+99891111111", password:'12345', hotel_id:1},
    {id:2, fullname:"MKimsanov Kimsan Kimsanovich", phone:"+99891111111", password:'12345', hotel_id:2},
    {id:3, fullname:"MKimsanov Kimsan Kimsanovich", phone:"+99891111111", password:'12345', hotel_id:3},
    {id:4, fullname:"MKimsanov Kimsan Kimsanovich", phone:"+99891111111", password:'12345', hotel_id:4},
    {id:5, fullname:"MKimsanov Kimsan Kimsanovich", phone:"+99891111111", password:'12345', hotel_id:5}
]

const columns = [
    { id: 'ID', label: 'ID', minWidth: 170 },
    { id: 'name', label: 'Fullname', minWidth: 100 },
    {
      id: 'phone',
      label: 'Phone',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'password',
      label: 'Password',
      minWidth: 170,
      align: 'center',
      format: (value) => value.toFixed(2),
    },
    {
        id: 'hotel_id',
        label: 'Hotel ID',
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

const Manager = () => {
    const [manager, setManager] = useState(managers)
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
        console.log(id)
        setManager(managers.filter(hotel => { 
            return hotel.id !== id
        }))
    }
    
    return (
        <Grid item xs={12} md={4} lg={3}>
            <Paper
                sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 500,
                }}
            > 
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
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
                    {managers
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                        return (
                        <TableRow key={row.id} hover role="checkbox" tabIndex={-1} align="center">
                                <>
                                <TableCell align="center">
                                {row.id}
                                </TableCell>
                                <TableCell align="center">
                                {row.fullname}
                                </TableCell>
                                <TableCell align="center">
                                {row.phone}
                                </TableCell>
                                <TableCell align="center">
                                    {row.password}
                                </TableCell>
                                <TableCell align="center">
                                    {row.hotel_id}
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
                                        onClick={()=> { 
                                            remove(row.id)
                                        }}
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
                count={managers.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
        </Grid>
     );
}
 
export default Manager;