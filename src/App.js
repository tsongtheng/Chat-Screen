import { Box } from "@mui/material";
import HeadSection from "./components/headComponents/HeadSection";
import CurrentDate from "./components/CurrentDate/CurrentDate";
import ChatMessage from "./components/ChatContent/ChatMessage";
import InputBar from "./components/InputBar/InputBar";

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
        height={"71.7rem"}
        // borderRadius={"3.2rem"}
        sx={{ backgroundColor: "#FAF9F4" }}
      >
        <HeadSection />
        <CurrentDate />
        <ChatMessage />
        <InputBar />
      </Box>
    </Box>
  );
}

export default App;
