import React from "react";
import { Avatar } from "@mui/material";
import {
  ChatHeadImg1,
  ChatHeadImg2,
  ChatHeadImg3,
} from "../images/chatHeadImages";

const ChatHeadAvatar = ({ imgKey }) => {
  return (
    <>
      <Avatar
        alt="profile-img"
        src={
          imgKey === 1
            ? ChatHeadImg1
            : imgKey === 2
            ? ChatHeadImg2
            : ChatHeadImg3
        }
        sx={{ width: "2.4rem", height: "2.4rem" }}
      />
    </>
  );
};

export default ChatHeadAvatar;
