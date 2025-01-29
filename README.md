# 🗺️ Tourism Management System - The Tourist Guide 🌍

## Project Overview
The Tourist Guide site is an online platform designed to help travelers explore and plan trips across Bangladesh. The platform provides in-depth information about popular destinations, local culture, cuisine, and activities to ensure a rich and fulfilling travel experience. Whether you're searching for famous landmarks or hidden gems, The Tourist Guide site has everything you need to make your journey memorable.

---

## 🔑 Features
1. **Responsive Design**: Fully responsive for mobile, tablet, and desktop views, including the dashboard.
2. **Authentication System**: 
   - User registration with validation (strong passwords required).
   - Login via email/password and Google.
   - Forgot Password functionality.
3. **User Roles**:
   - **Normal User (Tourist)**: Browse packages, book tours, and manage their bookings and stories.
   - **Tour Guide**: Manage assigned tours and create stories.
   - **Admin**: Oversee packages, users, guides, bookings, and stories.
4. **CRUD Operations**: Full CRUD functionality with Sweet Alert/Toast notifications for feedback.
5. **Package Booking**: Users can book packages with a secure payment system using Stripe.
6. **Tourist Stories**: Share and manage travel stories with an option to share them on Facebook.
7. **Dynamic Home Page**:
   - **Our Packages**: Random packages displayed on each visit.
   - **Meet Our Tour Guides**: Randomly displayed tour guides.
8. **Tour Guide Application**: Tourists can apply to become a guide.
9. **Admin Dashboard**: Statistics such as total payments, guides, packages, clients, and stories.
10. **Environment Variables**: Firebase config keys and MongoDB credentials are securely hidden.

---

## 🔧 Technology Stack
- **Frontend**: React.js, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Context API, TanStack Query
- **Authentication**: Firebase Authentication
- **Payment System**: Stripe Payment Gateway
- **Others**: SweetAlert2, React Share, React Tabs, React DatePicker

---

## 🔗 Live Site
[Tourist Guide - Live Site](#)

---

## 💻 Admin Credentials
- **Username**: `admin2@gmail.com`
- **Password**: `Str0ngP@ssword1`

---

## 📂 Folder Structure
```plaintext
📦project-directory
 ┣ 📂client
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📂services
 ┣ 📂server
 ┃ ┣ 📂controllers
 ┃ ┣ 📂models
 ┃ ┗ 📂routes
 ┗ 📂config
