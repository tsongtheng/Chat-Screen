import React from "react";
import { Box, Button, IconButton } from "@mui/material";
import {
  CameraIcon,
  VideoIcon,
  DocumentIcon,
  CornerIcon,
} from "../../assets/icons/AttachmentPanelIcons";

const icons = [
  { id: "a", icon: <CameraIcon /> },
  { id: "b", icon: <VideoIcon /> },
  { id: "c", icon: <DocumentIcon /> },
];

const AttachmentPanel = () => {
  return (
    <Box position={"absolute"} zIndex={999} right={0} top={-53}>
      <Box
        padding={"1.2rem 1.6rem"}
        borderRadius={"99.9rem"}
        boxShadow={"0 -0.1rem .8rem rgba(0, 0, 0, 0.05)"}
        sx={{ backgroundColor: "#008000" }}
      >
        {icons.map((value, i) => (
          <IconButton
            key={value.id}
            sx={{
              padding: 0,
              marginRight: value.id === "c" ? 0 : "1.5rem",
            }}
          >
            {value.icon}
          </IconButton>
        ))}
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        top={-1}
        zIndex={950}
      >
        <CornerIcon />
      </Box>
    </Box>
  );
};

export default AttachmentPanel;
