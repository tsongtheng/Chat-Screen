import React from "react";
import { Stack, Typography, Box, IconButton } from "@mui/material";
import {
  HeaderCallIcon,
  VerticalDotsIcon,
} from "../../assets/icons/HeaderIcons";
import ProfileAvatar from "../../assets/Avatar/ProfileAvatar";

const Header = ({ menuClick }) => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      px={"1.6rem"}
    >
      <Box display={"flex"} alignItems={"center"}>
        <ProfileAvatar />
        <Stack fontFamily={"inherit"} fontStyle={"normal"} letterSpacing={0}>
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
      </Box>

      <Box>
        <IconButton
          disableRipple
          sx={{
            padding: 0,
            marginRight: "1.5rem",
          }}
        >
          <HeaderCallIcon />
        </IconButton>

        <IconButton
          onClick={menuClick}
          disableRipple
          sx={{
            padding: 0,
          }}
        >
          <VerticalDotsIcon />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Header;
