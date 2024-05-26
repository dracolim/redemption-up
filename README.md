# redemption-arc
AngelHack 2024 Prehack

# Tech Stack

### Frontend

- Next.js
- Tailwind CSS

### Backend
- FastAPI
- Pinecone
- Python
- TypeScript
- Deployment

### AI
- groq
- llama-3
- OpenAI

### Deployment
- Render
- Vercel



# 🖥️ Frontend

## 🚀 How to start
1. Navigate to the frontend directory:
   ```sh
   cd packages/frontend
   npm install
   npm run dev
## 🗃️ Backend 

### 🛠️ Dependencies
1. Docker 🐳
2. Python 🐍

### 🚀 How to start
1. cd packages/backend
2. run `make initialise-backend`
3. Create a `.env.development` and add the neccesary environment variables (see .env.example)
4. run `make start-backend`

To see other useful make commands, type `make help` in backend directory

**Note**: Currently, only the database is dockerized 🐳. Python is still running on the machine OS using a virtual environment.

## Backend Architecture

**We merge the domain and data-access folder**

https://even-net-533.notion.site/Backend-Architecture-7cf4c600433747e79063de799a2ec9fe?pvs=4 
