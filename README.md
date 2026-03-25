<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-FF0055?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</p>

<h1 align="center">⚡ Abraham Addisu — Developer Portfolio</h1>

<p align="center">
  <strong>A creative Android Studio–themed portfolio built with React & TypeScript</strong>
  <br />
  Senior Android Developer • Kotlin • Jetpack Compose
</p>

<p align="center">
  <a href="#-live-demo">Live Demo</a> •
  <a href="#-features">Features</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-project-structure">Project Structure</a> •
  <a href="#-license">License</a>
</p>

---

## 🌐 Live Demo

> **[View Portfolio →](https://id-preview--a9460ea2-268c-45ad-aef8-67058410b0a0.lovable.app)**  <!-- Update with your custom domain -->

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖥️ **Android Studio IDE Layout** | Full IDE simulation with sidebar, editor tabs, terminal, and status bar |
| 📱 **AVD Emulator** | Interactive Android device emulator previewing projects and experience |
| 🗂️ **File Tree Navigation** | Browse portfolio sections like actual Kotlin/Gradle project files |
| 🎨 **Syntax-Highlighted Editor** | Code-styled content with Kotlin syntax highlighting theme |
| ⏱️ **Work Timeline** | Professional experience displayed as an interactive timeline |
| 🧩 **Project Bento Grid** | Showcase projects in a modern bento-style layout |
| 📊 **Tech Stack Visualization** | Skills displayed as Gradle-style dependency blocks |
| 💻 **CLI Contact Form** | Terminal-style contact interface |
| 🏆 **Achievement Gallery** | Certifications and accomplishments section |
| 🌙 **Dark Theme** | IDE-authentic dark mode design system |
| 📱 **Responsive** | Adapts from mobile to ultrawide displays |
| 🎭 **Smooth Animations** | Framer Motion–powered transitions throughout |

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 18, TypeScript 5 |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3, CSS Custom Properties |
| **Animation** | Framer Motion 12 |
| **UI Components** | shadcn/ui, Radix UI primitives |
| **Routing** | React Router DOM 6 |
| **Testing** | Vitest, Playwright, Testing Library |
| **Linting** | ESLint 9, TypeScript ESLint |

---

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **bun**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/Minas-27/Abraham-Addisu-Portfolio.git
cd Abraham-Addisu-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── ide/                    # IDE simulation components
│   │   ├── AVDEmulator.tsx     # Android Virtual Device emulator
│   │   ├── IDEEditor.tsx       # Code editor with syntax highlighting
│   │   ├── IDESidebar.tsx      # File tree navigation
│   │   ├── IDEStatusBar.tsx    # Bottom status bar
│   │   ├── IDETerminal.tsx     # Terminal panel
│   │   └── IDETopBar.tsx       # Top toolbar with actions
│   ├── ui/                     # shadcn/ui component library
│   ├── AchievementGallery.tsx  # Certifications & achievements
│   ├── ContactCLI.tsx          # Terminal-style contact form
│   ├── HeroSection.tsx         # Landing hero section
│   ├── NavLink.tsx             # Navigation link component
│   ├── ProjectBentoGrid.tsx    # Projects bento grid layout
│   ├── TechStackGradle.tsx     # Skills as Gradle dependencies
│   └── WorkTimeline.tsx        # Professional experience timeline
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── pages/
│   ├── Index.tsx               # Main portfolio page
│   └── NotFound.tsx            # 404 page
├── index.css                   # Design system & CSS tokens
├── App.tsx                     # Router configuration
└── main.tsx                    # Application entry point
```

---

## 🎨 Design System

The portfolio uses a custom design system inspired by JetBrains IDE themes:

- **Color tokens** defined as CSS custom properties in HSL format
- **Semantic classes** for syntax highlighting (`syn-keyword`, `syn-string`, `syn-type`, etc.)
- **Glass morphism** effects for overlays and cards
- **Custom scrollbars** styled to match IDE aesthetics

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# E2E tests
npx playwright test
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

<p align="center">
  Built with ❤️ by <strong>Abraham Addisu</strong>
  <br />
  <sub>Crafted using <a href="https://lovable.dev">Lovable</a></sub>
</p>
