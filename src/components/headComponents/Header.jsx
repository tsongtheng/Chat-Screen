import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";
import {
  HeaderCallIcon,
  VerticalDotsIcon,
} from "../../assets/icons/HeaderIcons";
import ProfileAvatar from "../../assets/Avatar/ProfileAvatar";

const Header = ({ menuClick }) => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      width={"34.3rem"}
      height={"4.8rem"}
      margin={"0 auto 1.8rem"}
    >
      <Box width={"4.8rem"} height={"4.8rem"} marginRight={"1.6rem"}>
        <ProfileAvatar />
      </Box>

      <Stack
        width={"21.5rem"}
        height={"4.6rem"}
        fontFamily={"inherit"}
        fontStyle={"normal"}
        letterSpacing={0}
        margin={"0 .4rem .2rem 0"}
      >
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography
            color={"#606060"}
            fontSize={"1.6rem"}
            lineHeight={"2rem"}
            fontWeight={400}
            marginRight={".7rem"}
          >
            From
          </Typography>
          <Typography
            color={"#141E0D"}
            fontSize={"1.8rem"}
            lineHeight={"2.3rem"}
            fontWeight={600}
          >
            IGI Airport, T3
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography
            color={"#606060"}
            fontSize={"1.6rem"}
            lineHeight={"2rem"}
            fontWeight={400}
            marginRight={".7rem"}
          >
            To
          </Typography>
          <Typography
            color={"#141E0D"}
            fontSize={"1.8rem"}
            lineHeight={"2.3rem"}
            fontWeight={600}
          >
            Sector 28
          </Typography>
        </Stack>
      </Stack>

      <Button
        disableRipple
        sx={{
          minWidth: "2.4rem",
          height: "2.4rem",
          marginRight: "1.2rem",
          padding: 0,
        }}
      >
        <HeaderCallIcon />
      </Button>

      <Button
        onClick={menuClick}
        disableRipple
        sx={{
          minWidth: "2.4rem",
          height: "2.4rem",
          padding: 0,
        }}
      >
        <VerticalDotsIcon />
      </Button>
    </Stack>
  );
};

export default Header;
