import React from "react";
import { Avatar } from "@mui/material";
import {
  ChatHeadImg1,
  // ChatHeadImg2,
  // ChatHeadImg3,
} from "../images/chatHeadImages";

const ChatHeadAvatar = ({ handleChatHead }) => {
  return (
    <>
      <Avatar
        alt="profile-img"
        src={ChatHeadImg1}
        sx={{ width: 24, height: 24 }}
      />
    </>
  );
};

export default ChatHeadAvatar;
