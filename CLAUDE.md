# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

OpenStudent - A new project repository.

**Status**: This repository is currently empty. This file will be updated once the project structure and codebase are established.

## Getting Started

Once code is added to this repository, this section will include:
- Build commands
- Test execution
- Development workflow
- Architecture overview



What the thing should do:

**OpenStudent** is an open-source, full-stack student planner designed to modernize and simplify academic organization for students, teachers, and institutions. It is built from the ground up with a focus on **privacy, performance, best practices, and scalability**, and it follows a **strict separation of concerns** between backend, web frontend, and mobile app. Each component is developed independently, using official framework generators, commands, and structure guidelines — ensuring a maintainable, standards-compliant codebase that can grow organically and be deployed anywhere.

The platform is composed of three main systems: a **NestJS backend server**, a **Next.js web application**, and an **Expo React Native mobile app**, all working together through a RESTful API layer and a shared PostgreSQL database. The architecture avoids monorepo complexity by treating each system as its own self-contained project under the root directory `OpenStudent`, with proper documentation, CI/CD pipelines, Docker support, and version control setup.

The **backend (OpenStudent/server)** is built using **NestJS 10**, **TypeScript 5.6**, and **Prisma 6** as the ORM for **PostgreSQL 16**. It provides all API routes, business logic, authentication, synchronization, and integrations. Following NestJS best practices, every feature is implemented in its own module, using the official Nest CLI to generate boilerplate code with commands like `nest generate module`, `nest generate controller`, and `nest generate service`. Major modules include Authentication, Users, Classes, Courses, Tasks, Notes, Files, Grading, Academic, and Sync.

The **authentication system** supports secure email-password registration and login using **Argon2** password hashing and **JWT tokens** with refresh and rotation. It enforces **role-based access control (RBAC)** across three global roles: **Student**, **Teacher**, and **Admin**. A user can belong to multiple classes through the ClassMembership relation, and role-specific permissions apply within those classes. The API includes routes for password reset, token refresh, and logout, ensuring full session lifecycle management. Rate limiting is implemented on sensitive endpoints, and all incoming payloads are validated using **Zod** DTOs to prevent malformed data.

All **class-related features** are designed for collaborative use. Every class acts as a shared space where all members — students and teachers — can view or add shared items like homework, announcements, documents, and notes. For example, when a teacher creates a homework assignment or uploads a file to a class, it becomes instantly visible to all class members. Each class can contain multiple **courses** to represent subjects or subtopics. Courses support elective or split-group setups, such as Religion (Evangelisch/Katholisch) or elective modules (Wahlfächer).

The **task and homework system** allows students and teachers to add, prioritize, and track assignments with fields for title, description, due date, priority level, and status. Tasks can be linked to a class or course and are either shared (class-wide) or private (user-only). Tasks and homework entries are synchronized automatically across devices, supporting delta sync queries (`updated_after` parameter) for efficient data updates.

A **calendar and timetable system** provides weekly and monthly views of all scheduled events, including class sessions, study sessions, and exams. The backend supports **ICS export** for integration with third-party calendars and **ICS import** to bring external events into OpenStudent. Calendar items are tied to courses or classes and can include references to attached files or related notes.

The **note-taking module** includes a full Markdown editor with tagging and linking capabilities. Students can create personal or class-shared notes, which can reference tasks, courses, or events. Notes are searchable using PostgreSQL full-text search via tsvector indexing, allowing quick lookup by title, tag, or content. Markdown content is rendered both in the web and mobile app with syntax highlighting and safe HTML parsing.

File management is powered by **MinIO**, providing S3-compatible object storage. Uploaded files are linked to tasks, classes, notes, or calendar events. The system generates signed URLs for secure, time-limited downloads and uploads. File metadata is stored in PostgreSQL, and large files are uploaded directly from the client to MinIO for performance. A MIME-type allowlist and file size limit are enforced for security, and an optional antivirus hook can be integrated into the upload pipeline.

