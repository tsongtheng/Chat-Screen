import React from "react";
import { Box, Typography } from "@mui/material";

const userMessage =
  "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money";

const User = ({ message }) => {
  return (
    <Box marginBottom={"2rem"} padding={"0 .4rem 0 25%"}>
      <Box
        backgroundColor="#1C63D5"
        padding=".8rem"
        borderRadius="1.2rem 1.2rem 0 1.2rem"
        boxShadow="none"
      >
        <Typography
          fontFamily="inherit"
          fontWeight={400}
          fontSize="1.4rem"
          lineHeight="1.8rem"
          gap=".8rem"
          color="#ffffff"
        >
          {message ? message : userMessage}
        </Typography>
      </Box>
    </Box>
  );
};

export default User;
