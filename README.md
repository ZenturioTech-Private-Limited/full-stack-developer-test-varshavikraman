# ⏱ 1-Hour MERN + Docker + MongoDB Assignment

## Overview

Build a **minimal Notes application** using **React, Node.js, MongoDB, and Docker**.
The application must run **only using Docker** and support **adding and viewing notes**.

This task is intentionally small and time-boxed to evaluate **fundamental full-stack skills**.

---

## ⏱ Time Limit

**Maximum: 1 hour**

---

## 🛠 Allowed Tools

* VS Code (Git Classroom editor)
* Any text editor features inside VS Code
* Terminal / Command Prompt
* Docker & Docker Compose

---

## ❌ Not Allowed

* UI frameworks (MUI, AntD, Bootstrap, etc.)
* Authentication
* Redux / Zustand
* Code generators or templates
* Firebase / Supabase
* Tests
* Production builds

Using code generators or copying boilerplate will result in **disqualification**.

---

## 📂 Required Project Structure (STRICT)

```
mini-mern-notes/
│
├── backend/
│   ├── server.js
│   ├── Note.js
│   ├── package.json
│   └── Dockerfile
│
├── frontend/
│   ├── src/App.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
└── README.md
```

Do not add extra folders or services.

---

## 🔧 Backend Requirements (Node + Express + MongoDB)

### Database

* MongoDB (official Docker image)
* No authentication

### Note Schema

```js
{
  text: String,
  createdAt: Date
}
```

### API Endpoints

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| POST   | `/notes` | Add a new note |
| GET    | `/notes` | Get all notes  |

### Rules

* Reject empty note text
* Return JSON responses
* Backend must run on **port 5000**

---

## 🎨 Frontend Requirements (React + Tailwind)

* Single page app
* Input field for note text
* “Add” button
* Display list of notes
* Fetch data from backend API
* Frontend must run on **port 3000**

### Tailwind CSS

* Use **Tailwind via CDN only**
* Add the following to `public/index.html`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Rules:

* No Tailwind config file
* No custom themes or plugins
* Minimal utility classes only

---

## 🐳 Docker Requirements

### Services

Your `docker-compose.yml` must contain **exactly three services**:

```yaml
frontend
backend
mongo
```

### Docker Rules

* Use official Node and Mongo images
* MongoDB must be accessed using the service name
* App must run without Node or Mongo installed locally

---

## ▶️ How the App Should Run

```bash
docker-compose up --build
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend API: [http://localhost:5000](http://localhost:5000)
* MongoDB runs internally

---

## 🚀 Starting the Assignment

1. This repository **is the starting point of the assignment**
2. Open this repository in the provided **VS Code (Git Classroom) editor**
3. Start writing code **directly in this repo**
4. Create all required files yourself inside the existing folders
5. Do **not** look for or use any external starter links, templates, or repositories

---

## 📝 Completion Notes (MANDATORY)

At the bottom of this file, add:

* Time taken to complete
* Any assumptions made

---

## ✅ Evaluation Criteria

| Area         | What is Evaluated                |
| ------------ | -------------------------------- |
| Docker       | Containers communicate correctly |
| MongoDB      | Data persists                    |
| Backend      | Clean API + validation           |
| Frontend     | State handling + API calls       |
| Code Quality | Simplicity and clarity           |
| Discipline   | Following instructions           |

---

## ⚠️ Important Notes

* Over-engineering will be penalized
* Focus on correctness, not design
* Simpler solutions are preferred

---

**Good luck.**