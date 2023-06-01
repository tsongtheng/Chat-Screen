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
      width={343}
      height={42}
      margin={"0 16px 51px"}
      padding={"11px 12px"}
      borderRadius={"8px"}
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
        minWidth={4}
        height={18}
        margin={"12px 0 12px 0"}
      >
        <CaretIcon />
      </Box>
      <CustomizedInputsStyleOverrides />
      <Button
        onClick={handlePanelClick}
        disableRipple
        sx={{
          minWidth: "20px",
          height: "20px",
          margin: "11px 16px 11px 0",
          padding: 0,
        }}
      >
        <PaperClipIcon />
      </Button>
      <Button
        disableRipple
        sx={{
          minWidth: "20px",
          height: "20px",
          margin: "11px 0 11px",
          padding: 0,
        }}
      >
        <SendIcon />
      </Button>
    </Box>
  );
};

export default InputBar;
