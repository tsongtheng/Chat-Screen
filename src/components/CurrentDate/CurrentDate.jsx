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
      width={"34.3rem"}
      height={"1.8rem"}
      textAlign={"center"}
      justifyContent={"space-between"}
      alignItems={"center"}
      margin={"0 1.6rem 3.2rem"}
    >
      <Divider
        variant="fullWidth"
        sx={{
          width: "11.6rem",
          color: "#B7B7B7",
          margin: 0,
          borderWidth: ".1rem",
          borderRadius: ".1rem",
        }}
      />
      <Typography
        width={"8.7rem"}
        height={"1.8rem"}
        fontFamily="inherit"
        fontStyle={"normal"}
        fontWeight={400}
        fontSize={"1.4rem"}
        lineHeight={"1.8rem"}
        letterSpacing={0}
        color={"#B7B7B7"}
      >
        {CurrentDate}
      </Typography>
      <Divider
        variant="fullWidth"
        sx={{
          width: "11.6rem",
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
