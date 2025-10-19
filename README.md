# Lotusia Venture — One‑Page Site (React + Vite + Tailwind)

## Local setup
1) Install Node.js (LTS) from https://nodejs.org
2) Install dependencies:
   npm install
3) Run locally:
   npm run dev

## Deploy to Vercel
- Push this folder to a new GitHub repository.
- In Vercel, import the repo → Framework preset: Vite → Build: npm run build → Output: dist
- Add your Webcentral DNS:
    A  @    76.76.21.21
    CNAME  www  cname.vercel-dns.com
