import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ProductContext } from '../context/productContext';


export default function AddProductsForm() {
   const {product, handleChange, handleSubmit} = useContext(ProductContext);

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    marginRight: 1,
                    width: '10vw',
                    '@media (max-width: 600px)': {
                        width: '10vw',  // Adjust the width for very small screens
                    },
                },
                '& .MuiInputBase-input': {
                    '@media (max-width: 600px)': {
                        fontSize: '0.8rem',  // Smaller font size for small screens
                    },
                },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <TextField
                        id="name"
                        label="Name"
                        value={product.name}
                        InputProps={{
                            readOnly: false,
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        id="price"
                        label="Price"
                        type="number"
                        value={product.price}
                        InputProps={{
                            readOnly: false,
                        }}
                        sx={{
                            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                WebkitAppearance: 'none', // Hides increment buttons in Chrome/Safari
                                margin: 0,
                            },
                            '& input[type=number]': {
                                MozAppearance: 'textfield', // Hides increment buttons in Firefox
                            },
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        id="quantity"
                        label="Qty"
                        placeholder='Quantity'
                        type="number"
                        value={product.quantity}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={handleChange}
                    />
                    <TextField
                        disabled
                        id="total"
                        label="Total"
                        value={product.price * product.quantity}
                    />
                    <Button onClick={handleSubmit} variant="contained" sx={{marginLeft: '0.5vw'}}>
                        Add
                    </Button>
                </Box>
            </div>
        </Box>
    );
}