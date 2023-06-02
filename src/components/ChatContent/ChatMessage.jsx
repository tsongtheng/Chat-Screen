import React, { useEffect } from "react";
import { Box } from "@mui/material";
import User from "./User";
import UserPartner from "./UserPartner";
import { getFormattedData } from "../../api/ScreenData";

const ChatMessage = () => {
  // const [screenData, setScreenData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getFormattedData();
      console.log(data);
      return data;
    };
    fetchData();
  }, []);

  return (
    <Box width={"339px"} height={"372px"} margin={"0 20px 20px 16px"}>
      <UserPartner />
      <User />
    </Box>
  );
};

export default ChatMessage;
