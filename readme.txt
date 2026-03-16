# Bank Transaction Filter System

A full-stack web application that allows users to create bank transactions and filter high-value transactions.

## Tech Stack

Frontend
- React
- Axios
- Tailwind / CSS
- Vite

Backend
- Spring Boot
- Java Streams API
- Spring Data JPA

Database
- H2 In-Memory Database

---

## Features

- User Registration
- User Login
- Create Transactions
- View Transaction History
- View High Value Transactions
- Stream API filtering

---

## Project Structure

```
bank-transaction-filter-system
│
├── backend
│   └── Spring Boot Application
│
├── frontend
│   └── React Application
│
└── README.md
```

---

## Run Backend

```
cd backend
mvnw.cmd spring-boot:run
```

Backend runs on:

```
http://localhost:8080
```

---

## Run Frontend

```
cd frontend/project
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## API Endpoints

Create Transaction

```
POST /api/transactions
```

Get All Transactions

```
GET /api/transactions
```

Get High Value Transactions

```
GET /api/transactions/high-value
```

---

## Author

Shashank Gowtham