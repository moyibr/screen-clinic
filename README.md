# 🦷 Screen Clinic — Premium Dental Clinic Website

A production-ready, full-stack dental clinic website built as a **reusable agency template**. Designed for scalability, maintainability, and easy client onboarding.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwindcss)
![Express](https://img.shields.io/badge/Express-5-black?logo=express)
![TypeScript](https://img.shields.io/badge/TypeScript-7-blue?logo=typescript)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15-blue?logo=postgresql)
![Prisma](https://img.shields.io/badge/Prisma-7-teal?logo=prisma)

---

## ✨ Features

### Frontend
- **Modern UI** — Premium, responsive design with Framer Motion animations
- **SEO Optimized** — Dynamic meta tags via `react-helmet-async`
- **Centralized Config** — All branding, contact info, and images managed from config files
- **Data-Driven** — Services, Doctors, Testimonials, and FAQs powered by modular data files
- **Form Validation** — `react-hook-form` + `yup` for Appointment & Contact forms
- **Agency-Ready** — Swap `siteConfig.js` and `siteImages.js` to rebrand for any client

### Backend
- **Clean Architecture** — Routes → Controllers → Services → Repositories
- **TypeScript** — Full type safety across the entire backend
- **Security** — Helmet, CORS, Rate Limiting, Zod validation
- **Logging** — Winston logger with console + file transports
- **Docker** — PostgreSQL via Docker Compose
- **Health Check** — `/health` endpoint for monitoring

---

## 📁 Project Structure

```
screen-clinic/
├── frontend/                # React + Vite + Tailwind CSS
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Route pages (Home, About, Contact, etc.)
│   │   ├── data/            # Services, Doctors, Testimonials data
│   │   ├── config/          # siteConfig.js, siteImages.js
│   │   └── services/        # API service layer
│   └── IMAGE_REPLACEMENT_GUIDE.md
│
├── backend/                 # Node.js + Express + TypeScript
│   ├── src/
│   │   ├── api/             # Controllers, Middlewares, Routes
│   │   ├── config/          # Environment config (Zod validated)
│   │   ├── core/            # Custom error classes
│   │   ├── repositories/    # Data access layer (Prisma)
│   │   ├── services/        # Business logic
│   │   └── utils/           # Logger, helpers
│   ├── prisma/              # Database schema & migrations
│   └── docker-compose.yml
│
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites
- **Node.js** v18+
- **Docker** (for PostgreSQL)

### 1. Clone the repository
```bash
git clone https://github.com/moyibr/screen-clinic.git
cd screen-clinic
```

### 2. Start the Frontend
```bash
cd frontend
npm install
npm run dev
# → http://localhost:5173
```

### 3. Start the Backend
```bash
cd backend
cp .env.example .env        # Create environment file
docker compose up -d         # Start PostgreSQL
npm install
npm run dev
# → http://localhost:5000
```

### 4. Verify
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend Health: [http://localhost:5000/health](http://localhost:5000/health)

---

## ⚙️ Environment Variables

Copy `backend/.env.example` to `backend/.env` and configure:

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `development` |
| `PORT` | Backend server port | `5000` |
| `DATABASE_URL` | PostgreSQL connection string | (see .env.example) |
| `JWT_SECRET` | JWT signing secret | (change in production!) |
| `JWT_EXPIRES_IN` | Token expiration | `7d` |
| `CORS_ORIGIN` | Allowed frontend origin | `http://localhost:5173` |

---

## 🖼️ Image Management

All images are centralized in `frontend/src/config/siteImages.js`. To replace placeholder images with real client photos:

1. Add new images to `frontend/src/assets/`
2. Update the imports in `siteImages.js`
3. **No JSX files need to be modified**

See [`IMAGE_REPLACEMENT_GUIDE.md`](frontend/IMAGE_REPLACEMENT_GUIDE.md) for detailed instructions.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 8, Tailwind CSS 4 |
| Animations | Framer Motion |
| Forms | React Hook Form + Yup |
| SEO | React Helmet Async |
| Icons | Lucide React, React Icons |
| Backend | Node.js, Express 5, TypeScript |
| Database | PostgreSQL 15, Prisma ORM |
| Security | Helmet, CORS, Rate Limiting, Zod |
| Logging | Winston |
| DevOps | Docker, Docker Compose |

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

**Mo. Yakub** — [@moyibr](https://github.com/moyibr)
