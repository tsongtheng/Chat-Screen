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
      // width={"37.5rem"}
      // minHeight={"130px"}
      borderBottom={".1rem solid"}
      borderColor={"#E5E5E0"}
      marginBottom={"9.7rem"}
      py={"1.8rem"}
      position={"relative"}
    >
      <PageActions />
      <Header menuClick={handleMenuClick} />
      {menu && <SearchDropdown />}
    </Box>
  );
};

export default HeadSection;
