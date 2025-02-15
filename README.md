# Apex Notes

Apex Notes is an AI-powered tool that transforms handwritten notes into concise summaries and practice problems, making tutoring sessions more effective and efficient. This application leverages **Google Cloud Document AI** for text extraction and **Gemini AI** for summarization, streamlining the learning process for students and educators alike.

---

## Features
- 📸 **Upload handwritten notes** – Accepts image uploads for processing.
- 📝 **AI-generated summaries** – Extracts key concepts from uploaded notes.
- 🎯 **Practice problem generation** – Generates relevant exercises based on the extracted content.
- 🔄 **Pagination for results** – Navigate through multiple pages of extracted content.
- 📊 **Progress bar & animations** – Provides a smooth user experience with loading indicators.
- 🎨 **Modern UI** – Built with **Tailwind CSS** for a sleek and responsive interface.

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- [Node.js]
- [npm]
- Google Cloud credentials with **Document AI API access**
- An API key for **Vertex AI (Gemini AI)**
- Guided instructions (with photos) on installation for Google Cloud and Vertex AI

### Clone the Repository
git clone https://github.com/your-username/apex-notes.git cd apex-notes

### Install Dependencies
npm install

### Set Up Environment Variables
Create a `.env` file in the root directory and add the following:
PORT=3000 (default set to 3000)
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_PROCESSOR_ID=your-processor-id
TEXT_MODEL=gemini-1.0-pro (default model used in this application)

## Usage

### Start the Application
npm start
By default, the app runs on **http://localhost:3000**.

### Run Tests
Apex Notes includes basic tests using **Jest** and **Supertest**. To run the tests:
npm test

