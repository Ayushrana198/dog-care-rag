import axios from "axios";

const API_BASE_URL =
  "https://dog-care-rag-production.up.railway.app";

export const chatWithBot = async (
  message: string
) => {
  const response = await axios.post(
    `${API_BASE_URL}/chat`,
    {
      message,
    }
  );

  return response.data;
};