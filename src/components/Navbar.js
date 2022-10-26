import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/gymLogo-logo-white.png';

const Navbar = () => {
  return (
    <Stack
    direction='row'
    // justifyContent='space-between'
    alignItems='center'
    sx={{gap: {sm: '30px', xs: '30px', mt: { sm: '32px', xs: '20px'}}}} px='20px'>
      
      {/*  */}
      <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '64px', height: '64px', margin: '20px 20px'}}/>
      </Link>
      {/*  */}
      <Stack
        direction='row'
        gap="30px"
        fontSize="20px"
        alignItems='flex-end'>
        
        {/*  */}
          <Link to='/' 
          style={{textDecoration: 'none', color: 'white'}}>HOME</Link>
        {/*  */}
          <a href='/#exercises' style={{textDecoration: 'none', color: 'white', marginRight:'20px'}}>EXERCISES</a>
      </Stack>
      {/*  */}
    </Stack>
  )
}

export default Navbar