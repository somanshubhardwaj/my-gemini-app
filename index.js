import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(promptbyuser) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = promptbyuser;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();
  return text;
}
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.post("/prompt", async (req, res) => {
  const { prompt } = req.body;
  const response = await run(prompt);
  res.send(response);
})

const port = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});