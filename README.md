# ZenCF API Wrapper

API wrapper untuk [zencf](https://www.npmjs.com/package/zencf) - Cloudflare Bypass Tool.

Deployed on [Vercel](https://vercel.com) - 100% FREE & PERMANENT!

## 🙏 Credits

- **[zencf](https://www.npmjs.com/package/zencf)** by [@ZenzzXD](https://github.com/zenzxz) - Cloudflare Turnstile & WAF bypass library
- Deployed on [Vercel](https://vercel.com)

## 📡 API Endpoints

Base URL: `https://dancowcf.vercel.app`

### 1. POST /api/turnstile-min
Bypass Cloudflare Turnstile (Fast mode)

**Request:**
```json
{
  "url": "https://example.com",
  "siteKey": "0x4AAAAAAA...",
  "proxy": "host:port" // optional
}
```

**Response:**
```json
{
  "token": "0.H55t0RJBnCwUiw..."
}
```

**Example:**
```bash
curl -X POST https://dancowcf.vercel.app/api/turnstile-min \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com","siteKey":"0x4AAAAAAA..."}'
```

---

### 2. POST /api/turnstile-max
Bypass Cloudflare Turnstile (Maximum protection mode)

**Request:**
```json
{
  "url": "https://example.com",
  "proxy": "host:port" // optional
}
```

**Response:**
```json
{
  "token": "0.H55t0RJBnCwUiw..."
}
```

**Example:**
```bash
curl -X POST https://dancowcf.vercel.app/api/turnstile-max \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

---

### 3. POST /api/waf-session
Bypass Cloudflare WAF and get session cookies

**Request:**
```json
{
  "url": "https://example.com",
  "proxy": "host:port" // optional
}
```

**Response:**
```json
{
  "cookies": {
    "cf_clearance": "...",
    "__cf_bm": "..."
  },
  "headers": {
    "User-Agent": "..."
  }
}
```

**Example:**
```bash
curl -X POST https://dancowcf.vercel.app/api/waf-session \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

---

### 4. POST /api/source
Get HTML source after bypassing Cloudflare

**Request:**
```json
{
  "url": "https://example.com",
  "proxy": "host:port" // optional
}
```

**Response:**
```json
{
  "source": "<!DOCTYPE html>..."
}
```

**Example:**
```bash
curl -X POST https://dancowcf.vercel.app/api/source \
  -H "Content-Type: application/json" \
  -d '{"url":"https://example.com"}'
```

---

## 🚀 Deploy Your Own

1. Fork this repository
2. Connect to [Vercel](https://vercel.com)
3. Click "Deploy"
4. Done! Your own CF bypass API is ready!

## 📊 Usage in Bot/Script

### JavaScript/Node.js
```javascript
import fetch from 'node-fetch'

const API_URL = 'https://dancowcf.vercel.app'

// Turnstile Min
const { token } = await fetch(`${API_URL}/api/turnstile-min`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    url: 'https://example.com',
    siteKey: '0x4AAAAAAA...'
  })
}).then(r => r.json())

// WAF Session
const session = await fetch(`${API_URL}/api/waf-session`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ url: 'https://example.com' })
}).then(r => r.json())

console.log(session.cookies)
```

### Python
```python
import requests

API_URL = 'https://dancowcf.vercel.app'

# Turnstile Min
response = requests.post(f'{API_URL}/api/turnstile-min', json={
    'url': 'https://example.com',
    'siteKey': '0x4AAAAAAA...'
})
token = response.json()['token']
print(token)
```

## ⚙️ Features

- ✅ **4 Endpoints** - Turnstile Min/Max, WAF Session, HTML Source
- ✅ **100% Free** - Vercel Hobby plan
- ✅ **Fast** - Serverless functions
- ✅ **Reliable** - Auto-scaling
- ✅ **No Rate Limit** - From Vercel side

## 📄 License

This project uses [zencf](https://www.npmjs.com/package/zencf) under ISC License.

## ⚠️ Disclaimer

This API is for educational purposes only. Use responsibly and respect website terms of service.

## 🔗 Links

- [zencf NPM Package](https://www.npmjs.com/package/zencf)
- [Vercel Platform](https://vercel.com)
- [GitHub Repository](https://github.com/0xNtah/dancowcf)
