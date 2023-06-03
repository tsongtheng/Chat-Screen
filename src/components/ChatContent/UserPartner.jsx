import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import ChatHeadAvatar from "../../assets/Avatar/ChatHeadAvatar";
import { CheckedIcon } from "../../assets/icons/CheckedIcon";
const userMessage =
  "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money";

const UserPartner = ({ message, image, imgKey }) => {
  return (
    <Box width={319} margin={"0 20px 20px 0"} position={"relative"}>
      <List
        disablePadding
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItem disablePadding sx={{ width: "24px", height: "24px" }}>
          <ListItemAvatar sx={{ width: "24px", height: "24px" }}>
            {image ? (
              <Avatar alt="Sharp" src={image} sx={{ width: 24, height: 24 }} />
            ) : (
              <ChatHeadAvatar imgKey={imgKey} />
            )}
            <Box
              width={8}
              height={8}
              position={"absolute"}
              zIndex={100}
              // right={15}
              left={16}
              top={8}
            >
              <CheckedIcon />
            </Box>
          </ListItemAvatar>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            width: "287px",
            backgroundColor: "#ffffff",
            padding: "8px",
            borderRadius: "0 12px 12px 12px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.08)",
          }}
        >
          <ListItemText
            disableTypography
            primary={message ? message : userMessage}
            sx={{
              fontFamily: "inherit",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
              gap: "8px",
              margin: 0,

              color: "#606060",
            }}
            // secondary={messageSecondary}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default UserPartner;
