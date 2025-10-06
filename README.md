# OpenStudent

**Open-source, privacy-first student planner for modern education**

OpenStudent is a full-stack academic organization platform built with best practices, scalability, and privacy at its core. It provides students, teachers, and institutions with powerful tools for managing classes, assignments, notes, files, grades, and calendars—all while being fully open source and self-hostable.

## 🏗️ Architecture

OpenStudent follows strict separation of concerns with three independent systems:

- **Backend (NestJS)**: RESTful API server with authentication, business logic, and data persistence
- **Web (Next.js)**: Progressive web app with offline support and responsive design
- **Mobile (Expo)**: Native mobile app with offline-first architecture and delta synchronization

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20.15.1 or higher
- **Docker** and **Docker Compose**
- **Git**

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/OpenStudent.git
   cd OpenStudent
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the development environment**
   ```bash
   docker compose up --build
   ```

4. **Access the applications**
   - Backend API: http://localhost:3000
   - API Documentation: http://localhost:3000/api/docs
   - Web App: http://localhost:3001
   - MinIO Console: http://localhost:9001 (admin/password123)

## 📦 Project Structure

```
OpenStudent/
├── server/          # NestJS backend (TypeScript)
├── web/             # Next.js web application (TypeScript + React)
├── mobile/          # Expo React Native app (TypeScript + React Native)
├── docs/            # Comprehensive documentation
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── .github/workflows/  # CI/CD pipelines
```

## 🛠️ Technology Stack

### Backend
- **NestJS 10** - Enterprise-grade Node.js framework
- **Prisma 6** - Type-safe ORM for PostgreSQL
- **PostgreSQL 16.3** - Primary database
- **Redis 7.2.5** - Session storage and caching
- **MinIO** - S3-compatible object storage
- **Argon2** - Secure password hashing
- **JWT** - Token-based authentication
- **Zod** - Runtime validation

### Web
- **Next.js 15.5** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS 4.0** - Utility-first styling
- **NextAuth 5.2** - Authentication for Next.js
- **React Query 5.55** - Server state management
- **Headless UI** - Accessible component primitives

### Mobile
- **Expo SDK 54** - React Native framework
- **React Native 0.81** - Cross-platform mobile development
- **SQLite** - Local data caching
- **expo-task-manager** - Background synchronization

## ✨ Key Features

### For Students
- 📚 **Class Management**: Organize all your courses in one place
- ✅ **Task Tracking**: Never miss an assignment with smart prioritization
- 📝 **Note Taking**: Markdown editor with tagging and full-text search
- 📁 **File Storage**: Attach and access course materials anywhere
- 📅 **Calendar**: Integrated timetable and event management
- 📊 **Grade Tracking**: Monitor your academic performance with detailed analytics

### For Teachers
- 👥 **Class Administration**: Manage students and course materials
- 📋 **Assignment Creation**: Distribute homework and track completion
- 📈 **Grading System**: Flexible grading with international standards support
- 📢 **Announcements**: Share updates with entire classes
- 📂 **Resource Sharing**: Upload and organize teaching materials

### Technical Highlights
- 🔐 **Privacy-First**: Self-hosted, open-source, no data mining
- 🔒 **Secure**: Argon2 hashing, JWT authentication, RBAC
- 📱 **Offline Support**: Full mobile offline mode with intelligent sync
- 🌍 **International**: Multi-language grading systems (German, US, UK, custom)
- 🚀 **Performant**: Optimized queries, caching, lazy loading
- ♿ **Accessible**: WCAG 2.1 AA compliance
- 🧪 **Well-Tested**: Comprehensive test coverage across all layers

## 🔐 Security

OpenStudent implements security best practices:

- **Password Security**: Argon2 hashing with per-user salts
- **Authentication**: JWT with access/refresh token rotation
- **Authorization**: Role-based access control (RBAC)
- **Input Validation**: Zod schemas for all API inputs
- **Rate Limiting**: Protection against brute-force attacks
- **CORS**: Configured for production environments
- **File Upload**: MIME type validation and size limits
- **SQL Injection**: Prevented via Prisma's parameterized queries

## 📖 Documentation

Comprehensive documentation is available in the `/docs` directory:

- [Architecture Overview](docs/architecture.md)
- [API Reference](docs/api-reference.md)
- [Development Guide](docs/development.md)
- [Deployment Guide](docs/deployment.md)
- [Contributing Guide](CONTRIBUTING.md)

## 🧪 Testing

Each component has its own testing infrastructure:

```bash
# Backend tests
cd server && npm test

# Web tests
cd web && npm test

# Mobile tests
cd mobile && npm test

# E2E tests
npm run test:e2e
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

Built with modern open-source technologies and best practices. Special thanks to the communities behind NestJS, Next.js, Expo, and all the amazing tools that make this possible.

## 📞 Support

- **Documentation**: [docs.openstudent.org](https://docs.openstudent.org)
- **Issues**: [GitHub Issues](https://github.com/yourusername/OpenStudent/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/OpenStudent/discussions)

---

**Made with ❤️ for students, teachers, and educational institutions worldwide.**
