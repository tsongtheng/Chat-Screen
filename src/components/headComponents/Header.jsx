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
      width={343}
      height={48}
      margin={"0 auto 18px"}
    >
      <Box width={48} height={48} marginRight={"16px"}>
        <ProfileAvatar />
      </Box>

      <Stack
        width={215}
        height={46}
        fontFamily={"inherit"}
        fontStyle={"normal"}
        letterSpacing={0}
        margin={"0 4px 2px 0"}
      >
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography
            color={"#606060"}
            fontSize={"16px"}
            lineHeight={"20px"}
            fontWeight={400}
            marginRight={"7px"}
          >
            From
          </Typography>
          <Typography
            color={"#141E0D"}
            fontSize={"18px"}
            lineHeight={"23px"}
            fontWeight={600}
          >
            IGI Airport, T3
          </Typography>
        </Stack>
        <Stack flexDirection={"row"} alignItems={"center"}>
          <Typography
            color={"#606060"}
            fontSize={"16px"}
            lineHeight={"20px"}
            fontWeight={400}
            marginRight={"7px"}
          >
            To
          </Typography>
          <Typography
            color={"#141E0D"}
            fontSize={"18px"}
            lineHeight={"23px"}
            fontWeight={600}
          >
            Sector 28
          </Typography>
        </Stack>
      </Stack>

      <Button
        disableRipple
        sx={{
          minWidth: "24px",
          height: "24px",
          marginRight: "12px",
          padding: 0,
        }}
      >
        <HeaderCallIcon />
      </Button>

      <Button
        onClick={menuClick}
        disableRipple
        sx={{
          minWidth: "24px",
          height: "24px",
          padding: 0,
        }}
      >
        <VerticalDotsIcon />
      </Button>
    </Stack>
  );
};

export default Header;
