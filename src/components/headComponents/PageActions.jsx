import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import {
  BackButtonIcon,
  EditButtonIcon,
} from "../../assets/icons/PageActionsIcons";

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
      <Button
        disableRipple
        sx={{
          minWidth: "24px",
          height: "24px",
          margin: "3px 0 3px",
          // margin: "3px 12px 3px 0",
          padding: 0,
        }}
      >
        <BackButtonIcon />
      </Button>

      <Typography
        minWidth={275}
        height={30}
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

      <Button
        disableRipple
        sx={{
          minWidth: "20px",
          height: "20px",
          margin: 0,
          padding: 0,
        }}
      >
        <EditButtonIcon />
      </Button>
    </Stack>
  );
};

export default PageActions;
