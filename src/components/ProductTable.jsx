import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductContext } from '../context/productContext';

function createData(serial, name, price, quantity, total) {
    return { serial, name, price, quantity, total };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function ProductTable() {
    const { productList, disabledRows } = useContext(ProductContext);
    const [rows, setRows] = useState(productList.length > 0 ? productList.map((product, index) => createData(index, product.name, product.price, product.quantity, product.total)) : []);

    // console.log(typeof , 'here')
    useEffect(() => console.log(disabledRows), [])

    useEffect(() => {
        const newRows = productList.map((product, index) => createData(index, product.name, product.price, product.quantity, product.total));
        setRows(newRows);
    }, [productList]);

    const handleDragStart = (e, index) => {
        e.dataTransfer.setData('rowIndex', index);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{
                maxWidth: '50vw',
                overflowX: 'auto',
                '@media (max-width: 600px)': {
                    '& table': {
                        fontSize: '0.15rem',
                    },
                    '& th, & td': {
                        padding: '1px',
                    },
                },
            }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Product Serial</TableCell>
                        <TableCell>Item Name</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Quantity</TableCell>
                        <TableCell align="right">Total Amount</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.length > 0 ? rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{
                                    '&:last-child td, &:last-child th': { border: 0 },
                                    ...(disabledRows[index] && { opacity: 0.5, pointerEvents: 'none' })
                                }}
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                            >
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row?.name}
                                </TableCell>
                                <TableCell align="right">{row?.price}</TableCell>
                                <TableCell align="right">{row?.quantity}</TableCell>
                                <TableCell align="right">{row?.total}</TableCell>
                            </TableRow>

                        ))
                            : <></>
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}