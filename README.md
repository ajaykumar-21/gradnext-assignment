# GradNext - Automation of Cohort Enrollment 💼📩

This project implements an automated workflow for cohort enrollment for GradNext's Consulting Cohort 101 program. It automates follow-up emails based on user behavior and simulates real-world enrollment logic including email tracking, payment simulation, and user journey visualization.

---

## 📦 Tech Stack

**Backend**: Node.js, Express, MongoDB Atlas  
**Email Service**: SendGrid  
**Scheduler**: node-cron  
**Deployment**: Render (backend), Vercel (admin dashboard - optional)  
**Frontend (Admin Dashboard)**: React, Tailwind CSS

---

## ✨ Features Implemented

- 📋 Cohort interest form submission (name, email, phone)
- 📧 Automatic selection email with dummy payment link
- 🔍 Email tracking (open, click)
- 🔁 Follow-up email logic based on behavior:
  - Unopened after 2 days → Reminder 1
  - Opened but not clicked → Reminder 2
  - Clicked but not paid after 2 days → Final Reminder
- ✅ Stop follow-ups on payment
- ⚡ Simulated payment confirmation via a webhook-style route
- 📊 Admin dashboard to view all users & their statuses
- 🌐 Fully deployed backend for public access

---

## 🚀 Live Demo

- **Backend API**: [https://cohort-backend.onrender.com](https://cohort-backend.onrender.com)
- **Frontend Admin Dashboard**: _[add Vercel link here]_ (optional)

---

## 📁 Folder Structure

/backend
├── server.js
├── models/
├── routes/
├── services/
├── cron/
├── webhooks/
└── .env.example

---

## 🧪 How to Test

1. **Submit a cohort form** (or call `/api/cohort/submit` manually)
2. You’ll receive an email with a **payment link**
3. Open/click it — webhook will update database
4. Use `/payment/success?userId=...` to simulate a successful payment
5. Cron job (manual or daily) triggers follow-up logic
6. Check the **admin dashboard** to see real-time updates

---

## ⚙️ Local Setup

1. Clone the repo
2. Install dependencies:

```bash
cd backend
npm install
```
