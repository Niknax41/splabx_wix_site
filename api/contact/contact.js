export default async function handler(req, res) {
    // Allow CORS (Wix → Vercel)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  
    // Handle preflight (required for Wix fetch)
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }
  
    if (req.method === "POST") {
      try {
        const data = req.body;
  
        return res.status(200).json({
          ok: true,
          message: "Message received",
          data
        });
  
      } catch (error) {
        return res.status(500).json({
          ok: false,
          message: "Server error"
        });
      }
    }
  
    return res.status(405).json({
      ok: false,
      message: "Method not allowed"
    });
  }