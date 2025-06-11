import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  isFirstMessage: true,
  slug: "none"
};

export const storeSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addUserMessage: (state, action) => {
      state.messages.push({
        id: nanoid(),
        sender: "user",
        text: action.payload
      });
    },
    addBotMessage: (state, action) => {
      state.messages.push({
        id: nanoid(),
        sender: "bot",
        text: action.payload
      });
    },
    markFirstMessageHandled: (state) => {
      state.isFirstMessage = false;
    },
    slugChange: (state, action) => {
      state.slug = action.payload;
    }
  }
});

export const { addUserMessage, addBotMessage, markFirstMessageHandled, slugChange } = storeSlice.actions;
export default storeSlice.reducer;
