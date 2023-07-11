import React from "react";
import { Box, Stack, Typography, IconButton } from "@mui/material";
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
      px={"1.6rem"}
      marginBottom={"1.6rem"}
    >
      <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
        <IconButton disableRipple sx={{ padding: 0, marginRight: "1rem" }}>
          <BackButtonIcon />
        </IconButton>

        <Typography
          fontFamily="inherit"
          fontWeight={700}
          fontSize={"2.4rem"}
          letterSpacing={0}
          color={"#141E0D"}
        >
          Trip 1
        </Typography>
      </Box>

      <IconButton disableRipple sx={{ padding: 0 }}>
        <EditButtonIcon />
      </IconButton>
    </Stack>
  );
};

export default PageActions;
