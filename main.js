const { GoogleGenAI } = require( "@google/genai");
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

// adding express
const app = express()
app.use (express.json())
app.use(bodyParser.json())

app.get('/', (req,res)=>{
   res.send("sending...")
})

const ai = new GoogleGenAI({});

async function generate(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });
  return response.text;
}

//generate();

app.get('/api/content', async(req,res)=>{
    try{
        const data = req.body.question
        const result = await generate(data)
        res.send({
            "result": result
        })
    }catch(err){
        res.send("error", err);
    }
})

app.listen(8080,()=>{
    console.log("server is up on http://localhost:8080 ");
})