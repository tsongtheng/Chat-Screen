import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const message =
  "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money";

const User = () => {
  return (
    <Box width={319} margin={"0 0 20px 52px"}>
      <List disablePadding>
        <ListItem
          disablePadding
          sx={{
            width: "287px",
            backgroundColor: "#1C63D5",
            padding: "8px",
            borderRadius: "12px 12px 0 12px",
            boxShadow: "none",
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

              color: "#ffffff",
            }}
            // secondary={messageSecondary}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default User;
