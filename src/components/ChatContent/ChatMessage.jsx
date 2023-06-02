import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import User from "./User";
import UserPartner from "./UserPartner";
import { getFormattedData } from "../../api/ChatsData";

const ChatMessage = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormattedData();
      console.log(data);
      setChats(data);
    };
    fetchData();
  }, []);

  return (
    <Box
      display={"flex"}
      flexDirection={"column-reverse"}
      width={"339px"}
      height={"372px"}
      margin={"0 20px 20px 16px"}
      overflow={"hidden"}
      sx={{
        backgroundColor: "#FAF9F4",
        overflowY: "auto",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent transparent",

        "&::-webkit-scrollbar": {
          width: ".5px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "transparent",
        },
      }}
    >
      <UserPartner />
      <UserPartner />
      <User />
      <UserPartner />
      {chats.map((chat) => {
        return !chat.self ? (
          <UserPartner
            key={chat.id}
            image={chat.image}
            message={chat.message}
          />
        ) : (
          <User key={chat.id} message={chat.message} />
        );
      })}
    </Box>
  );
};

export default ChatMessage;
