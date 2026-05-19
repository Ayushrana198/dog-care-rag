import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

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