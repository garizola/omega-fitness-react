import React from 'react'
import { Stack, Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={ {
          
            background: bodyPart === item ? 'rgba(255,255,255,0.7)' :'#150050',
            borderRadius: '10px',
            width: {lg: '270px', xs: '120px'},
            height: '280px',
            cursor: 'pointer',
            gap: '48px',
            p: '10px'
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
        }}
            
    >
        <img src={Icon} alt="weights" style={{width: '40px', height: '40px'}}/>
        <Typography
            fontSize='29px'
            fontWeight='bold'
            color='white'
            textTransform='capitalize'
            sx={ {
            color: bodyPart === item ? '#150050' : 'white'
            
            }}
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart