import axios from "axios";

const URL = "https://qa.corider.in/assignment/chat?page=0";

const getData = async () => {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (err) {
    console.error("Error fetching the data", err);
  }
};

const formatChatsData = (data) => {
  let { chats } = data;
  const userChats = chats.map((obj) => {
    const senderObj = obj.sender;
    const { image, is_kyc_verified, self, user_id } = senderObj;
    return {
      id: obj.id,
      message: obj.message,
      time: obj.time,
      image,
      is_kyc_verified,
      self,
      user_id,
    };
  });
  return userChats;
};

const getFormattedData = async () => {
  const chatsData = await getData();
  const formattedChatsData = formatChatsData(chatsData);
  return formattedChatsData;
};

export { getFormattedData };
