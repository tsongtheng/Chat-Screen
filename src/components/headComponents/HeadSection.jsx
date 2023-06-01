import React, { useState } from "react";
import { Stack } from "@mui/material";
import PageActions from "./PageActions";
import Header from "./Header";
import SearchDropdown from "./SearchDropdown";

const HeadSection = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu((prevState) => !prevState);
  };
  return (
    <Stack
      justifyContent={"space-between"}
      width={"375px"}
      minHeight={"130px"}
      borderBottom={"1px solid"}
      borderColor={"#E5E5E0"}
      position={"relative"}
    >
      <PageActions />
      <Header menuClick={handleMenuClick} />
      {menu && <SearchDropdown />}
    </Stack>
  );
};

export default HeadSection;
