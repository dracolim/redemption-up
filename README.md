# redemption-arc
AngelHack 2024 Prehack


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

**We merge the domain and data-access folder since its a hackathon**

https://even-net-533.notion.site/Backend-Architecture-7cf4c600433747e79063de799a2ec9fe?pvs=4 
