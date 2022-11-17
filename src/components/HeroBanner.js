import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';

import HeroImage from '../assets/images/nikeServuces.webp';


const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '212px', xs: '170px'},
      // ml: {sm: '50px'},
      
    }} position='relative' p='20px'>
      <Typography color='#FB2576' fontWeight='600' fontSize='26px' mb='25px' mt={-8}>
        Omega Fitness
      </Typography>
      {/*  */}
      <Typography fontWeight={700} lineHeight='50px' sx={{fontSize: {lg: '44px', sm: '34px', xs: '30px'}}} mb='35px'>
       Expand Your Fitness <br/> & Discover New Exercises
      </Typography>
      
    
      <Button
        href='#exercises'
        variant='contained' color='secondary'
        sx={{
          backgroundColor: '#FB2576',
          padding: '10px 20px',
          color: '#150050',
          mb: {lg: '20px', sm: '95px'}
        
        }}
      >Exercises</Button>
      
      <Typography
        fontWeight={600}
         color='#FB2576' 
        
         sx={
          {
            opacity: '0.5',
            display: {lg: 'block', xs: 'flex'},
            fontSize: {lg: '200px', sm: '175px', xs: '100px'},
            position: 'relative'
            
         
          }
         }
         fontSize='200px'
         mt={8}
       
         >
        
        Omega
      </Typography>
      <img src={HeroImage} alt="hero" className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner