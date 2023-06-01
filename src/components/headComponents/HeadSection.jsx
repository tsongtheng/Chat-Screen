import React from "react";
import { Stack } from "@mui/material";
import PageActions from "./PageActions";
import Header from "./Header";
import SearchDropdown from "./SearchDropdown";

const HeadSection = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      width={"375px"}
      height={"130px"}
      borderBottom={"1px solid"}
      borderColor={"#E5E5E0"}
    >
      <PageActions />
      <Header />
      <SearchDropdown />
    </Stack>
  );
};

export default HeadSection;
