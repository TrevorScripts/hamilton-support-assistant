exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }
 
  let apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "ANTHROPIC_API_KEY not configured in Netlify environment variables" })
    };
  }
 
  // Defensive cleanup: strip any non-ASCII characters (handles invisible/Cyrillic lookalikes)
  apiKey = apiKey.replace(/[^\x20-\x7E]/g, "").trim();
 
  // Validate format
  if (!apiKey.startsWith("sk-ant-")) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "API key format invalid after sanitization. Key should start with 'sk-ant-'. Try regenerating the key and pasting it fresh into Netlify." })
    };
  }
 
  try {
    const resp = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01"
      },
      body: event.body
    });
 
    const data = await resp.text();
    return {
      statusCode: resp.status,
      headers: { "Content-Type": "application/json" },
      body: data
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: err.message })
    };
  }
};
 
