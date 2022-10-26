import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'
import ExerciseCard from './ExerciseCard'

const SimilarExercises = ( { equipmentExercises, targetMuscleExercises }) => {
  return (
    <Box
        sx={{
            mt: {lg: '100px', xs: '0px'},
            padding: '20px'
        }}
    >
        <Typography
            variant='h4'
            mb={5}
            ml={5}
        >

            Exercises that target the same muscle group: 
        </Typography>

        <Stack
        flexWrap='wrap'
            direction='row'
            sx={{
                p: '10',
                position: 'relative'
            }}
        >
            {targetMuscleExercises.length ? 
                <HorizontalScrollbar 

                data={targetMuscleExercises}/>
            : <Loader />
            }
        </Stack>





        <Typography
            variant='h4'
            mb={5}
            mt={5}
            ml={5}
        >

            Exercises that use the similar equipment: 
        </Typography>

        <Stack
            direction='row'
            flexWrap='wrap'
            sx={{
                p: '2',
                position: 'relative'
            }}
        >
            {equipmentExercises.length ? 
                <HorizontalScrollbar data={equipmentExercises}/>
            : <Loader />
            }
        </Stack>

    </Box>
  )
}

export default SimilarExercises