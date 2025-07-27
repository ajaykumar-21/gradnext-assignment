# 🚀 GradNext Full-Stack Assignments

This repository includes two full-stack assignments for GradNext:

1. ✅ **Assignment 1:** Responsive GradNext Landing Page
2. ✅ **Assignment 2:** Automation of Cohort Enrollment Workflow

---

## 📌 Assignment 1 – GradNext Landing Page 🌐

A modern, responsive landing page for GradNext, featuring:

### ✨ Features

- 🖼️ Hero Section
- ✅ Features / Benefits section
- 🗣️ Static Testimonials section
- 🔔 Call-to-Action (CTA) banner
- 📬 Footer with links and contact info
- 📱 Fully Responsive (Mobile, Tablet, Desktop)
- 🧾 Optional Cohort Form (connected to Assignment 2 backend)

### 🧰 Tech Stack

- Frontend: React.js, Tailwind CSS
- Hosting: Vercel

### 🌍 Live Demo

- **Landing Page:**
(https://gradnext-landing-page.vercel.app/)

---

## 📌 Assignment 2 – Automation of Cohort Enrollment 💼📩

An automated backend workflow for managing cohort interest, email follow-ups, and payment simulation.

### ✨ Features Implemented

- 📋 Cohort interest form submission (name, email, phone)
- 📧 Automatic selection email with dynamic payment link
- 🔍 Email tracking via SendGrid webhook:
  - Open status
  - Link click
- 🔁 Follow-up email logic:
  - Unopened after 2 days → Reminder 1
  - Opened but not clicked → Reminder 2
  - Clicked but not paid after 2 days → Final Reminder
- ✅ Stop communication if payment is completed
- 💳 Simulated Payment Screen (Pay / Cancel)
- 🔔 Webhook confirmation route to update payment status
- 📊 Admin Dashboard:
  - View all users and their statuses (opened, clicked, paid)
  - Live data synced with backend
- 🌐 Deployed and publicly accessible

---

## 📦 Tech Stack (Assignment 2)

- Backend: Node.js, Express
- Database: MongoDB Atlas
- Email Service: SendGrid (SMTP + Webhook)
- Scheduler: node-cron
- Frontend (Admin): React + Tailwind CSS
- Deployment: Render (Backend), Vercel (Frontend)

---

## 🧪 Testing Instructions

### ✅ Automation Workflow

1. Submit the cohort form or trigger `POST /api/cohort/submit` with:

```json
{
  "name": "Ajay",
  "email": "ajay@example.com",
  "phone": "9876543210"
}


2. Check your inbox for the selection email

3. Click the payment link → simulates interaction

4. Complete payment via /payment/success?userId=...

5. Cron job handles scheduled follow-ups based on user activity

6. Visit the Admin Dashboard to see status updates


🔗 Live Links
Type	URL
🧑‍💻 Landing Page - https://gradnext-landing-page.vercel.app/
📊 Admin Dashboard - https://gradnext-automation.vercel.app/
⚙️ Backend API - https://gradnext-assignment.onrender.com
```
