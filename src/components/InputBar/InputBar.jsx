import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import { PaperClipIcon, SendIcon } from "../../assets/icons/InputBarIcons";
import CustomizedInputsStyleOverrides from "../../style/InputBarTextField/InputBarTextField";
import AttachmentPanel from "./AttachmentPanel";

const InputBar = () => {
  const [panel, setPanel] = useState(false);

  const handlePanelClick = () => {
    setPanel((prevState) => !prevState);
  };

  return (
    <Box height={"7vh"} px={"1.6rem"} paddingBottom={"2rem"}>
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={"1.1rem 1.2rem"}
        borderRadius={".8rem"}
        position={"relative"}
        sx={{
          backgroundColor: "#FFFFFF",
          // backgroundColor: "yellow",
        }}
      >
        {panel && <AttachmentPanel />}

        <CustomizedInputsStyleOverrides />
        <Box display={"flex"}>
          <IconButton
            onClick={handlePanelClick}
            sx={{
              padding: 0,
              marginRight: "1.5rem",
            }}
          >
            <PaperClipIcon />
          </IconButton>
          <IconButton
            sx={{
              padding: 0,
            }}
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default InputBar;
