
import React, {useEffect,useState} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box,Stack,Typography} from '@mui/material';
import ExerciseCard from './ExerciseCard';
import {exerciseOptions, fetchData} from '../utils/fetchData'
import BodyPart from './BodyPart';

const Exercises = ({exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;
  const idxOfLastExercise = currentPage * exercisesPerPage;
  const idxOfFirstExercise = idxOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(idxOfFirstExercise, idxOfLastExercise);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({top: 1800, behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);
  

  // console.log(exercises);
  return (
    <Box id="exercises"
      sx={{
        mt: {lg: '110px'}
      }}
      mt="50px"
      p="20px"
    >
      <Typography
        variant='h3'
        mb='46px'
        fontWeight={550}
      >
        Results: 
      </Typography>
      <Stack
        direction='row'
        sx={{
          gap: {lg: '110px', xs: '50px'}
        }}
        flexWrap='wrap'
        justifyContent='center'
      >
        {currentExercises.map((exercise, idx) => (
         <ExerciseCard key={idx} exercise={exercise}/>
        ))}

      </Stack>
      <Stack
        mt='100px'
        alignItems='center'

      >
        {exercises.length > 9 && (
          <Pagination 
          variant='text'
          color='secondary'
          
            
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
            
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises