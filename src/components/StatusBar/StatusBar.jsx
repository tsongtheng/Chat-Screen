import React from "react";
import { Stack, Typography } from "@mui/material";
import {
  BatteryIcon,
  SignalIcon,
  WifiIcon,
} from "../../assets/icons/StatusBarIcons";

const StatusBar = () => {
  const getTime = new Date();
  const hours = getTime.getHours();
  const minutes = getTime.getMinutes();
  const currentTime = `${hours}:${minutes}`;

  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      height={"47px"}
      marginBottom={"20px"}
    >
      <Typography
        width={54}
        height={21}
        margin={"14px 0 11px 27px"}
        fontFamily={"SF Pro Text,sans-serif"}
        fontStyle={"normal"}
        fontWeight={600}
        fontSize={17}
        lineHeight={"22px"}
        letterSpacing={0.0225}
        color={"#000000"}
      >
        {currentTime}
      </Typography>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={78.26}
        height={13}
        margin={"18px 26px 16px 0"}
      >
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </Stack>
    </Stack>
  );
};

export default StatusBar;
