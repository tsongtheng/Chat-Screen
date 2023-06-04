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
    <Box width={"31.9rem"} margin={"0 2.4rem 2rem 0"} position={"relative"}>
      <List
        disablePadding
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItem disablePadding sx={{ width: "2.4rem", height: "2.4rem" }}>
          <ListItemAvatar sx={{ width: "2.4rem", height: "2.4rem" }}>
            {image ? (
              <Avatar
                alt="Sharp"
                src={image}
                sx={{ width: "2.4rem", height: "2.4rem" }}
              />
            ) : (
              <ChatHeadAvatar imgKey={imgKey} />
            )}
            <Box
              width={".8rem"}
              height={".8rem"}
              position={"absolute"}
              zIndex={100}
              // right={15}
              left={16}
              top={14}
            >
              <CheckedIcon />
            </Box>
          </ListItemAvatar>
        </ListItem>
        <ListItem
          disablePadding
          sx={{
            width: "28.7rem",
            backgroundColor: "#ffffff",
            padding: ".8rem",
            borderRadius: "0 1.2rem 1.2rem 1.2rem",
            boxShadow: "0 .4rem .8rem rgba(0, 0, 0, 0.08)",
          }}
        >
          <ListItemText
            disableTypography
            primary={message ? message : userMessage}
            sx={{
              fontFamily: "inherit",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "1.4rem",
              lineHeight: "1.8rem",
              letterSpacing: 0,
              gap: ".8rem",
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
