import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" color='primary' sx={{ backgroundColor: '#ff5722' }}>
        <Toolbar variant="dense" sx={{display: 'flex', justifyContent: 'center'}}>
          {/* <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" component="div" >
            Inventory Management System
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
