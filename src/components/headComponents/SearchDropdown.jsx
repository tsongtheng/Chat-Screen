import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import {
  MembersIcon,
  CallIcon,
  ReportMessageIcon,
} from "../../assets/icons/SearchDropdownIcons";

const arr = [
  { id: 1, icon: <MembersIcon />, item: "Members" },
  { id: 2, icon: <CallIcon />, item: "Share Number" },
  { id: 3, icon: <ReportMessageIcon />, item: "Report" },
];

const SearchDropdown = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"15.6rem"}
      height={"14.4rem"}
      borderRadius={".8rem"}
      position={"absolute"}
      right={15}
      top={90}
      zIndex={800}
      sx={{ boxShadow: "0 .4rem .8rem rgba(0, 0, 0, 0.12)" }}
    >
      {arr.map(({ id, icon, item }) => (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          key={id}
          width={"15.6rem"}
          height={"4.8rem"}
          border={".1rem solid"}
          borderColor={"#E5E5E0"}
          sx={{
            backgroundColor: "#ffffff",
            borderTop: id === 2 ? 0 : id === 3 ? 0 : ".1rem",
            borderRadius:
              id === 2
                ? 0
                : id === 1
                ? ".8rem .8rem 0 0"
                : id === 3 && "0 0 .8rem .8rem",
          }}
        >
          <Box width={"2rem"} height={"2rem"} margin={"0 1.2rem 0"}>
            {icon}
          </Box>
          <Typography
            variant="body2"
            fontFamily={"inherit"}
            fontStyle={"normal"}
            fontWeight={600}
            fontSize={"1.4rem"}
            lineHeight={"1.8rem"}
            letterSpacing={0}
            color={"#141E0D"}
          >
            {item}
          </Typography>
        </Stack>
      ))}
    </Box>
  );
};

export default SearchDropdown;
