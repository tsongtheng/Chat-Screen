import React from "react";
import { Avatar } from "@mui/material";
import {
  ProfileImg1,
  // ProfileImg2,
  // ProfileImg3,
  // ProfileImg4,
} from "../images/profileImages";

const ProfileAvatar = () => {
  return (
    <>
      <Avatar
        alt="profile-img"
        src={ProfileImg1}
        sx={{ width: 48, height: 48 }}
      />
    </>
  );
};

export default ProfileAvatar;
