# 🗺️TripNest- Tourism Management System

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
- **State Management**: Context API, TanStack Query
- **Authentication**: Firebase Authentication
- **Payment System**: Stripe Payment Gateway
- **Others**: SweetAlert2, React Share, React Tabs, React DatePicker

---

## 🛠 Dependencies Used

This project utilizes the following key dependencies:

- **React** (`react`, `react-dom`) – Frontend library for building UI
- **React Router** (`react-router-dom`) – Handles navigation between pages
- **Firebase** – Authentication and Firestore database
- **Axios** – HTTP requests for fetching data
- **React Hook Form** – Form handling and validation
- **React Datepicker** – For selecting booking dates
- **Framer Motion** (`motion`) – Animations and UI transitions
- **SweetAlert2** – User-friendly alerts and notifications
- **Stripe** (`@stripe/react-stripe-js`, `@stripe/stripe-js`) – Payment integration
- **Swiper** – Image sliders and carousels

## 📂 Folder Structure

```plaintext
📦 project-directory
 ┣ 📂client
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┣ 📂hooks
 ┃ ┃ ┗ 📂services
 ┗ 📂config
```

## 🔗 Live Site

[Tourist Guide - Live Site](https://tourism-management-e5e73.web.app/)

---

## 💻 Admin Credentials

- **Username**: `admin2@gmail.com`
- **Password**: `Str0ngP@ssword1`

---

---

## 👤 User Credentials

- **Username**: `	liam.anderson@gmail.com`
- **Password**: `Str0ngP@ssword1`

---

---

## 🚀 How to Run the Project

### **Step 1: Clone the Repository**

```sh
git clone https://github.com/your-repo-url.git
cd project-directory
```

### **Step 2: Install Dependencies**

```sh
cd client
npm install
```

### **Step 3: Set Up Environment Variables**

Create a `.env` file in the root directory of the client and add the necessary environment variables such as Firebase API keys and Stripe credentials.

### **Step 4: Run the Frontend**

```sh
npm run dev
```

### **Step 5: Open the Application**

Once the frontend is running, open [http://localhost:5173](http://localhost:5173) in your browser to access the site.

---
