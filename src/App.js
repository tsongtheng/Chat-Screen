import { Box } from "@mui/material";
import StatusBar from "./components/StatusBar/StatusBar";
import HeadSection from "./components/headComponents/HeadSection";
import CurrentDate from "./components/CurrentDate/CurrentDate";
// import SearchDropdown from "./components/SearchDropdown/SearchDropdown";
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
        width={"375px"}
        height={"812px"}
        borderRadius={"32px"}
        sx={{ backgroundColor: "#FAF9F4" }}
      >
        <StatusBar />
        <HeadSection />
        <CurrentDate />
        {/* <SearchDropdown /> */}
        <ChatMessage />
        <InputBar />
      </Box>
    </Box>
  );
}

export default App;
