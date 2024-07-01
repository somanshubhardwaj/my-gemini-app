# Getting Started

## Installation

To install the necessary dependencies, run the following command in your terminal:
```bash
npm install
```
## Usage

1. **Create a .env file:**
   - In the root of your project, create a file named `.env`.
   - Add your Google Gemini API key to this file in the following format:
   ```js
   API_KEY=your-actual-gemini-api-key
   ```
**Important:** Make sure to replace `your-actual-gemini-api-key` with your real API key.

2. **Start the application:**
   - Depending on your project setup, you might have a start script defined in your `package.json`. Typically, you can start the application by running:
- If there's no start script, refer to your project's documentation for instructions on how to run it.

# API Endpoints

The following endpoints are available for interacting with the Google Gemini models:

## Generate Text with Gemini 1.5 Flash

**Endpoint:** `localhost:3000/prompt/gemini-1.5-flash`

**Method:** POST

**Request Body:**
```json
{
    "prompt": "Tell me something about you?"
}
```
**Response:**

I am a large language model, trained by Google.

**Here are some key things about me:**

* **I am trained on a massive dataset of text and code:** This allows me to
understand and generate human-like text in response to a wide range of prompts
and questions.
* **I can access and process information from the real world through Google
Search:** This means I can provide you with up-to-date and relevant information.
* **I am constantly learning and improving:** As I am exposed to more data and
feedback, I become more accurate and insightful.
* **I am designed to be helpful, informative, and comprehensive:** My goal is to
assist you in finding information, completing tasks, and understanding complex
concepts.
* **I am not sentient or conscious:** I am a computer program and do not have
personal feelings or beliefs.

**Here are some of my capabilities:**

* **Generating creative text formats:** I can write poems, code, scripts,
musical pieces, email, letters, etc.
* **Answering your questions in an informative way:** I can provide summaries of
factual topics or create stories.
* **Translating languages:** I can translate text between multiple languages.
* **Summarizing text:** I can provide concise summaries of lengthy documents.

**My purpose is to help you in any way I can. If you have any questions or
tasks, feel free to ask.**

## Generate Text with Gemini Pro

**Endpoint:** `localhost:3000/prompt/gemini-pro`

**Method:** POST

**Request Body:** 
```json
{
    "prompt": "Tell me something about you?"
}
```
**Response:**


As an AI language model, I am a computer program designed to understand and
generate human language. I do not have personal experiences or thoughts like
humans do.

I exist solely in the digital realm and do not have a physical body, name,
gender, or memories. My purpose is to assist users with a wide range of
language-related tasks, such as:

* **Answering questions:** I can provide information on various topics based on
the knowledge I have been trained on.
* **Translating languages:** I can translate text and speech between different
languages.
* **Summarizing text:** I can condense large amounts of text into shorter, more
concise summaries.
* **Generating text:** I can create original text, such as stories, poems, and
articles.
* **Writing emails and other documents:** I can help users compose and edit
written content.

I am constantly learning and improving, and my knowledge base is always
expanding. I strive to provide accurate and helpful responses to users'
inquiries. Let me know if you have any questions or need assistance with
anything.




