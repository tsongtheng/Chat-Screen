import { Box } from "@mui/material";
import Media from "react";
import StatusBar from "./components/StatusBar/StatusBar";
import HeadSection from "./components/headComponents/HeadSection";
import CurrentDate from "./components/CurrentDate/CurrentDate";
import ChatMessage from "./components/ChatContent/ChatMessage";
import InputBar from "./components/InputBar/InputBar";
import HomeIndicator from "./components/HomeIndicator/HomeIndicator";

function App() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"100vh"}
      sx={{ backgroundColor: "#1E1E1E" }}
    >
      <Box
        width={"37.5rem"}
        height={"76.5rem"}
        // borderRadius={"3.2rem"}
        sx={{ backgroundColor: "#FAF9F4" }}
      >
        {/* <StatusBar /> */}
        <HeadSection />
        <CurrentDate />
        <ChatMessage />
        <InputBar />
        <HomeIndicator />
      </Box>
    </Box>
  );
}

export default App;
