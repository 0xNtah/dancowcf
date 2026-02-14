import { zencf } from 'zencf'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { url, proxy } = req.body
    
    if (!url) {
      return res.status(400).json({ error: 'URL is required' })
    }

    const result = await zencf.source(url, proxy || null)
    
    return res.status(200).json(result)
  } catch (error) {
    return res.status(500).json({ 
      error: error.message 
    })
  }
}