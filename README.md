# SafePlay Hub

## Overview
SafePlay Hub is a full-stack application providing secure user authentication, login, and profile management using JWT (JSON Web Tokens).

## Features
- User Registration
- User Login
- Profile Management
- Secure JWT Authentication

## Technologies
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Password Hashing**: bcryptjs

## Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/safeplay-hub.git
cd safeplay-hub
2. Install Dependencies
bash
Copy
npm install
3. Setup Environment Variables
Create a .env file and add:

bash
Copy
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_jwt_secret_key
4. Run the App
bash
Copy
npm start
The app will run on http://localhost:5001.

API Endpoints
1. Register User
POST /api/user/register

Request:
bash
Copy
curl -X POST http://localhost:5001/api/user/register \
-H "Content-Type: application/json" \
-d '{"name": "Your Name", "email": "your-email@example.com", "password": "your-password"}'
Response:
json
Copy
{
  "message": "User registered successfully"
}
2. Login User
POST /api/user/login

Request:
bash
Copy
curl -X POST http://localhost:5001/api/user/login \
-H "Content-Type: application/json" \
-d '{"email": "your-email@example.com", "password": "your-password"}'
Response:
json
Copy
{
  "message": "Login successful",
  "token": "your-jwt-token"
}
3. Get Profile
GET /api/user/profile

Request:
bash
Copy
curl -X GET http://localhost:5001/api/user/profile \
-H "Authorization: Bearer your-jwt-token"
Response:
json
Copy
{
  "user": {
    "_id": "user-id",
    "name": "Your Name",
    "email": "your-email@example.com",
    "createdAt": "2025-01-25T06:40:27.221Z"
  }
}
Contributing
Feel free to open an issue or submit a PR to contribute!

csharp
Copy

This version is straightforward and includes the necessary `cURL` commands for interacting with the API.




