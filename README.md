# 👥 User Management System

A modern, responsive user registration and management system built with React 19, Vite, and Tailwind CSS. This application demonstrates effective state management using React hooks (useState) with browser localStorage for persistent data storage.

![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?logo=tailwind-css)

## ✨ Features

- ✅ **Add New Users** - Register users with username, email, role, and profile picture
- ✅ **Role Management** - Assign roles (Admin, User, Manager, Developer)
- ✅ **Profile Pictures** - Upload profile pictures via URL or display initials as fallback
- ✅ **Delete Users** - Remove users from the system
- ✅ **Persistent Storage** - Data persists using browser localStorage
- ✅ **Timestamps** - Automatic tracking of user creation time
- ✅ **Responsive Design** - Beautiful UI that works on all devices
- ✅ **Smooth Animations** - Hover effects and transitions for better UX

## 🛠️ Technologies Used

- **React 19.2.0** - Modern React with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework
- **JavaScript ES6+** - Modern JavaScript syntax
- **localStorage API** - Browser storage for data persistence

## 📁 Project Structure

```
user-management-system/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Card.jsx          # User card component
│   ├── assets/
│   │   └── react.svg
│   ├── App.jsx                # Main application component
│   ├── App.css                # Application styles
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aminharoon/user-management-system-.git
   cd user-management-system-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 💡 Usage

1. **Add a New User**
   - Fill in the username, email, and role
   - Optionally add a profile picture URL
   - Click submit to add the user

2. **View Users**
   - All registered users are displayed in cards
   - Each card shows username, email, role, and timestamp
   - Profile pictures or initials are displayed

3. **Delete Users**
   - Click the "Delete" button on any user card to remove them
   - Data is automatically updated in localStorage

## 🎯 Key Learning Points

This project demonstrates:
- React hooks (useState) for state management
- localStorage integration for data persistence
- Component-based architecture
- Form handling in React
- Conditional rendering
- Event handling
- Date manipulation in JavaScript
- Tailwind CSS styling and responsive design

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Amin Haroon**
- GitHub: [@aminharoon](https://github.com/aminharoon)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing-fast build tool
- Tailwind CSS for the utility-first CSS framework

---

⭐ If you found this project helpful, please give it a star!
