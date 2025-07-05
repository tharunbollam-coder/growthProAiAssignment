# 🚀 GrowthProAI - Local Business Dashboard

A full-stack responsive dashboard simulating how small businesses can view their Google review data and AI-generated SEO headlines.

✅ Built for GrowthProAI Full Stack Intern Assignment

---

## 📸 Live Demo

- **Frontend (Vercel)**: [https://growth-pro-ai-assignment-xi.vercel.app/)
- **Backend (Render)**: [https://growthproaiassignment-tdou.onrender.com)

> ⚠️ **Note:**  
> The backend is hosted on Render's free tier, which may go to sleep after 15 minutes of inactivity.  
> The first request may take a few seconds to wake the server. Please be patient 🙏


---

## 🛠️ Tech Stack

### 🔹 Frontend:
- React (Vite)
- Tailwind CSS
- Zustand (state management)

### 🔹 Backend:
- Node.js
- Express
- CORS

### 🔹 Deployment:
- Vercel (Frontend)
- Render (Backend)

---

## ✨ Features

- ✅ Input form to enter business name and location
- ✅ Displays simulated:
  - ⭐ Google rating
  - 📝 Number of reviews
  - 📰 AI-generated SEO headline
- ✅ Regenerate headline with one click
- ✅ Zustand for simple, clean state management
- ✅ Fully responsive UI with Tailwind CSS

---

## 🧑‍💻 Local Setup Instructions

# 1. Clone the repo
- git clone https://github.com/yourusername/growthpro-fullstack.git
- cd growthpro-fullstack

# 2. Backend Setup
- cd backend
- npm install
- node src/index.js

# 3. Frontend Setup
- cd frontend
- npm install
- npm run dev
## API Base URL: Hardcoded in src/api/api.js
- const BASE_URL = 'http://localhost:5000'; // or your deployed backend

