import React from "react";
import { Box, Divider } from "@mui/material";

const HomeIndicator = () => {
  return (
    <Box
      display={"flex"}
      flex
      alignItems={"center"}
      justifyContent={"center"}
      marginBottom={"1rem"}
    >
      <Divider
        variant="middle"
        sx={{
          width: "13.4rem",
          height: ".5rem",
          backgroundColor: "#000000",
          margin: 0,
          borderWidth: ".1rem",
          borderRadius: "10rem",
        }}
      />
    </Box>
  );
};

export default HomeIndicator;
