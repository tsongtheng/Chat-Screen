import React from "react";
import { Box, Divider } from "@mui/material";

const HomeIndicator = () => {
  return (
    <Box>
      <Divider
        variant="middle"
        width="134px"
        sx={{
          height: "5px",
          backgroundColor: "#000000",
          margin: "0 120px 8px 121px",
          borderWidth: "1px",
          borderRadius: "100px",
        }}
      />
    </Box>
  );
};

export default HomeIndicator;
