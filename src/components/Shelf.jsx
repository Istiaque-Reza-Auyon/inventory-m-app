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
    const { shelf, setShelf, productsOnShelf, setProductsOnShelf, disabledRows, setDisabledRows } = useContext(ProductContext);

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
        setDisabledRows(prev => {
            const updatedSet = { ...prev, [draggedRowIndex]: true };
            localStorage.setItem('disabledRows', JSON.stringify(updatedSet));
            return updatedSet;
        });
    };

    return (
        <Box sx={{
            width: '49vw', backgroundColor: "#e3e2de", p: 1, marginTop: 1, borderRadius: 1, '@media (max-width: 600px)': {
                width: '25vw',  // Full width for small devices
                p: 1,  // Less padding on smaller screens
            },
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h2 style={{ marginBottom: 1 }}>Product Shelf</h2>
                <Typography sx={{ color: "black", marginBottom: 2 }}>
                    Drag products from the product list and drop on this shelf.
                </Typography>
            </Box>
            <Stack spacing={2}>
                {Array.from({ length: shelf }).map((_, index) => (
                    <Item key={index}
                        onDrop={(event) => handleDrop(event, index)}
                        onDragOver={handleDragOver}
                        sx={{...(disabledRows[index] && { pointerEvents: 'none' })}}>
                        Shelf {index}
                        <br />
                        <Typography sx={{ fontWeight: "bold", color: "black" }}>
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
