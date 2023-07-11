import { Divider, Box, Typography } from "@mui/material";
import React from "react";

const CurrentDate = () => {
  //   const getDate = new Date();

  const getCurrentDate = new Date();
  const date = getCurrentDate.getDate();
  // const month = getCurrentDate.getMonth();
  const monthWithQuotes = getCurrentDate.toLocaleString("default", {
    month: "short",
  });
  const month = monthWithQuotes.replace(/"/g, "");
  const year = getCurrentDate.getFullYear();

  const CurrentDate = `${date} ${month}, ${year}`;

  return (
    <Box
      display={"flex"}
      textAlign={"center"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"1.6rem"}
      marginBottom={"3.2rem"}
    >
      <Divider
        variant="fullWidth"
        sx={{
          width: "33%",
          color: "#B7B7B7",
          margin: 0,
          borderWidth: ".1rem",
          borderRadius: ".1rem",
        }}
      />
      <Typography
        fontFamily="inherit"
        fontWeight={400}
        fontSize={"1.4rem"}
        color={"#B7B7B7"}
      >
        {CurrentDate}
      </Typography>
      <Divider
        variant="fullWidth"
        sx={{
          width: "33%",
          color: "#B7B7B7",
          margin: 0,
          borderWidth: ".1rem",
          borderRadius: ".1rem",
        }}
      />
    </Box>
  );
};

export default CurrentDate;
