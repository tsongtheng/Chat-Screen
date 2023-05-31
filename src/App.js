import { useEffect, useState } from "react";
import ScreenData from "./api/ScreenData";
import { Box, Divider } from "@mui/material";
import StatusBar from "./components/StatusBar";
import HeadSection from "./components/headComponents/HeadSection";
import CurrentDate from "./components/CurrentDate";

function App() {
  const [screenData, setScreenData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await ScreenData();
      console.log(data);
      console.log(data?.data);
    };
    // fetchData();
  }, []);

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
      </Box>
    </Box>
  );
}

export default App;
