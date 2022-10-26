import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/gym.png'


const Detail = ( {exerciseDetail}) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        },
    
    ]

  return (
    <Stack
        gap='60px'
        sx={{
           flexDirection: {lg: 'row'},
           p: '20px',
           alignItems: 'center'
        }}
    >
        <img src={gifUrl} alt={name} Loading='lazy' className='detail-image' />
        <Stack
            sx={{
                gap: {lg: '35px', xs: '20px'}
            }}
        >
            <Typography 
                fontWeight={600}
                variant='h3'
                color='#FB2576'
                textTransform='capitalize'
            >
                {name}
            </Typography>
            <Typography
               
                variant='h6'
            >
                <span style={{ textTransform: 'capitalize'}}>{name}</span>{`(s) `} is a great exercise that targets your {target}. The target muscle is shown in red. Be sure to focus on using your {target} when doing the exercise!
            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} 
                    direction='row'
                    gap='24px'
                    alignItems='center'
                > 
                    <Button
                        sx={{
                            background: 'rgba(63, 0, 113,0.5)',
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px'

                        }}
                    >
                        <img src={item.icon} alt={bodyPart} style={{ width: '45px', height: '45px'}}/>
                    </Button>
                    <Typography
                        variant='h6'
                        textTransform='capitalize'
                    >
                        {item.name}
                    </Typography>
                    
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail