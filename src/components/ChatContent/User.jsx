import React from "react";
import { Box, List, ListItem, ListItemText } from "@mui/material";

const userMessage =
  "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money";

const User = ({ message }) => {
  return (
    <Box width={"31.9rem"} margin={"0 .4rem 2rem 5.2rem"}>
      <List disablePadding>
        <ListItem
          disablePadding
          sx={{
            width: "28.7rem",
            margin: 0,
            backgroundColor: "#1C63D5",
            padding: ".8rem",
            borderRadius: "1.2rem 1.2rem 0 1.2rem",
            boxShadow: "none",
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
              color: "#ffffff",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default User;
