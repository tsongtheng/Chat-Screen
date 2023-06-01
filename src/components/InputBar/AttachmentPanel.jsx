import React from "react";
import { Box, Button } from "@mui/material";
import {
  CameraIcon,
  VideoIcon,
  DocumentIcon,
  CornerIcon,
} from "../../assets/icons/AttachmentPanelIcons";

const icons = [<CameraIcon />, <VideoIcon />, <DocumentIcon />];

const AttachmentPanel = () => {
  return (
    <Box
      minWidth={"124px"}
      height={"52px"}
      position={"absolute"}
      zIndex={999}
      right={-5}
      top={-53}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={124}
        height={44}
        padding={"12px 16px"}
        borderRadius={999}
        boxShadow={"0px -1px 8px rgba(0, 0, 0, 0.05)"}
        sx={{ backgroundColor: "#008000" }}
      >
        {icons.map((icon, i) => (
          <Button
            key={i}
            disableRipple
            sx={{
              minWidth: "20px",
              height: "20px",
              padding: 0,
            }}
          >
            {icon}
          </Button>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        minWidth={16}
        minHeight={8}
      >
        <CornerIcon />
      </Box>
    </Box>
  );
};

export default AttachmentPanel;
