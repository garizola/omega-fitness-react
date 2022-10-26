import React from 'react'
import { Box, Stack, Typography } from '@mui/material'


const ExerciseVideos = ( { exerciseVideos, name}) => {

  if(!exerciseVideos.length) return 'loading...';

  return (
    <Box
      sx={{
        marginTop: {lg: '200px', xs: '20px'}
      }}
      p='20px'
    >
      <Typography
        variant='h4'
        mb='50px'
      >
        Check out more <span style={{color: '#FB2576', fontWeight: '600', textTransform: 'capitalize'}}>{name}</span> videos here:

      </Typography>

      <Stack
     
        justifyContent='space-evenly'
        flexWrap='wrap'
        alignItems='center'
        
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '70px', xs: '0px'},
          mb: '20pxs'
        }}
        
      >

        {exerciseVideos?.slice(0, 6).map((item, idx) => (
          <a
            key={idx}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img 
              src={item.video.thumbnails[0].url} alt={item.video.title}
            />
            <Box>
              <Typography
                variant='H5'
                color='#fff'
              >
                {item.video.title}
              </Typography>
              <Typography
                variant='h6'
                color='#FB2576'
              >
                {item.video.channelName}
              </Typography>
            </Box>

          </a>
        ))}

      </Stack>
      
    </Box>
  )
}

export default ExerciseVideos