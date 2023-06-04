import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import {
  CaretIcon,
  PaperClipIcon,
  SendIcon,
} from "../../assets/icons/InputBarIcons";
import CustomizedInputsStyleOverrides from "../../style/InputBarTextField/InputBarTextField";
import AttachmentPanel from "./AttachmentPanel";

const InputBar = () => {
  const [panel, setPanel] = useState(false);

  const handlePanelClick = () => {
    setPanel((prevState) => !prevState);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      alignItems={"center"}
      width={"34.3rem"}
      height={"4.2rem"}
      margin={"0 1.6rem 5.1rem"}
      padding={"1.1rem 1.2rem"}
      borderRadius={".8rem"}
      position={"relative"}
      sx={{
        backgroundColor: "#FFFFFF",
        // backgroundColor: "black",
      }}
    >
      {panel && <AttachmentPanel />}
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        minWidth={".4rem"}
        height={"1.8rem"}
        margin={"1.2rem 0 1.2rem 0"}
      >
        <CaretIcon />
      </Box>
      <CustomizedInputsStyleOverrides />
      <Button
        onClick={handlePanelClick}
        disableRipple
        sx={{
          minWidth: "2rem",
          height: "2rem",
          margin: "1.1rem 1.6rem 1.1rem 0",
          padding: 0,
        }}
      >
        <PaperClipIcon />
      </Button>
      <Button
        disableRipple
        sx={{
          minWidth: "2rem",
          height: "2rem",
          margin: "1.1rem 0 1.1rem",
          padding: 0,
        }}
      >
        <SendIcon />
      </Button>
    </Box>
  );
};

export default InputBar;
