import axios from "axios";

const URL = "http://3.111.128.67/assignment/chat?page=0";

const ScreenData = async () => {
  try {
    const response = await axios.get(URL);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default ScreenData;
