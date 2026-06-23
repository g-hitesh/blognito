# 🕵️‍♂️ Blognito

> **Write Unseen.** A premium, blazing-fast tech blog frontend built with React.

Blognito is a modern Single Page Application (SPA) designed to deliver a native-app-like reading experience. It features a custom sunset-gradient branding system, spatially aware page transitions, and a real-time, in-memory state management system. 

Currently, this repository holds the **Frontend Prototype**. The next phase of development will integrate a full Node.js, Express, and MongoDB backend.

---

## ✨ Key Features

* **Spatially-Aware Animations:** Built with Framer Motion, pages intelligently slide left or right depending on their physical position in the application layout.
* **Cinematic Featured Slider:** A custom-built, auto-scrolling 21:9 hero slider highlighting the most recent publications.
* **Live Global State:** Utilizes the React Context API to act as an in-memory database. Users can write and publish articles that instantly render across the platform without page reloads.
* **Instant Search & Filtering:** A highly optimized `Articles` dashboard that filters posts in real-time by keyword or category.
* **Glassmorphism UI:** Clean, modern interface with fixed scrolling navigation, custom SVG branding, and rigid CSS flexbox/grid layouts.

---

## 🛠️ Tech Stack

* **Core:** React 18, Vite
* **Routing:** React Router DOM v6
* **Animation:** Framer Motion
* **Styling:** Pure CSS (Custom variables, Flexbox, CSS Grid)
* **Icons:** Lucide React & Custom inline SVGs

---

## 🚀 Local Development Setup

To run this project locally on your machine, run these commands in your terminal:

**1. Clone the repository**
    git clone https://github.com/g-hitesh/blognito.git

**2. Navigate into the directory**
    cd blognito

**3. Install the dependencies**
    npm install

**4. Start the development server**
    npm run dev

The application will boot up at http://localhost:5173.

---

## 👥 The Team

Blognito is being developed by a 5-person engineering team based in Sahibzada Ajit Singh Nagar, Punjab.

* **Hitesh Kumar** - Frontend & MERN Developer
* **Himanshu** - Full-Stack Developer
* **Taran** - Backend Developer
* **Harman** - UI/UX & Developer
* **Saksham** - Systems Engineer

---

## 🗺️ Roadmap

- [x] UI/UX Design & Frontend Prototyping
- [x] Global State Management (React Context)
- [ ] Backend Initialization (Node.js & Express)
- [ ] Database Integration (MongoDB)
- [ ] User Authentication & Authorization