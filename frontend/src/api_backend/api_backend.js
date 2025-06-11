import axios from "axios";

const initiate_chat = async (msg) => {
    const res = await axios.post("http://localhost:3000/chat", { messages: [
        { "role": "system", "content": "You are a helpful assistant." },
        { "role": "user", "content": msg }
    ] })
    return res
}

const chat = async (msg, slug) => {
    const content = [{"role": "user", "content": msg}] 
    const res = await axios.post(`http://localhost:3000/chat/${slug}`, { messages: content });
    return res
}

export {initiate_chat, chat}