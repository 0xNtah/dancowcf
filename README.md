DancowCF API
A lightweight REST API for bypassing Cloudflare protection layers, deployed serverlessly on Vercel.
Free to use. Free to deploy. No setup required.
📡 API Endpoints
Base URL: https://dancowcf.vercel.app
POST /api/turnstile-min
Solve Cloudflare Turnstile challenge (Fast mode)
Request Body:
{
  "url": "https://example.com",
  "siteKey": "0x4AAAAAAA...",
  "proxy": "host:port"
}
proxy is optional
Response:
{
  "token": "0.H55t0RJBnCwUiw..."
}
cURL Example:
curl -X POST https://dancowcf.vercel.app/api/turnstile-min \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","siteKey":"0x4AAAAAAA..."}'
POST /api/turnstile-max
Solve Cloudflare Turnstile challenge (Maximum protection mode)
Request Body:
{
  "url": "https://example.com",
  "proxy": "host:port"
}
Response:
{
  "token": "0.H55t0RJBnCwUiw..."
}
cURL Example:
curl -X POST https://dancowcf.vercel.app/api/turnstile-max \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
POST /api/waf-session
Bypass Cloudflare WAF and retrieve valid session cookies
Request Body:
{
  "url": "https://example.com",
  "proxy": "host:port"
}
Response:
{
  "cookies": {
    "cf_clearance": "...",
    "__cf_bm": "..."
  },
  "headers": {
    "User-Agent": "..."
  }
}
cURL Example:
curl -X POST https://dancowcf.vercel.app/api/waf-session \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
POST /api/source
Retrieve the full HTML source of a Cloudflare-protected page
Request Body:
{
  "url": "https://example.com",
  "proxy": "host:port"
}
Response:
{
  "source": "<!DOCTYPE html>..."
}
cURL Example:
curl -X POST https://dancowcf.vercel.app/api/source \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
💻 Code Examples
JavaScript / Node.js
import fetch from 'node-fetch'

const API_URL = 'https://dancowcf.vercel.app'

// Solve Turnstile
const { token } = await fetch(`${API_URL}/api/turnstile-min`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com',
    siteKey: '0x4AAAAAAA...'
  })
}).then(r => r.json())

// Get WAF Session
const session = await fetch(`${API_URL}/api/waf-session`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com' })
}).then(r => r.json())

console.log(session.cookies)
Python
import requests

API_URL = 'https://dancowcf.vercel.app'

# Solve Turnstile
response = requests.post(f'{API_URL}/api/turnstile-min', json={
    'url': 'https://example.com',
    'siteKey': '0x4AAAAAAA...'
})
token = response.json()['token']
print(token)
🚀 Self-Host in Minutes
Fork this repository
Import the project into Vercel
Click Deploy
Your own instance is live — no configuration needed.
⚙️ Features
Feature
Details
Endpoints
4 — Turnstile Min/Max, WAF Session, HTML Source
Hosting
Vercel Hobby (free, permanent)
Performance
Serverless, globally distributed
Scalability
Auto-scaling, no cold-start bottlenecks
Rate Limit
Up to 100 req/sec (Vercel-side)
⚠️ Disclaimer
This project is intended for educational and research purposes only.
Users are solely responsible for ensuring their usage complies with applicable laws and the terms of service of any target website.
🔗 Links
Vercel Platform
GitHub Repository
