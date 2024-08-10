import * as React from 'react';
import { useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { ProductContext } from '../context/productContext';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Shelf() {
    const { shelf, setShelf, productsOnShelf, setProductsOnShelf, setDisabledRows } = useContext(ProductContext);

    const addShelf = () => {
        setShelf((prev) => {
            const updatedShelf = prev + 1
            localStorage.setItem('shelf', updatedShelf);
            return updatedShelf;
        });
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, index) => {
        const draggedRowIndex = e.dataTransfer.getData('rowIndex');
        setProductsOnShelf((prev) => {
            const updatedList = { ...prev, [index]: draggedRowIndex };
            localStorage.setItem('productsOnShelf', JSON.stringify(updatedList));
            return updatedList;
        })
        setDisabledRows(prev => new Set(prev).add(parseInt(draggedRowIndex)));
    };

    return (
        <Box sx={{ width: '49vw', backgroundColor: "#e3e2de", p: 1, marginTop: 1, borderRadius: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <h2>Product Shelf</h2>
            </Box>
            <Stack spacing={2}>
                {Array.from({ length: shelf }).map((_, index) => (
                    <Item key={index}
                        onDrop={(event) => handleDrop(event, index)}
                        onDragOver={handleDragOver}>
                        Shelf {index}
                        <br />
                        <Typography sx={{fontWeight: "bold", color: "black"}}>
                         {productsOnShelf[index] === undefined ? 'No product on this shelf' : `Product Serial : ${productsOnShelf[index]}`}
                        </Typography>
                        </Item>
                ))}
            </Stack>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button onClick={addShelf} variant="contained" sx={{ m: 1 }}>
                    Add Shelf
                </Button>
            </Box>
        </Box>
    );
}
