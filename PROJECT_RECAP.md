# Project Recap: Wheel of Islam

## 1. Project Vision
- **Goal:** Build an interactive web app (Wheel of Islam) to help Muslim youth reconnect with their faith, featuring a non-linear wheel of Islamic topics and an AI-powered Dawah Guide for addressing doubts and questions.
- **Target Audience:** Muslim youth, Gen Z, and potentially other user groups in the future.

## 2. Architecture & Technology Stack
- **Frontend:** React (JavaScript)
- **Backend:** Django (Python, modular monolith approach)
- **Database:** PostgreSQL (for structured data)
- **AI/RAG (future):** Vector database (e.g., Pinecone, Qdrant) + LLM (e.g., OpenAI GPT-4) for Dawah Guide
- **Version Control:** Git (local) + GitHub (cloud)
- **Cloud Hosting (planned):**
  - Frontend: Vercel or Netlify
  - Backend: Render, Railway, or Heroku

## 3. Key Architecture Decisions
- **Separation of Frontend and Backend:**
  - React frontend and Django backend are developed, deployed, and scaled independently.
  - Communication via REST API.
- **Modular Monolith Backend:**
  - Django apps (modules) for each business capability (e.g., Dawah Guide, User Management).
- **RAG for AI (future):**
  - Retrieval-Augmented Generation pipeline for Dawah Guide, using your own curated content.
  - Vector DB for embeddings and similarity search.
  - Option to add more RAG pipelines or specialized LLMs for new business domains (e.g., Fatwah Chatbot).

## 4. Git & GitHub Setup (Frontend)
- Initialized a local git repository in the project folder.
- Added all project files to git tracking.
- Made the initial commit with a descriptive message.
- Created a remote repository on GitHub: [wheel-of-islam-frontend](https://github.com/thomasderegt/wheel-of-islam-frontend)
- Connected the local repo to GitHub and pushed the code.
- Confirmed that all files and commit history are visible on GitHub.

## 5. Next Steps
- **Frontend:** Deploy to Vercel or Netlify for a live production site.
- **Backend:** Repeat the git/GitHub process, then deploy Django backend to Render, Railway, or Heroku.
- **Database:** Set up a managed PostgreSQL database for production.
- **Connect Frontend and Backend:** Update API URLs and test end-to-end communication.
- **AI/RAG:** Plan and implement the Dawah Guide’s retrieval and AI answer generation pipeline.

---

**This document summarizes the current state and decisions for the Wheel of Islam project. Use it as a reference for onboarding, collaboration, or future planning.** 