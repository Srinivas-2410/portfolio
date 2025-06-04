# Portfolio

A modern, full-stack developer portfolio app built with **React**, **Vite**, **Material UI**, and **Tailwind CSS**. This project serves as a personal website to showcase your projects, skills, experience, and more. The backend is powered by **Express** with **MongoDB** integration.

---

## Features

- ⚛️ **React 19** with Vite for lightning-fast development and HMR
- 🎨 **Material UI** and **Tailwind CSS** for flexible, clean, and responsive UI
- 🖼️ Beautiful icons via `react-icons` and `lucide-react`
- 📂 Modular code structure with path aliases (`@/`)
- 🚀 **Express.js** backend with MongoDB/Mongoose for project data, contact forms, and more
- 🔒 Environment configuration using `.env`
- 🛠️ Ready-to-use ESLint and Prettier configuration for consistent code quality
- 🔧 Easy to customize and deploy

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/) (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Srinivas-2410/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root with necessary variables (see `.env.example` if available).

4. **Start the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Scripts

| Command          | Description                       |
|------------------|-----------------------------------|
| `npm run dev`    | Start Vite dev server             |
| `npm run build`  | Build for production              |
| `npm run preview`| Preview built app locally         |
| `npm run lint`   | Run ESLint checks                 |

---

## Technologies Used

- **Frontend:** React, Vite, Material UI, Tailwind CSS, Emotion, React Icons, Lucide React, Radix UI
- **Backend:** Express.js, MongoDB, Mongoose, Dotenv, CORS
- **Tooling:** ESLint, Prettier, Vite Plugin React, PostCSS, Autoprefixer

---

## Project Structure

```
.
├── public/           # Static assets
├── src/              # React source code
├── server/           # Express backend (if present)
├── .env              # Environment variables
├── vite.config.js    # Vite config
└── package.json
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/Srinivas-2410/portfolio/issues) or submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [MongoDB](https://mongodb.com/)
