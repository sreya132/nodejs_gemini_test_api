# 🧠 Gemini Express API

A simple **Express.js REST API** that integrates with **Google Gemini** (via the `@google/genai` SDK) to generate AI-powered text responses from user queries.

---

## 🚀 Overview

This project provides a lightweight backend service that exposes a single API endpoint.  
Users can send a text query, which is then processed by **Google Gemini** to generate a response in real time.

The API is designed for quick prototyping, AI-assisted content generation, and integration into larger applications such as chatbots, virtual assistants, and writing tools.

---

## ⚙️ Tech Stack

- **Node.js** (v18+ recommended)  
- **Express.js**  
- **Google GenAI SDK** (`@google/genai`)  
- **dotenv** (for environment variable management)  
- **body-parser**

---

## 🧩 Features

- Minimal setup — run locally with a single command  
- Integrates directly with **Google Gemini 2.5 Flash model**  
- JSON-based API endpoint for easy frontend integration  
- Works on Windows, macOS, and Linux  

---

## 📁 Folder Structure

gem_api/
│
├── .env # Environment variables (contains API key)
├── package.json # Dependencies and scripts
├── index.js # Main application file
└── README.md # Project documentation


---

## 🔑 Environment Variables

Create a `.env` file in the project root and add your Google API key:

```bash
GOOGLE_API_KEY=your_google_genai_api_key_here


🧠 API Documentation
Endpoint: GET /api/content

Description:
Accepts a text query from the client and returns the AI-generated response from Google Gemini.

Request

Method: GET

URL: http://localhost:8080/api/content

Headers:
Content-Type: application/json

Body:

{
  "question": "Explain JavaScript promises in simple terms."
}

Response Example
{
  "result": "A promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value."
}

Error Example
{
  "error": "Something went wrong while generating the response."
}


⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/gemini-express-api.git
cd gemini-express-api

2. Install dependencies
npm install

3. Add your .env file
GOOGLE_API_KEY=your_google_genai_api_key

4. Run the server
node index.js


Your server will start on:
👉 http://localhost:8080

🧾 License

This project is open-source and available under the MIT License.

