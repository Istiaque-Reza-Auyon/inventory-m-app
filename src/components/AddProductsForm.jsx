import * as React from 'react';
import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ProductContext } from '../context/productContext';
import toast, { Toaster } from 'react-hot-toast';



export default function AddProductsForm() {
    const { product, handleChange, handleSubmit } = useContext(ProductContext);

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {
                    marginRight: 1,
                    width: '10vw',
                    '@media (max-width: 600px)': {
                        width: '10vw',
                    },
                },
                '& .MuiInputBase-input': {
                    '@media (max-width: 600px)': {
                        fontSize: '0.8rem',
                    },
                },
            }}
            autoComplete="off"
            onSubmit={() => {
                handleSubmit();
                toast.success("Product added successfully!"); // Show success toast
            }}
        >
            <div>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <TextField
                        id="name"
                        label="Name"
                        value={product.name}
                        InputProps={{
                            readOnly: false,
                        }}
                        onChange={handleChange}
                        onInput={(e) => {
                            if (e.target.value.length === 1) {
                                e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
                            }
                        }} // Input validation for the first character
                        required
                    />
                    <TextField
                        id="price"
                        label="Price"
                        value={product.price}
                        InputProps={{
                            readOnly: false,
                        }}
                        sx={{
                            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
                                WebkitAppearance: 'none',
                                margin: 0,
                            },
                            '& input[type=number]': {
                                MozAppearance: 'textfield',
                            },
                        }}
                        onChange={handleChange}
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
                        }}
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
                        value={'$' + product.total}
                    />
                    <Button type='submit' variant="contained" sx={{ marginLeft: '0.5vw' }}>
                        Add
                    </Button>
                </Box>
            </div>
        </Box>
    );
}

