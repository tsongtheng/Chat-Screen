import { Box } from "@mui/material";
import HeadSection from "./components/headComponents/HeadSection";
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
      <Box sx={{ backgroundColor: "#FAF9F4" }}>
        <HeadSection />
        <ChatMessage />
        <InputBar />
      </Box>
    </Box>
  );
}

export default App;