OpenStudent also supports a flexible **grading system** capable of handling international grading standards. Built-in templates include the **German 1.0–6.0 scale**, the **US A–F scale with GPA weighting**, and **UK percentage bands**, with support for **custom grading schemas** defined by administrators. Grades are stored per assignment or exam (GradeItem) and linked to students via GradeEntry. Aggregations are calculated automatically per course, academic segment, and overall year average.

The academic calendar system includes **multi-segment year definitions** such as semesters, trimesters, or half-years, each with configurable start and end dates. Courses and grades roll up into these segments, providing structured performance reports. The API exposes grading summaries and segment averages, accessible by both teachers and students.

The **web application (OpenStudent/web)** is built using **Next.js 15.5**, **React 19**, and **Tailwind CSS 4.0**. It uses **next-auth 5.2** for client authentication (JWT strategy) and **React Query 5.55** for data fetching and caching. The UI follows a clean, responsive design with Headless UI components, light/dark mode, and PWA support for offline caching and push updates. Major pages include login, registration, dashboard, class overview, homework, notes, files, calendar, grades, and settings. The web client communicates exclusively with the NestJS backend API and automatically refreshes tokens and session data through JWT middleware.

The **mobile application (OpenStudent/mobile)** is built using **Expo SDK 54** and **React Native 0.81**, following official best practices for offline-first architecture. It features a local SQLite database for caching, synchronized via background jobs using `expo-task-manager`. The app supports full offline access to cached data such as tasks, notes, and classes, and merges changes intelligently when reconnected. It implements delta synchronization using the `updated_after` API pattern and includes conflict resolution: for shared resources, the server version always wins; for private items, the client keeps the newer one. File caching uses checksums and expiry rules to avoid unnecessary re-downloads. The mobile UI mirrors the web version in structure but uses native components and gestures for mobile ergonomics.

Each of these systems is supported by a robust **Docker-based infrastructure**. Docker Compose configurations (`docker-compose.dev.yml` and `docker-compose.prod.yml`) define all services: PostgreSQL 16.3, Redis 7.2.5, MinIO RELEASE.2025-07-11T18-22-32Z, and Node.js 20.15.1 containers for both API and web. The environment is fully reproducible — a developer can clone the repository, run `cp .env.example .env` followed by `docker compose up --build`, and have a complete running stack. Continuous Integration via GitHub Actions runs linting, type checks, unit tests, and builds on every commit. ESLint and Prettier ensure code quality, and Jest/Playwright handle backend and frontend testing respectively.

The project enforces **best practices at every layer**. NestJS modules are isolated with dependency injection. Prisma migrations manage database schema evolution with strict referential integrity. React components follow atomic design principles, and data fetching uses React Query’s cache synchronization. Security follows OWASP guidelines, including strong password hashing, input validation, CORS, and JWT expiration handling. All external secrets and credentials are managed via environment variables.

The documentation includes a full **README**, **API reference (Swagger/OpenAPI)**, and developer guides under `/docs`. Each subsystem includes its own README describing setup, commands, environment variables, and deployment procedures. The code repository maintains a clean commit history with meaningful messages and logical separation of features.

In summary, OpenStudent is a **best-practice educational platform** that combines modern web and mobile technologies with a robust backend architecture. It provides students and teachers with tools for organizing classes, managing assignments, taking notes, sharing files, tracking grades, and working collaboratively — all while being fully open source and deployable on any server. The combination of NestJS, Next.js, and Expo ensures stability, performance, and cross-platform reach. Its modular design, adherence to official framework commands, and strict focus on security and scalability make it an ideal foundation for long-term development in academic environments.

Every feature, from authentication to grading, is implemented with real-world use in mind. Every component can be independently deployed, scaled, or replaced, and every developer can rebuild the environment using only standard commands — no manual tweaking required. OpenStudent stands as a model project for modern, transparent, and privacy-respecting educational software — ready for use, inspection, and continuous improvement by the global open-source community.
