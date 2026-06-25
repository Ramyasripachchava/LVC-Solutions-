module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const {
    firstName,
    lastName,
    email,
    phone,
    gender,
    highestQualification,
    degreeMajor,
    universityInstitution,
    graduationYear,
    jobTitle,
    jobType,
    experience,
    resume,
    portfolio,
    country,
    state,
    city,
  } = req.body;

  // Build payload
  const scriptPayload = {
    secret: process.env.SCRIPT_SECRET,
    firstName,
    lastName,
    email,
    phone,
    gender,
    highestQualification,
    degreeMajor,
    universityInstitution,
    graduationYear,
    jobTitle,
    jobType,
    experience,
    resume,
    portfolio,
    country,
    state,
    city,
  };

  if (!process.env.FULLTIME_SCRIPT_URL) {
    return res.status(500).json({ message: "Server configuration error: FULLTIME_SCRIPT_URL is missing." });
  }

  try {
    const scriptResponse = await fetch(process.env.FULLTIME_SCRIPT_URL, {
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
