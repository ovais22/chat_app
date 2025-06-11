import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const callAPI = async (msg) => {
  const response = await axios.post(
    'https://api.openai.com/v1/chat/completions',
    {
      model: 'gpt-4.1-mini',
      messages: msg,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
    }
  );

  return response.data;
};

export default callAPI;