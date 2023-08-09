import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import User from "./User";
import UserPartner from "./UserPartner";
import { getFormattedData } from "../../api/ChatsData";
import CurrentDate from "../CurrentDate/CurrentDate";

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
      height={"76.8vh"}
      padding={"2rem 1.6rem"}
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
      {/* <UserPartner imgKey={3} />
      <UserPartner imgKey={2} />
      <User />
      <UserPartner imgKey={1} /> */}
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
      <CurrentDate />
    </Box>
  );
};

export default ChatMessage;
