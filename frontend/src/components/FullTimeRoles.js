import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import intern1 from "../assets/intern1.png"
import intern2 from "../assets/intern2.jpg"
import intern3 from "../assets/intern3.jpg"
import intern4 from "../assets/intern4.jpg"
import intern5 from "../assets/intern5.jpeg"
import intern6 from "../assets/intern6.jpeg"

const internImages = [
  intern1,
  intern2,
  intern3,
  intern4,
  intern5,
  intern6,
];

const InternshipCard = ({ title, description, fullDescription, image, onApplyClick }) => {

  return (
    <div
      className="card"
      style={{
        width: "19rem",
        border: "none",
        borderRadius: "18px",
        overflow: "hidden",
        background: "#000000",
        boxShadow: "0 14px 30px rgb(0, 0, 0)",
        position: "relative",
        minHeight: "430px",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0.12))",
          }}
        />
      </div>
      <div
        className="card-body"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
          padding: "20px 16px 18px 16px",
        }}
      >
        <h5 className="card-title" style={{ marginBottom: "8px", fontWeight: "700", color: "#ffffff", fontSize: "1.55rem" }}>{title}</h5>
        <p className="card-text" style={{ color: "#f1f5f9", minHeight: "52px", marginBottom: "14px", fontSize: "1.02rem" }}>{description}</p>
        <a
          className="btn"
          style={{
            marginTop: "8px",
            width: "86%",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            borderRadius: "14px",
            fontWeight: "700",
            letterSpacing: "0.4px",
            border: "1.5px solid rgba(255,255,255,0.92)",
            padding: "11px 14px",
            background: "#000000",
            color: "#ffffff",
            boxShadow: "0 10px 18px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)",
            textAlign: "center",
            transition: "transform 180ms ease, box-shadow 180ms ease, filter 180ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow = "0 14px 24px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(255,255,255,0.12)";
            e.currentTarget.style.filter = "brightness(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 10px 18px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.08)";
            e.currentTarget.style.filter = "brightness(1)";
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onClick={()=> onApplyClick(title, fullDescription) }
        >
          Apply Now
        </a>
      </div>
    </div>
  );
};

const internshipData = [
  {
    id: 1,
    title: "Frontend Developer",
    description:
      "Work with frontend technologies and client-side development.",
    fullDescription: (
      <div className="internship-container" style={{ color: "black !important" }}>
      <p style={{ color: "black" }}><strong>Location:</strong>Remote</p>
      <p style={{ color: "black" }}><strong>Reports to:</strong>Engineering Manager</p>

      <h5>About LVC Solutions</h5>
      <p style={{ color: "black" }}>
        At LVC Solutions LLC, we are revolutionizing industries 
        through innovative software solutions. 
        As a rapidly growing IT services company, 
        we are committed to delivering cutting-edge products that 
        solve real-world problems.
      </p>

      <h5>Key Responsibilities</h5>
      <ul>
        <li>UI Development: Design and implement user-facing features using HTML, CSS, JavaScript, and modern frameworks</li>
        <li>Collaboration: Work closely with cross-functional teams</li>
        <li>Responsive Design: Develop applications across devices</li>
        <li>Optimization: Ensure web applications are optimized</li>
        <li>Bug Fixing & Troubleshooting: Identify and resolve issues</li>
        <li>Learning & Development: Stay updated on industry trends</li>
        <li>Code Quality: Write clean, maintainable code</li>
        <li>Version Control: Use Git for code management</li>

      </ul>

      <h5>Required Skills</h5>
      <ul>
        <li>HTML, CSS, and JavaScript proficiency</li>
        <li>Modern frontend framework experience</li>
        <li>Responsive design knowledge</li>
        <li>Basic RESTful API understanding</li>
        <li>Strong problem-solving skills</li>
      </ul>

      <h5>Additional Skills</h5>
      <ul>
        <li>Advanced React.js, Vue.js, or Angular</li>
        <li>State management expertise</li>
        <li>CSS preprocessor experience</li>
        <li>Performance optimization skills</li>
      </ul>

      <h5>Educational Qualifications</h5>
      <ul>
        <li>Bachelor's Degree in Computer Science or related field</li>
        <li>Master's Degree is a plus</li>
      </ul>
    </div>
    )
  },
  {
    id: 2,
    title: "Backend Developer",
    description: "Work with backend technologies and server-side development.",
    fullDescription: (
      <div className="internship-container">
      <p style={{ color: "black" }}><strong>Location:</strong>Remote</p>
      <p style={{ color: "black" }}><strong>Reports to:</strong>Engineering Manager</p>

      <h5>About LVC Solutions LLC</h5>
      <p style={{ color: "black" }}>
        At LVC Solutions LLC, we are dedicated to 
        transforming industries through innovative technology solutions. 
        We are building smart, scalable, and impactful applications.
      </p>

      <h5>Key Responsibilities</h5>
      <ul>
        <li>Backend Development: Design and develop server-side logic</li>
        <li>Database Management: Work with SQL and NoSQL databases</li>
        <li>API Development: Create and maintain RESTful APIs</li>
        <li>Performance Optimization: Ensure system efficiency</li>
        <li>Collaboration: Work with cross-functional teams</li>
        <li>Troubleshooting: Identify and resolve backend issues</li>
      </ul>

      <h5>Required Skills</h5>
      <ul>
        <li>Backend language proficiency (Java/Python/Node.js)</li>
        <li>Database fundamentals</li>
        <li>RESTful API knowledge</li>
        <li>Version control experience</li>
      </ul>

      <h5>Additional Skills</h5>
      <ul>
        <li>Advanced framework knowledge</li>
        <li>Cloud platform experience</li>
        <li>Microservices architecture</li>
        <li>Security best practices</li>
        <li>Docker and Kubernetes knowledge</li>
      </ul>

      <h5>Educational Qualifications</h5>
      <ul>
        <li>Bachelor's Degree in Computer Science or related field</li>
        <li>Master's Degree is a plus</li>
      </ul>


    </div>
    )
  },
  {
    id: 3,
    title: "Full Stack Developer",
    description: "Work with both frontend and backend technologies.",
    fullDescription: (
    <div className="internship-container">
      <h5>Drive end-to-end development of our innovative solutions:</h5>
      <ul>
        <li>Build complete web applications from front to back</li>
        <li>Design and implement database schemas</li>
        <li>Create responsive user interfaces</li>
        <li>Develop RESTful APIs and services</li>
        <li>Implement authentication and security features</li>
        <li>Deploy and maintain cloud infrastructure</li>
      </ul>
    </div>
    )
  },
  {
    id: 4,
    title: "AI/ML Engineer",
    description: "Work with AI and Machine Learning technologies.",
    fullDescription: (
      <div className="internship-container">
      <h5>Create intelligent solutions that transform businessess:</h5>
      <ul>
        <li>Develop and deploy machine learning models</li>
        <li>Implement computer vision solutions</li>
        <li>Create natural language processing systems</li>
        <li>Design and optimize neural networks</li>
        <li>Work with big data and analytics</li>
        <li>Build ML pipelines and infrastructure</li>
      </ul>
    </div>
    )
  },
   {
    id: 5,
    title: "Generative AI Engineer",
    description: "Work with Generative AI technologies.",
    fullDescription: (
    <div className="internship-container">
      <h5>Pioneer the future of AI-powered conversations</h5>
      <ul>
        <li>Develop advanced chatbot solutions</li>
        <li>Fine-tune and deploy LLM models</li>
        <li>Implement prompt engineering techniques</li>
        <li>Create natural language interfaces</li>
        <li>Optimize model performance and costs</li>
        <li>Design conversational AI workflows</li>
      </ul>
    </div>
    )
  },
  {
    id: 6,
    title: "AI Agents Developer",
    description: "Work with autonomous AI systems and agent-based technologies.",
    fullDescription: (
    <div className="internship-container">
      <h5>Build autonomous AI systems that revolutionize work:</h5>
      <ul>
        <li>Develop intelligent AI agents</li>
        <li>Implement multi-agent systems</li>
        <li>Create task automation solutions</li>
        <li>Design agent-based workflows</li>
        <li>Integrate with external tools and APIs</li>
        <li>Optimize agent performance and reliability</li>
      </ul>
    </div>
    )
  },
];

