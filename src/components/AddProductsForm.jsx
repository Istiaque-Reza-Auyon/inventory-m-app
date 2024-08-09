import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function AddProductsForm() {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        quantity: 0,
        total: 0
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProduct((prevData) => {
            const updatedData = {
                ...prevData,
                [id]: value,
            };

            // Recalculate total if price or quantity is updated
            if (id === 'price' || id === 'quantity') {
                const newTotal = updatedData.price * updatedData.quantity;
                updatedData.total = newTotal;
            }

            return updatedData;
        });
    };


    const handleSubmit = () => {
        console.log('TextField value:', product);
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '10vw' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                {/* <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> */}
                <TextField
                    id="name"
                    label="Name"
                    //   defaultValue="Hello World"
                    // placeholder='Product Name'
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
                    // placeholder='Product Price'
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
                    value={product.price*product.quantity}
                    // onChange={handleChange}
                />
                <Button onClick={handleSubmit} variant="contained">
                    Submit
                </Button>
                {/* <TextField id="outlined-search" label="Search field" type="search" /> */}
                {/* <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        /> */}
            </div>
            {/* <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          disabled
          id="filled-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="filled"
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        />
        <TextField
          id="filled-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div> */}
        </Box>
    );
}