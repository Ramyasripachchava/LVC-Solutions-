module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    name,
    email,
    phone,
    degree,
    universityName,
    yearOfClass,
    semester,
    branch,
    percentage,
    internshipRole,
    resume,
    portfolio,
    country,
    state,
    city,
  } = req.body;

  // Build payload — secret is added server-side only (never sent to browser)
  const scriptPayload = {
    secret: process.env.SCRIPT_SECRET,
    name,
    email,
    phone,
    degree,
    universityName,
    yearOfClass,
    semester,
    branch,
    percentage,
    internshipRole,
    resume,
    portfolio,
    country,
    state,
    city,
  };

  if (!process.env.INTERN_SCRIPT_URL) {
    return res.status(500).json({ message: "Server configuration error: INTERN_SCRIPT_URL is missing." });
  }

  try {
    const scriptResponse = await fetch(process.env.INTERN_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(scriptPayload),
    });

    if (!scriptResponse.ok) {
      const errorText = await scriptResponse.text();
      return res.status(502).json({ message: `Apps Script error: ${errorText}` });
    }

    return res.status(201).json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error("Error forwarding to Apps Script:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
