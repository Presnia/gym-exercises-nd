import React, { useState, useEffect } from 'react';
import { Pagination } from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
    console.log(exercises);

    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                sx={{ gap: { lg: '110px', xs: '50px' } }}
            >
                {exercises.map((exercise) => (
                    <ExerciseCard
                        key={exercise.id}
                        exercise={exercise}
                    ></ExerciseCard>
                ))}
            </Stack>
        </Box>
    );
};

export default Exercises;
