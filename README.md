# CV-Lyzer: AI-Powered Applicant Tracking System

<p align="center">
  <a href="https://cv-lyzer.vercel.app/" target="_blank" rel="noopener noreferrer">
    <img src="https://img.shields.io/badge/Live%20Demo-Click%20Here-blue?logo=vercel&style=for-the-badge" alt="Live Demo" />
  </a>
</p>

---

## Screenshots

<p align="center">
  <img src="public/images/Screenshot 1.png" alt="Dashboard Screenshot" width="600" />
  <br/>
  <img src="public/images/Screenshot 2.png" alt="Resume Upload Screenshot" width="600" />
  <br/>
</p>

---

CV-Lyzer is a modern, enterprise-ready, AI-powered Applicant Tracking System (ATS) designed to streamline the recruitment process. Built with React Router, TypeScript, and Tailwind CSS, it offers a robust, scalable, and production-ready solution for parsing, analyzing, and managing resumes with advanced features and a beautiful UI.

## Features

- **AI-Powered Resume Analysis**: Extracts and scores resume content for ATS compatibility.
- **Server-Side Rendering (SSR)**: Fast, SEO-friendly, and scalable by default.
- **Modern Frontend Stack**: Built with React 19, React Router 7, and Tailwind CSS 4.
- **Drag-and-Drop Resume Upload**: User-friendly interface for uploading and parsing resumes.
- **PDF Parsing**: Utilizes `pdfjs` and `pdfjs-dist` for robust PDF handling.
- **State Management**: Powered by Zustand for predictable and scalable state.
- **Hot Module Replacement (HMR)**: Fast development experience with Vite.
- **Dockerized**: Easy deployment to any cloud or on-premise environment.

## Project Structure

```
├── app/                # Main application code (components, routes, utils)
├── public/             # Static assets (images, icons, pdf worker)
├── Dockerfile          # Multi-stage Docker build
├── package.json        # Project metadata and scripts
├── tsconfig.json       # TypeScript configuration
├── vite.config.ts      # Vite build configuration
├── react-router.config.ts # React Router SSR config
```

## Getting Started

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- [npm 9+](https://www.npmjs.com/)
- [Docker](https://www.docker.com/) (optional, for containerized deployment)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone <your-repo-url>
   cd cv-lyzer
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   ```

### Development

Start the development server with Hot Module Replacement (HMR):

```powershell
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### Building for Production

Create a production build:

```powershell
npm run build
```

### Running in Production

Start the production server:

```powershell
npm run start
```

### Docker Deployment

Build and run the app in Docker:

```powershell
docker build -t cv-lyzer .
docker run -p 3000:3000 cv-lyzer
```

The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage Guidelines

- **Resume Upload**: Drag and drop resumes (PDF) to analyze and score them.
- **ATS Feedback**: View detailed feedback and suggestions for improving resume compatibility.
- **Navigation**: Use the navigation bar to access different features and routes.

## Dependencies

- [React](https://react.dev/) ^19.1.0
- [React Router](https://reactrouter.com/) ^7.7.0
- [Tailwind CSS](https://tailwindcss.com/) ^4.1.4
- [Vite](https://vitejs.dev/) ^6.3.3
- [Zustand](https://zustand-demo.pmnd.rs/) ^5.0.6
- [pdfjs & pdfjs-dist](https://mozilla.github.io/pdf.js/)
- [clsx](https://github.com/lukeed/clsx)
- [react-dropzone](https://react-dropzone.js.org/)

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear messages.
4. Open a pull request describing your changes.

Please ensure your code follows the existing style and passes all checks.

## License

This project is licensed under the UNLICENSED license (see `package-lock.json`).

---

Built with ❤️ using React Router, TypeScript, and Tailwind CSS.
