import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TransformationStartsHere from "./transformationStartsHere.js";
import Footer from "./footer.js";
import { useNavigate } from "react-router-dom";
import "../style.css";
import backgroundVideo from "../assets/video.mp4";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ApplicationForm from "./applicationform.js";
import FullTimeRoles from "./FullTimeRoles.js";

const Careers = () => {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const openRolesRef = useRef(null);

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handleApplyClick = (position) => {
    setSelectedPosition(position);
    setIsFormOpen(true);
  };

  const scrollToOpenRoles = () => {
    openRolesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="careers-main">
      <div className="careers-section-herobanner">
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>

        <div className="careers-container">
          <div className="careers-content">
            <p className="careers-subtitle">Careers</p>
            <hr className="underline" />
            <h1 className="careers-title">Join Our Team</h1>
            <p className="mb-4" style={{ color: "#f1f1f1" }}>
              We're building an amazing team of talented individuals. Check back
              soon for exciting career opportunities at LVC Solutions!
            </p>
            <button 
              onClick={scrollToOpenRoles}
              className="btn-career"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div className="tab-section">
        <h1>Why Us</h1>
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active  nav-btn-tab"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Impact
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Development
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Support
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="pills-progress-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-progress"
              type="button"
              role="tab"
              aria-controls="pills-progress"
              aria-selected="false"
            >
              Progress
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-home"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-image-container">
                <img
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Make an Impact</h1>
                <p className="tab-paragraph">
                  Join LVC Solutions and be part of something bigger. Here, your
                  work directly impacts businesses and communities worldwide. We
                  offer:
                  <br />
                  <br />
                  • Opportunity to work on transformative projects
                  <br />
                  • Direct involvement in client success stories
                  <br />
                  • Platform to implement innovative solutions
                  <br />
                  • Chance to shape emerging technologies
                  <br />
                  • Collaborative environment to drive real change
                  <br />
                  <br />
                  Your ideas and contributions will help shape the future of
                  technology and business transformation. Make your mark in an
                  organization that values innovation and meaningful impact.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-profile"
            role="tabpanel"
            aria-labelledby="pills-profile-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Continuous Learning</h1>
                <p className="tab-paragraph">
                  At LVC Solutions, we invest heavily in your professional
                  development:
                  <br />
                  <br />
                  • Full access to leading online learning platforms
                  <br />
                  • Company-sponsored certifications and training
                  <br />
                  • Regular technology workshops and seminars
                  <br />
                  • Hands-on experience with cutting-edge tech
                  <br />
                  • Personalized career development plans
                  <br />
                  • Knowledge sharing sessions with industry experts
                  <br />
                  <br />
                  We believe in nurturing talent and providing the resources you
                  need to stay ahead in the fast-paced world of technology. Your
                  growth is our success.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-contact"
            role="tabpanel"
            aria-labelledby="pills-contact-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1565665681743-6ff01c5181e3?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Exceptional Support</h1>
                <p className="tab-paragraph">
                  Experience a workplace that truly cares about your wellbeing:
                  <br />
                  <br />
                  • Competitive compensation and benefits
                  <br />
                  • Flexible work arrangements
                  <br />
                  • Mental health and wellness programs
                  <br />
                  • Work-life balance initiatives
                  <br />
                  • Collaborative team environment
                  <br />
                  • Regular team building activities
                  <br />
                  <br />
                  We create an environment where you can thrive both
                  professionally and personally. Join a company that supports
                  your ambitions while ensuring you have the resources and
                  backing to achieve them.
                </p>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-progress"
            role="tabpanel"
            aria-labelledby="pills-progress-tab"
          >
            <div className="tab-content-wrapper">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Career Progress"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width">
                <h1>Growth</h1>
                <p className="tab-paragraph">
                  At LVC Solutions, your career trajectory is our priority. We
                  provide a dynamic environment where professional growth is not
                  just encouraged – it's actively supported. Our comprehensive
                  development program includes:
                  <br />
                  <br />
                  • Mentorship from industry veterans
                  <br />
                  • Regular skill-enhancement workshops
                  <br />
                  • Leadership development opportunities
                  <br />
                  • Cross-functional project experiences
                  <br />
                  • Certification support and continued education
                  <br />
                  • Clear career advancement paths
                  <br />
                  <br />
                  We believe in investing in our team's future, ensuring each
                  member has the tools and opportunities they need to reach
                  their full potential. Join us to build not just a job, but a
                  rewarding, long-term career in technology and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lvc-difference-section">
        <div className="section-header">
          <h1>The LVC Difference</h1>
          <p className="section-subtitle">
            We believe in the power of collective knowledge
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          initialSlide={0}
          rewind={true}
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="difference-cards-swiper"
        >
          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => handleNavigation("/")}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Innovation Research"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Innovation Research</h3>
                <p>Exploring next-generation technologies and solutions</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => handleNavigation("/about")}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Innovation Culture"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Innovation Culture</h3>
                <p>Building the future with exceptional talent and more!</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => handleNavigation("/insights")}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                  alt="Future Insights"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Future Insights</h3>
                <p>Leading the conversation in tech innovation</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="difference-card"
              onClick={() => handleNavigation("/services")}
            >
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                  alt="Investment in Innovation"
                  className="difference-card-img"
                />
              </div>
              <div className="card-content">
                <h3>Investment in Innovation</h3>
                <p>Transforming ideas into groundbreaking solutions</p>
                <span className="learn-more">Learn More →</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* <div className="tab-section" ref={openRolesRef}>
        <h1>Open Roles</h1>
        <ul className="nav nav-pills mb-3" id="roles-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active nav-btn-tab"
              id="frontend-tab"
              data-bs-toggle="pill"
              data-bs-target="#frontend"
              type="button"
              role="tab"
              aria-controls="frontend"
              aria-selected="true"
            >
              Frontend Developer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="backend-tab"
              data-bs-toggle="pill"
              data-bs-target="#backend"
              type="button"
              role="tab"
              aria-controls="backend"
              aria-selected="false"
            >
              Backend Developer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="fullstack-tab"
              data-bs-toggle="pill"
              data-bs-target="#fullstack"
              type="button"
              role="tab"
              aria-controls="fullstack"
              aria-selected="false"
            >
              Full Stack Developer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="ai-ml-tab"
              data-bs-toggle="pill"
              data-bs-target="#ai-ml"
              type="button"
              role="tab"
              aria-controls="ai-ml"
              aria-selected="false"
            >
              AI & ML Engineer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="llm-tab"
              data-bs-toggle="pill"
              data-bs-target="#llm"
              type="button"
              role="tab"
              aria-controls="llm"
              aria-selected="false"
            >
              Generative AI Engineer
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab"
              id="ai-agents-tab"
              data-bs-toggle="pill"
              data-bs-target="#ai-agents"
              type="button"
              role="tab"
              aria-controls="ai-agents"
              aria-selected="false"
            >
              AI Agents Developer
            </button>
          </li>
        </ul>

        <div className="tab-content" id="roles-tabContent">
          <div
            className="tab-pane fade show active"
            id="frontend"
            role="tabpanel"
            aria-labelledby="frontend-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>Frontend Developer (0-2+ Years)</h1>
                <p className="tab-paragraph">
                  Location: Remote
                  <br />
                  Reports to: Engineering Manager
                  <br />
                  <br />
                  About LVC Solutions LLC:
                  <br />
                  At LVC Solutions LLC, we are revolutionizing industries
                  through innovative software solutions. As a rapidly growing IT
                  services company, we are committed to delivering cutting-edge
                  products that solve real-world problems.
                  <br />
                  <br />
                  Key Responsibilities:
                  <br />
                  • UI Development: Design and implement user-facing features
                  using HTML, CSS, JavaScript, and modern frameworks
                  <br />
                  • Collaboration: Work closely with cross-functional teams
                  <br />
                  • Responsive Design: Develop applications across devices
                  <br />
                  • Optimization: Ensure web applications are optimized
                  <br />
                  • Bug Fixing & Troubleshooting: Identify and resolve issues
                  <br />
                  • Learning & Development: Stay updated on industry trends
                  <br />
                  • Code Quality: Write clean, maintainable code
                  <br />
                  • Version Control: Use Git for code management
                  <br />
                  <br />
                  Required Skills (0-2 years):
                  <br />
                  • HTML, CSS, and JavaScript proficiency
                  <br />
                  • Modern frontend framework experience
                  <br />
                  • Responsive design knowledge
                  <br />
                  • Basic RESTful API understanding
                  <br />
                  • Strong problem-solving skills
                  <br />
                  <br />
                  Additional Skills (2+ years):
                  <br />
                  • Advanced React.js, Vue.js, or Angular
                  <br />
                  • State management expertise
                  <br />
                  • CSS preprocessor experience
                  <br />
                  • Performance optimization skills
                  <br />
                  <br />
                  Educational Qualifications:
                  <br />
                  • Bachelor's Degree in Computer Science or related field
                  <br />• Master's Degree is a plus
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("Frontend Developer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          
          <div
            className="tab-pane fade"
            id="backend"
            role="tabpanel"
            aria-labelledby="backend-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>Backend Developer (0-2+ Years)</h1>
                <p className="tab-paragraph">
                  Location: Remote
                  <br />
                  Reports to: Engineering Manager
                  <br />
                  <br />
                  About LVC Solutions LLC:
                  <br />
                  At LVC Solutions LLC, we are dedicated to transforming
                  industries through innovative technology solutions. We are
                  building smart, scalable, and impactful applications.
                  <br />
                  <br />
                  Key Responsibilities:
                  <br />
                  • Backend Development: Design and develop server-side logic
                  <br />
                  • Database Management: Work with SQL and NoSQL databases
                  <br />
                  • API Development: Create and maintain RESTful APIs
                  <br />
                  • Performance Optimization: Ensure system efficiency
                  <br />
                  • Collaboration: Work with cross-functional teams
                  <br />
                  • Troubleshooting: Identify and resolve backend issues
                  <br />
                  <br />
                  Required Skills (0-2 years):
                  <br />
                  • Backend language proficiency (Java/Python/Node.js)
                  <br />
                  • Database fundamentals
                  <br />
                  • RESTful API knowledge
                  <br />
                  • Version control experience
                  <br />
                  <br />
                  Additional Skills (2+ years):
                  <br />
                  • Advanced framework knowledge
                  <br />
                  • Cloud platform experience
                  <br />
                  • Microservices architecture
                  <br />
                  • Security best practices
                  <br />
                  • Docker and Kubernetes knowledge
                  <br />
                  <br />
                  Educational Qualifications:
                  <br />
                  • Bachelor's Degree in Computer Science or related field
                  <br />• Master's Degree is a plus
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("Backend Developer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          
          <div
            className="tab-pane fade"
            id="fullstack"
            role="tabpanel"
            aria-labelledby="fullstack-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>Full Stack Developer</h1>
                <p className="tab-paragraph">
                  Drive end-to-end development of our innovative solutions:
                  <br />
                  <br />
                  • Build complete web applications from front to back
                  <br />
                  • Design and implement database schemas
                  <br />
                  • Create responsive user interfaces
                  <br />
                  • Develop RESTful APIs and services
                  <br />
                  • Implement authentication and security features
                  <br />
                  • Deploy and maintain cloud infrastructure
                  <br />
                  <br />
                  Required Skills: TBA
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("Full Stack Developer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

         
          <div
            className="tab-pane fade"
            id="ai-ml"
            role="tabpanel"
            aria-labelledby="ai-ml-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>AI & ML Engineer</h1>
                <p className="tab-paragraph">
                  Create intelligent solutions that transform businesses:
                  <br />
                  <br />
                  • Develop and deploy machine learning models
                  <br />
                  • Implement computer vision solutions
                  <br />
                  • Create natural language processing systems
                  <br />
                  • Design and optimize neural networks
                  <br />
                  • Work with big data and analytics
                  <br />
                  • Build ML pipelines and infrastructure
                  <br />
                  <br />
                  Required Skills: TBA
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("AI & ML Engineer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          
          <div
            className="tab-pane fade"
            id="llm"
            role="tabpanel"
            aria-labelledby="llm-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>Generative AI Engineer</h1>
                <p className="tab-paragraph">
                  Pioneer the future of AI-powered conversations:
                  <br />
                  <br />
                  • Develop advanced chatbot solutions
                  <br />
                  • Fine-tune and deploy LLM models
                  <br />
                  • Implement prompt engineering techniques
                  <br />
                  • Create natural language interfaces
                  <br />
                  • Optimize model performance and costs
                  <br />
                  • Design conversational AI workflows
                  <br />
                  <br />
                  Required Skills: TBA
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("Generative AI Engineer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          
          <div
            className="tab-pane fade"
            id="ai-agents"
            role="tabpanel"
            aria-labelledby="ai-agents-tab"
          >
            <div className="tab-content-wrapper">
              <div className="tab-paragraph-width">
                <h1>AI Agents Developer</h1>
                <p className="tab-paragraph">
                  Build autonomous AI systems that revolutionize work:
                  <br />
                  <br />
                  • Develop intelligent AI agents
                  <br />
                  • Implement multi-agent systems
                  <br />
                  • Create task automation solutions
                  <br />
                  • Design agent-based workflows
                  <br />
                  • Integrate with external tools and APIs
                  <br />
                  • Optimize agent performance and reliability
                  <br />
                  <br />
                  Required Skills: TBA
                </p>
                <button
                  className="btn-career-apply mt-4"
                  onClick={() => handleApplyClick("AI Agents Developer")}
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <FullTimeRoles />
      <TransformationStartsHere/>
      <Footer />
      <ApplicationForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        position={selectedPosition}
      />
    </main>
  );
};

export default Careers;
