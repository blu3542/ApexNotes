# Apex Notes

Apex Notes is an AI-powered tool that transforms handwritten notes into concise summaries and practice problems, making tutoring sessions more effective and efficient. This application leverages **Google Cloud Document AI** for text extraction and **Gemini AI** for summarization, streamlining the learning process for students and educators alike.

---

## Review from Apex Academy

Attached in this repository is a written review from Apex Notes first User, Benjamin Lee, founder and head tutor of Apex Academy, a prestigious tutoring agency in Brea, Ca.

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
- Google Cloud credentials with Document AI API access, Vertex AI API Acess
- Guided Instructions (with pictures) for Google Cloud credentials setup: https://docs.google.com/document/d/1ToY0A_XyQo9bweyhIWZW4joD-WQolPPDOkX2kA5AmfI/edit?usp=sharing

### Clone the Repository

git clone https://github.com/your-username/ApexNotes.git
cd ApexNotes

### Install Dependencies

npm install

### Set Up Environment Variables

Fill in the .env file (should've been done after following the guided instructions for google cloud credentials
PORT=3000
GOOGLE_CLOUD_PROJECT_ID=your-project-id
GOOGLE_CLOUD_LOCATION=us-central1
GOOGLE_CLOUD_PROCESSOR_ID=your-processor-id
TEXT_MODEL=gemini-1.0-pro

### Start the Application

npm start
Will open up on http://localhost:3000

### Using the application

Upload 1 (multiple not supported yet) screenshot or image (PNG) full of notes. An example screenshot has been attached (test_screenshot.png). Apex Notes will return a detailed summary of topics along with practice problems.

### Run Tests

npm test

### Planned Future Improvements

- Multiple image upload and support for multiple formats (easy)
- Automated pipeline for creation of notes, sending to student's email (medium)
- Custom models for certain subjects (hard)
