import React from "react";
import { Stack, Typography, Button } from "@mui/material";
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
      width={"34.3rem"}
      height={"3rem"}
      margin={"0 auto 1.6rem"}
    >
      <Button
        disableRipple
        sx={{
          minWidth: "2.4rem",
          height: "2.4rem",
          margin: ".3rem 0 .3rem",
          // margin: "3px 12px 3px 0",
          padding: 0,
        }}
      >
        <BackButtonIcon />
      </Button>

      <Typography
        minWidth={"27.5rem"}
        height={"3rem"}
        fontFamily="inherit"
        fontStyle={"normal"}
        fontWeight={700}
        fontSize={"2.4rem"}
        lineHeight={"3rem"}
        letterSpacing={0}
        color={"#141E0D"}
      >
        Trip 1
      </Typography>

      <Button
        disableRipple
        sx={{
          minWidth: "2rem",
          height: "2rem",
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
