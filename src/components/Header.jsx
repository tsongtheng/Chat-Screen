import React from "react";
import { Avatar, Stack, Typography, Box } from "@mui/material";
import { HeaderCallIcon, VerticalDotsIcon } from "../assets/icons/HeaderIcons";

const Header = () => {
  return (
    <Stack
      flexDirection={"row"}
      alignItems={"center"}
      width={343}
      height={48}
      margin={"0 auto 16px"}
    >
      <Box width={48} height={48} marginRight={"16px"}>
        <Avatar>TS</Avatar>
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
      <Box width={"24px"} height={"24px"} marginRight={"12px"}>
        <HeaderCallIcon />
      </Box>
      <Box width={"24px"} height={"24px"}>
        <VerticalDotsIcon />
      </Box>
    </Stack>
  );
};

export default Header;

// font-family: Mulish;
// font-size: 18px;
// font-weight: 600;
// line-height: 23px;
// letter-spacing: 0em;
// text-align: left;

// font-family: Mulish;
// font-size: 18px;
// font-weight: 700;
// line-height: 23px;
// letter-spacing: 0em;
// text-align: left;

// font-family: Mulish;
// font-size: 16px;
// font-weight: 500;
// line-height: 20px;
// letter-spacing: 0em;
// text-align: left;

// font-family: Inter;
// font-size: 20px;
// font-weight: 600;
// line-height: 24px;
// letter-spacing: 0em;
// text-align: left;
