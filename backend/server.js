import express from "express"
import sluging from "./slug.js"
import callAPI from "./callAPI.js"
import cors from "cors"
import { store, SPush, Qpush, Apush } from "./storage.js";

const app = express()
const port = 3000

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.redirect('/chat')
})

app.post('/chat', (req, res)=>{
    const query = req.body.messages;
    // console.log(query)
    const slug = sluging(query[1].content);
    SPush(query)
    

    res.json({ query, slug, redirectUrl: `/chat/${slug}` })
})

app.post('/chat/:slug', async(req, res)=>{
  // console.log(req.body)
    const { messages } = req.body;
    Qpush(messages)
    const msgVal = store
    // console.log(msgVal)

    // const msg = {
    //   messages: msgVal
    // }

  // const msgHistory = updateStore(message);
  // console.log(msgHistory)

  try {


    // console.log(msgVal)
    const data = await callAPI(msgVal);
    // const reply = data.choices[0].message.content;

    console.log(data.choices[0].message.content)

    // Apush(reply)

    

    res.json(data.choices[0].message.content);

  }
  catch (error) {
    console.error("OpenAI API error:", error.response?.data || error.messages);
    res.status(500).json({ error: "Failed to get response from GPT" });
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
