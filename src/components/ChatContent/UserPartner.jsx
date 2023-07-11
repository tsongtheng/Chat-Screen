import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import ChatHeadAvatar from "../../assets/Avatar/ChatHeadAvatar";
import { CheckedIcon } from "../../assets/icons/CheckedIcon";
const userMessage =
  "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money";

const UserPartner = ({ message, image, imgKey }) => {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      marginBottom={"2rem "}
      paddingRight={"20%"}
    >
      <Box marginRight={".8rem"} position={"relative"}>
        {image ? (
          <Avatar
            alt="Sharp"
            src={image}
            sx={{ width: "2.4rem", height: "2.4rem" }}
          />
        ) : (
          <ChatHeadAvatar imgKey={imgKey} />
        )}
        <Box position={"absolute"} zIndex={100} left={16} top={14}>
          <CheckedIcon />
        </Box>
      </Box>
      <Box
        backgroundColor="#ffffff"
        padding=".8rem"
        borderRadius="0 1.2rem 1.2rem 1.2rem"
        boxShadow="0 .4rem .8rem rgba(0, 0, 0, 0.08)"
      >
        <Typography
          fontFamily="inherit"
          fontWeight={400}
          fontSize="1.4rem"
          lineHeight="1.8rem"
          gap=".8rem"
          color="#606060"
        >
          {message ? message : userMessage}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserPartner;