const FullTimeRoles = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selectedJob, setSelectedJob] = useState(null);
    
    const handleApplyClick = (title, fullDescription) => {
        setSelectedJob({ title, fullDescription });
        setShowModal(true);
    };
    
    const handleProceedToForm = () => {
        setShowModal(false);
        navigate("/career-fulltimeroles");
    };
    
    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedJob(null);
    };
        return (
            <>
            <div style={{ marginTop: "30px", padding: "0 40px 20px 40px" }}>
            <h1 style={{ color: "white" }}>Open Roles</h1>
            <div className="d-flex gap-4 flex-wrap justify-content-center">
                {internshipData.map((item) => (
                <InternshipCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    image={internImages[(item.id - 1) % internImages.length]}
                    // link={item.link}
                    fullDescription={item.fullDescription}
                    onApplyClick={handleApplyClick}
                />
                ))}
            </div>
            </div>
            {showModal && (
                <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000,
                }}
                onClick={handleCloseModal}
                >
                <div
                    style={{
                    backgroundColor: "white",
                    padding: "30px",
                    borderRadius: "12px",
                    width: "90%",
                    maxWidth: "750px",
                    maxHeight: "90vh",
                    overflowY: "auto",
                    marginTop: "0px",
                    alignItems: "flex-start",  
                    paddingTop: "100px",
                    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <h2 style={{ color: "#000000", marginBottom: "20px" }}>
                    {selectedJob?.title}
                    </h2>
                    <h5 style={{ color: "#333", marginBottom: "20px", fontWeight: "600" }}>
                    Job Description
                    </h5>
                    <div
                    style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "black",
                        maxHeight: "300px",   
                        overflowY: "auto",   
                        padding: "15px",
                        border: "1px solid #ddd",
                        borderRadius: "10px", 
                        backgroundColor: "#fafafa"
                    }}
                    >
                    {selectedJob?.fullDescription}
                    </div>
                    <div
                    style={{
                        display: "flex",
                        gap: "8px",
                        justifyContent: "flex-end",
                        marginTop: "30px",
                    }}
                    >
                    <button
                        onClick={handleCloseModal}
                        style={{
                        padding: "10px 20px",
                        backgroundColor: "#6c757d",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        }}
                    >
                        Close
                    </button>
                    <button
                        onClick={handleProceedToForm}
                        style={{
                        padding: "10px 20px",
                        backgroundColor: "#6c757d",
                        color: "#fff",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        }}
                    >
                        Apply
                    </button>
                    </div>
                </div>
                </div>
            )}
    </>
  );
}

export default FullTimeRoles;