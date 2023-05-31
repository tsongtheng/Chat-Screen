import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import {
  BackButtonIcon,
  EditButtonIcon,
} from "../assets/icons/PageActionsIcons";

const PageActions = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={343}
      height={30}
      margin={"0 auto 16px"}
    >
      <BackButtonIcon />
      <Typography
        width={275}
        fontFamily="inherit"
        fontStyle={"normal"}
        fontWeight={700}
        fontSize={24}
        lineHeight={"30px"}
        letterSpacing={0}
        color={"#141E0D"}
      >
        Trip 1
      </Typography>
      <EditButtonIcon />
    </Stack>
  );
};

export default PageActions;
