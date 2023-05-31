import { Divider, Stack, Typography } from "@mui/material";
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
    <Stack
      width={"87px"}
      height={"18px"}
      flexDirection={"row"}
      alignItems={"center"}
      margin={"97px 16px 32px"}
    >
      <Divider
        variant="middle"
        width="116px"
        sx={{
          backgroundColor: "#B7B7B7",
          margin: "8.5px 12px 8.5px 0",
          borderWidth: "1px",
          borderRadius: "1px",
        }}
      />
      <Typography
        minWidth={"87px"}
        height={"18px"}
        fontFamily="inherit"
        fontStyle={"normal"}
        fontWeight={400}
        fontSize={"0.86rem"}
        // fontSize={"0.875rem"}
        lineHeight={"18px"}
        letterSpacing={0}
        color={"#B7B7B7"}
      >
        {CurrentDate}
      </Typography>
      <Divider
        variant="middle"
        width="116px"
        sx={{
          backgroundColor: "#B7B7B7",
          margin: "8.5px 0 8.5px 12px",
          borderWidth: "1px",
          borderRadius: "1px",
        }}
      />
    </Stack>
  );
};

export default CurrentDate;
