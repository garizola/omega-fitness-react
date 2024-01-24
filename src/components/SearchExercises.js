import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
// import { handleBreakpoints } from '@mui/system';
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      // console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) =>
          item.name.toLowerCase().includes(search) ||
          item.target.toLowerCase().includes(search) ||
          item.equipment.toLowerCase().includes(search) ||
          item.bodyPart.toLowerCase().includes(search)
      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Discover Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "0px",
              color: "#150050",
            },
            width: { lg: "890px", xs: "350px" },
            backgroundColor: "#fff",
            opacity: 0.8,
            borderRadius: "10px",
            height: "50px",
          }}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises..."
          type="text"
        />
        <Button
          className="search-btn"
          variant="contained"
          color="secondary"
          sx={{
            backgroundColor: "#FB2576",
            padding: "10px 20px",
            color: "#150050",
            // textTransform: 'none',
            width: { lg: "130px", xs: "80px" },
            fontSize: { lg: "16px", xs: "12px" },
            height: "50px",
            // marginLeft: '20px'
          }}
          onClick={handleSearch}
        >
          SEARCH
        </Button>
      </Box>
      {/* <Box
          sx={{
            position: 'relative',
            width: '100%',
            p: '20px'
          }}
        >
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart />
        </Box> */}
    </Stack>
  );
};

export default SearchExercises;
