import React from "react";
import { Stack, Typography, Box, Button } from "@mui/material";

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
      width={"156px"}
      height={"144px"}
      borderRadius={"8px"}
      position={"absolute"}
      right={15}
      top={90}
      zIndex={800}
      sx={{ boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)" }}
    >
      {arr.map(({ id, icon, item }) => (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          key={id}
          width={"156px"}
          height={"48px"}
          border={"1px solid"}
          borderColor={"#E5E5E0"}
          sx={{
            backgroundColor: "#ffffff",
            borderTop: id === 2 ? 0 : id === 3 ? 0 : "1px",
            borderRadius:
              id === 2
                ? 0
                : id === 1
                ? "8px 8px 0 0"
                : id === 3 && "0 0 8px 8px",
          }}
        >
          <Box width={"20px"} height={"20px"} margin={"0 12px 0"}>
            {icon}
          </Box>
          <Typography
            variant="body2"
            fontFamily={"inherit"}
            fontStyle={"normal"}
            fontWeight={600}
            fontSize={"14px"}
            lineHeight={"18px"}
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
