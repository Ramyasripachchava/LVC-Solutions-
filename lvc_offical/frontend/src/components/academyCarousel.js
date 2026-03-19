import Carousel from "react-bootstrap/Carousel";

function AcademyCarousel() {
  return (
    <Carousel className="academy-carousel gradient-background-color bg-black">

      {/* SLIDE 1 — THE REAL PROBLEM vs HOW WE FIX IT */}
      <Carousel.Item>
        <div className="p-5" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
          
          {/* LEFT */}
          <div>
            <h5 style={{ color: "#d4af37", letterSpacing: "3px" }}>THE REAL PROBLEM</h5>
            <h2 style={{ color: "white", marginTop: "12px" }}>
              The job search problem no one talks about.
            </h2>
          

            <div className="mt-4 p-4" style={{ border: "1px solid #3a7bd5", borderRadius: "14px" }}>
              <h6 style={{ color: "#d4af37" }}>PAIN · CONFUSION</h6>
              <ul style={{ color: "white", marginTop: "12px" }}>
                <li>100+ applications, zero responses</li>
                <li>No structure or roadmap</li>
                <li>Weak resume & LinkedIn</li>
                <li>Fear and low confidence in interviews</li>
                <li>No recruiter or vendor network</li>
                <li>Months wasted guessing</li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h5 style={{ color: "#d4af37", letterSpacing: "3px" }}>HOW WE FIX IT</h5>
            <h2 style={{ color: "white", marginTop: "12px" }}>
              LVC 360° replaces struggle with a professional engine.
            </h2>

            <div className="mt-4 p-4" style={{ border: "1px solid #3a7bd5", borderRadius: "14px" }}>
              <h6 style={{ color: "#d4af37" }}>CLARITY · SUPPORT</h6>
              <ul style={{ color: "white", marginTop: "12px" }}>
                <li>Daily structured job marketing by LVC team</li>
                <li>Clear 360° roadmap from application to offer</li>
                <li>Premium resume & LinkedIn branding </li>
                <li>Unlimited mock interviews & coaching</li>
                <li>Recruiter & vendor outreach engine</li>
                <li>Live dashboard with real progress</li>
              </ul>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 2 — WHY LVC 360 IS DIFFERENT */}
      <Carousel.Item>
        <div className="p-5 text-center">
          <h5 style={{ color: "#d4af37", letterSpacing: "3px" }}>
            WHY LVC 360° IS DIFFERENT
          </h5>
          <h2 style={{ color: "white", marginTop: "16px" }}>
            Not another consultancy. A managed career engine.
          </h2>
          <p style={{ color: "#cfcfcf", maxWidth: "900px", margin: "16px auto" }}>
            We don’t just train you and disappear. We actively manage your job-search
            engine and stay accountable until placement.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            {[
              ["Selective Admissions", "Only serious, interview-cleared candidates"],
              ["Real-Time Dashboard", "Submissions, mocks & status in one place"],
              ["Dedicated Case Manager", "One owner for your entire journey"],
              ["Daily Job Marketing", "High-volume, targeted submissions"],
              ["Unlimited Mocks", "Practice until confidence is real"],
              ["Pay After Placement", "Success-aligned pricing models"],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  border: "1px solid #3a7bd5",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  color: "white",
                  textAlign: "left",
                }}
              >
                <h5>{title}</h5>
                <p style={{ color: "#cfcfcf", marginTop: "8px" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 3 — WHO IS THIS PROGRAM FOR */}
      <Carousel.Item>
        <div className="p-5 text-center">
          <h5 style={{ color: "#d4af37", letterSpacing: "3px" }}>
            WHO IS THIS PROGRAM FOR?
          </h5>
          <p style={{ color: "#cfcfcf", marginTop: "12px" }}>
            Built for ambitious people who want real change and real offers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            {[
              "OPT / CPT / STEM students",
              "International graduates struggling with interviews",
              "Career gap candidates",
              "H1B / H4 / EAD holders",
              "Career switchers (Non-IT → IT)",
              "People afraid of interviews",
              "Candidates lacking strong resume/projects",
              "Anyone serious about REAL job marketing",
            ].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #3a7bd5",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  color: "white",
                  textAlign: "left",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 4 — WHY CHOOSE LVC 360 */}
      <Carousel.Item>
        <div className="p-5 text-center">
          <h5 style={{ color: "#d4af37", letterSpacing: "3px" }}>
            WHY CHOOSE LVC 360° CAREER PROGRAM?
          </h5>
          <p style={{ color: "#cfcfcf", marginTop: "12px" }}>
            Other institutes teach. We transform careers.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            {[
              "Daily job marketing",
              "USA-based program & support",
              "Vendor & client network access",
              "LVC Spotlight Media branding boost",
              "Fair Job Portal advantage",
              "Strict grooming & performance tracking",
              "Real projects & shadowing",
              "Multiple mock interviews",
              "Personalized training support",
              "Premium quality at affordable pricing",
            ].map((item) => (
              <div
                key={item}
                style={{
                  border: "1px solid #3a7bd5",
                  borderRadius: "14px",
                  padding: "1.5rem",
                  color: "white",
                  textAlign: "left",
                }}
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default AcademyCarousel;
