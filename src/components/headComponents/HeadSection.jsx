import React, { useState } from "react";
import { Box } from "@mui/material";
import PageActions from "./PageActions";
import Header from "./Header";
import SearchDropdown from "./SearchDropdown";

const HeadSection = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuClick = () => {
    setMenu((prevState) => !prevState);
  };
  return (
    <Box
      justifyContent={"space-between"}
      height={"16.2vh"}
      borderBottom={".1rem solid"}
      borderColor={"#E5E5E0"}
      py={"1.8rem"}
      sx={{ backgroundColor: "#FAF9F4" }}
      position={"relative"}
    >
      <PageActions />
      <Header menuClick={handleMenuClick} />
      {menu && <SearchDropdown />}
    </Box>
  );
};

export default HeadSection;
