# Page Navigation Component

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge\&logo=tailwind-css\&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge\&logo=vercel\&logoColor=white)

A dynamic form page navigation system built with **React** and **Tailwind CSS** that enables intuitive page management through drag-and-drop reordering, context menus, and real-time page editing.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Click_Here-blue?style=for-the-badge)](https://page-navigation-sandy.vercel.app/)

---

## 🚀 Features

### ✨ Interactive Page Navigation

* Clickable tabs for form pages (e.g., "Info", "Details", "Other")
* Visual indicator for active page
* Responsive design with horizontal scrolling

### 🖱️ Context Menu Actions *(Right-click on any page)*

* Rename pages (via browser prompt)
* Duplicate pages
* Delete pages
* Set as first page
* Placeholder for additional actions

### ➕ Dynamic Page Management

* Add new pages between existing ones via hover "+" buttons
* Add pages at the end of the list
* Intuitive drag-and-drop reordering

---

## 🛠️ Technologies Used

### **Frontend**

* [React 18](https://reactjs.org/) with functional components and hooks
* [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
* [react-dnd](https://react-dnd.github.io/react-dnd/about) for drag-and-drop
* [react-icons](https://react-icons.github.io/react-icons/) for iconography

### **Deployment**

* [Vercel](https://vercel.com/) for hosting and continuous deployment

---

## 📦 Installation

### **Prerequisites**

* Node.js (v16 or higher recommended)
* npm (v8 or higher) or yarn

### **Setup Instructions**

```bash
# Clone the repository
git clone https://github.com/sipolyashhivangi/page-navigation.git
cd page-navigation

# Install dependencies
npm install

# Start the development server
npm start
```

Then open your browser at:
[http://localhost:3000](http://localhost:3000)

---

## 📜 Available Scripts

| Command         | Description                             |
| --------------- | --------------------------------------- |
| `npm start`     | Runs the app in development mode        |
| `npm test`      | Launches the test runner                |
| `npm run build` | Creates a production build              |
| `npm run eject` | Ejects from Create React App (advanced) |

---

## 🧾 Project Structure

```
/src
├── components/         # Reusable components
│   ├── PageNav/        # Main navigation component
│   └── ContextMenu/    # Right-click menu component
├── hooks/              # Custom React hooks
│   └── usePageState.js # Page state logic
├── utils/              # Helper functions
├── App.js              # Main app component
└── index.js            # App entry point
```

---

## 🧪 How to Use the Component

### 🔹 Basic Navigation

* Click on any page tab to activate it
* The active page will be visually highlighted

### 🔹 Adding Pages

* Hover between pages to show the "+" button
* Click "+" to insert a new page at that position
* Use the "+" at the end to append a new page

### 🔹 Page Management

* Right-click a page tab to access context menu options
* Use drag-and-drop to reorder pages as needed


