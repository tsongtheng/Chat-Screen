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
      minWidth={"12.4rem"}
      height={"5.2rem"}
      position={"absolute"}
      zIndex={999}
      right={-5}
      top={-53}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width={"12.4rem"}
        height={"4.4rem"}
        padding={"1.2rem 1.6rem"}
        borderRadius={"99.9rem"}
        boxShadow={"0 -0.1rem .8rem rgba(0, 0, 0, 0.05)"}
        sx={{ backgroundColor: "#008000" }}
      >
        {icons.map((icon, i) => (
          <Button
            key={i}
            disableRipple
            sx={{
              minWidth: "2rem",
              height: "2rem",
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
        minWidth={"1.6rem"}
        minHeight={".8rem"}
      >
        <CornerIcon />
      </Box>
    </Box>
  );
};

export default AttachmentPanel;
