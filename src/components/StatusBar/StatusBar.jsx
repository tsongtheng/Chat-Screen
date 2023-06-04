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
      height={"4.7rem"}
      marginBottom={"2rem"}
    >
      <Typography
        width={"5.4rem"}
        height={"2.1rem"}
        margin={"1.4rem 0 1.1rem 2.7rem"}
        fontFamily={"SF Pro Text,sans-serif"}
        fontStyle={"normal"}
        fontWeight={600}
        fontSize={"1.7rem"}
        lineHeight={"2.2rem"}
        letterSpacing={"0.0225rem"}
        color={"#000000"}
      >
        {currentTime}
      </Typography>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        width={"7.826rem"}
        height={"1.3rem"}
        margin={"1.8rem 2.6rem 1.6rem 0"}
      >
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </Stack>
    </Stack>
  );
};

export default StatusBar;
