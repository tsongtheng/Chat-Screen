import { useEffect, useState } from "react";
import ScreenData from "./api/ScreenData";

function App() {
  const [screenData, setScreenData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await ScreenData();
      console.log(data);
      console.log(data?.data);
    };
    fetchData();
  }, []);

  return;
}

export default App;
