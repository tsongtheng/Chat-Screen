import React from "react";
import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const UserPartner = ({ message }) => {
  return (
    <Box width={319} margin={"0 20px 20px 0"}>
      <List
        disablePadding
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <ListItem disablePadding sx={{ width: "24px", height: "24px" }}>
          <ListItemAvatar sx={{ width: "24px", height: "24px" }}>
            G
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
            primary={message}
            sx={{
              fontFamily: "inherit",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "18px",
              letterSpacing: 0,
              gap: "8px",

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
