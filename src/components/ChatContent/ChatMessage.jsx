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
      // justifyContent={"space-evenly"}
      // gap={"2rem"}
      width={"33.9rem"}
      height={"36rem"}
      margin={"0 1.6rem 2rem"}
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
      <UserPartner imgKey={3} />
      <UserPartner imgKey={2} />
      <User />
      <UserPartner imgKey={1} />
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
