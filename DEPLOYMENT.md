# Deployment Guide - Arya Garments

This guide explains how to deploy your MERN stack application for free so you can show it to other users.

## 1. Database (Render PostgreSQL)
1. Log in to [Render](https://render.com/).
2. Click **New +** > **PostgreSQL**.
3. Name your database (e.g., `arya_garments_db`).
4. Select the **Free** tier.
5. Once created, copy the **Internal Database URL** (for backend) or **External Database URL** (for local testing).
   It looks like: `postgres://user:password@hostname:port/dbname`

## 2. Backend (Render.com)
1. Push your code to a **GitHub** repository.
2. Log in to [Render](https://render.com/).
3. Create a **New Web Service**.
4. Connect your GitHub repo.
5. Set **Root Directory** to `backend`.
6. Set **Build Command** to `npm install`.
7. Set **Start Command** to `npm start`.
8. In **Environment Variables**, add:
   - `DATABASE_URL`: (Your Render PostgreSQL Internal URL)
   - `EMAIL_USER`: (Optional: your Gmail)
   - `EMAIL_PASS`: (Optional: Gmail App Password)
9. Once deployed, copy your Render URL (e.g., `https://arya-garments-api.onrender.com`).

## 3. Frontend (Vercel.com)
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** > **Project**.
3. Import your GitHub repo.
4. Set **Root Directory** to `frontend`.
5. Set **Build Command** to `npm run build`.
6. Set **Output Directory** to `dist`.
7. In **Environment Variables**, add:
   - `VITE_API_URL`: `https://your-render-url.onrender.com/api`
8. Deploy!

---

### Key URLs to remember:
- **Your live site**: (Provided by Vercel)
- **Your backend API**: (Provided by Render)
