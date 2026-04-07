import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import intern1 from "../assets/intern1.png"
import intern2 from "../assets/intern2.jpg"
import intern3 from "../assets/intern3.jpg"
import intern4 from "../assets/intern4.jpg"
import intern5 from "../assets/intern5.jpeg"
import intern6 from "../assets/intern6.jpeg"
import intern7 from "../assets/intern7.jpeg"
import intern8 from "../assets/intern8.jpeg"
import intern9 from "../assets/intern9.jpeg"

const internImages = [
  intern1,
  intern2,
  intern3,
  intern4,
  intern5,
  intern6,
  intern7,
  intern8,
  intern9,
];

const InternshipCard = ({ title, description, fullDescription, image, onApplyClick }) => {
  // const navigate = useNavigate();
  // const handleFormClick = () => { 
  //   navigate("/careers-intern/form");
  // }

  return (
    <div
      className="card"
      style={{
        width: "19rem",
        border: "none",
        borderRadius: "18px",
        overflow: "hidden",
        background: "#000",
        boxShadow: "0 14px 30px rgba(0, 0, 0, 0.12)",
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
        <button
          type="button"
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
        </button>
      </div>
    </div>
  );
};

const internshipData = [
  {
    id: 1,
    title: "AI/ML Intern",
    description:
      "Work with AI and Machine Learning technologies.",
    // link: "/careers-intern/ai-ml",
    fullDescription: (
      <div className="internship-container" style={{ color: "black !important" }}>
      <p style={{ color: "white" }}><strong>Company:</strong>LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
        LVC Solutions is a technology company focused on building scalable software and AI-powered
        platforms across recruitment, analytics, automation, and intelligent systems. Our products are
        designed to solve real-world problems and are actively used in production environments.
        The internship program at LVC Solutions provides students with hands-on exposure to applied AI
        and machine learning by working on live datasets, real models, and production-oriented workflows.
      </p>

      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As an AI / Machine Learning Intern, you will work with the engineering and product teams to design,
        train, evaluate, and deploy machine learning models. You will gain practical experience in data
        processing, model development, and AI system integration within a real startup environment.
        This is a paid internship intended for students who are interested in applied AI and machine learning 
        and want industry-level exposure beyond academic projects
      </p>

      <h5 style={{ color: "white" }}>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Data Preparation and Analysis</h5>
      <ul style={{ color: "white" }}>
        <li>Collect, clean, and preprocess structured and unstructured datasets.</li>
        <li>Perform exploratory data analysis to identify patterns and insights.</li>
        <li>Prepare datasets for training, validation, and testing.</li>
      </ul>

      <h5 style={{ color: "white" }}>Model Development</h5>
      <ul style={{ color: "white" }}>
        <li>Implement machine learning models using Python and relevant libraries.</li>
        <li>Work on supervised and unsupervised learning problems.</li>
        <li>Train, tune, and evaluate models using appropriate metrics.</li>
        <li>Assist in developing NLP or computer vision models, where applicable.</li>
      </ul>

      <h5 style={{ color: "white" }}>Applied AI and Integration</h5>
      <ul style={{ color: "white" }}>
        <li>Integrate trained models into backend services or applications.</li>
        <li>Support API development for model inference.</li>
        <li>Optimize application performance for accuracy and efficiency.</li>
        <li>Participate in feature planning and discussions.</li>
      </ul>

      <h5 style={{ color: "white" }}>Experimentation and Evaluation</h5>
      <ul style={{ color: "white" }}>
        <li>Conduct experiments and document results.</li>
        <li>Compare different algorithms and approaches.</li>
        <li>Analyze model behavior and limitations.</li>
      </ul>

      <h5 style={{ color: "white" }}>Collaboration and Documentation</h5>
      <ul style={{ color: "white" }}>
        <li>Work closely with full stack, backend, and DevOps teams.</li>
        <li>Participate in sprint planning and technical discussions.</li>
        <li>Maintain clear documentation for models, experiments, and pipelines.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, IT, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Strong interest in AI and machine learning</li>
        <li>Ability to commit 40 hours per week during the internship period</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Strong foundation in Python programming</li>
        <li>Basic understanding of machine learning concepts and algorithms</li>
        <li>Familiarity with libraries such as NumPy, Pandas, Scikit-learn</li>
        <li>Understanding of data preprocessing and model evaluation</li>
        <li>Basic knowledge of statistics and linear algebra</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Exposure to deep learning frameworks such as TensorFlow or PyTorch</li>
        <li>Basic understanding of NLP or computer vision concepts</li>
        <li>Experience working with real datasets</li>
        <li>Familiarity with cloud platforms or ML deployment basics</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with real-world AI and ML project experience</li>
        <li>Hands-on exposure to production-oriented machine learning workflows</li>
        <li>Experience working with live data and real models</li>
        <li>Mentorship from experienced AI and engineering professionals</li>
        <li>Internship certificate and Letter of Recommendation upon successful completion</li>
        <li>Opportunity for future full-time or extended roles based on business requirements</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
  {
    id: 2,
    title: "Gen AI Intern",
    description: "Work with Generative AI technologies.",
    // link: "/careers-intern/gen-ai",
    fullDescription: (
      <div className="internship-container">
      <p style={{ color: "white" }}><strong>Company:</strong> LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
        LVC Solutions is a technology company building AI-driven software platforms across recruitment,
        search, analytics, and intelligent automation. Our focus is on applying modern AI techniques to
        solve real-world problems through scalable, production-ready systems.
      </p>

      <p style={{ color: "white" }}>
        The Generative AI internship is designed for students who want hands-on experience working with
        large language models, AI pipelines, and real product integrations rather than theoretical research
        alone.
      </p>

      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As a Generative AI Intern, you will work on building, integrating, and improving generative AI
        features within LVC Solutions products. You will collaborate with AI engineers, backend developers,
        and product teams to develop practical GenAI solutions used in real applications.
        This is a paid internship intended for students who want applied experience in Generative AI within
        a startup environment.
      </p>

      <h5 style={{ color: "white" }}>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Generative AI Development</h5>
      <ul style={{ color: "white" }}>
        <li>Work with large language models and generative AI systems.</li>
        <li>Assist in designing prompts and workflows for AI-driven features.</li>
        <li>Implement text-based AI use cases such as chat, search, summarization, and recommendations.</li>
        <li>Evaluate and improve output quality, relevance, and consistency.</li>
      </ul>

      <h5 style={{ color: "white" }}>Data and Knowledge Integration</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in preparing and structuring data for generative AI use cases.</li>
        <li>Work on retrieval-augmented generation (RAG) pipelines.</li>
        <li>Integrate external data sources and knowledge bases with AI models.</li>
      </ul>

      <h5 style={{ color: "white" }}>Model Integration and APIs</h5>
      <ul style={{ color: "white" }}>
        <li>Integrate generative AI models into backend services through APIs.</li>
        <li>Support development of inference pipelines and request handling.</li>
        <li>Optimize latency and response quality for real-time AI features.</li>
      </ul>

      <h5 style={{ color: "white" }}>Testing and Evaluation</h5>
      <ul style={{ color: "white" }}>
        <li>Test AI outputs across different scenarios and edge cases.</li>
        <li>Identify limitations, hallucinations, and failure patterns.</li>
        <li>Support improvements in reliability, safety, and accuracy.</li>
      </ul>

      <h5 style={{ color: "white" }}>Collaboration and Documentation</h5>
      <ul style={{ color: "white" }}>
        <li>Work closely with backend, full stack, and DevOps teams.</li>
        <li>Participate in sprint planning and technical discussions.</li>
        <li>Maintain documentation for AI workflows, prompts, and integrations.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, IT, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Strong interest in Generative AI and modern AI systems</li>
        <li>Ability to commit 40 hours per week during the internship period</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Strong Python programming fundamentals</li>
        <li>Basic understanding of large language models and generative AI concepts</li>
        <li>Familiarity with APIs and backend integration</li>
        <li>Understanding of prompt design and experimentation</li>
        <li>Basic knowledge of data structures and algorithms</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Exposure to frameworks such as LangChain or similar</li>
        <li>Familiarity with vector databases and embeddings</li>
        <li>Understanding of retrieval-augmented generation (RAG)</li>
        <li>Experience with cloud platforms or AI deployment basics</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with hands-on Generative AI experience</li>
        <li>Practical exposure to real AI product development</li>
        <li>Experience working on live AI features used in production</li>
        <li>Mentorship from experienced AI and engineering teams</li>
        <li>Internship certificate and Letter of Recommendation upon successful completion</li>
        <li>Opportunity for future full-time or extended roles based on business requirements</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
  {
    id: 3,
    title: "UI/UX Design Intern",
    description: "Design user interfaces and improve user experience.",
    // link: "/careers-intern/uiux",
  },
  {
    id: 4,
    // title: "Digital Marketing Intern",
    title: "Business Analyst Intern",
    description: "Analyze business requirements and provide data-driven insights.",
    // link: "/careers-intern/digital-marketing",
    fullDescription: (
    <div className="internship-container">
      <p style={{ color: "white" }}><strong>Company:</strong> LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
        LVC Solutions is a technology company building scalable, data-driven, and AI-powered platforms
        across recruitment, analytics, and automation. We focus on solving real business problems through
        well-defined processes, clear requirements, and intelligent systems.
      </p>

      <p style={{ color: "white" }}>
        Our internship program is designed to give students hands-on exposure to business analysis by
        working directly with product, engineering, and leadership teams on live projects.
      </p>

      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As a Business Analyst Intern, you will support the analysis, documentation, and improvement of
        business and product requirements. You will act as a bridge between business needs and technical
        implementation, helping teams deliver solutions that align with business objectives.
        This is a paid internship intended for students who want practical experience in business analysis
        within a real startup environment.
      </p>

      <h5 style={{ color: "white" }}>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Requirement Analysis</h5>
      <ul style={{ color: "white" }}>
        <li>Understand business requirements and product goals.</li>
        <li>Gather, analyze, and document functional and non-functional requirements.</li>
        <li>Translate business needs into clear user stories and specifications.</li>
      </ul>

      <h5 style={{ color: "white" }}>Process and Workflow Analysis</h5>
      <ul style={{ color: "white" }}>
        <li>Analyze existing workflows and identify gaps or inefficiencies.</li>
        <li>Propose process improvements and optimization opportunities.</li>
        <li>Assist in defining end-to-end business and product flows.</li>
      </ul>

      <h5 style={{ color: "white" }}>Documentation</h5>
      <ul style={{ color: "white" }}>
        <li>Prepare Business Requirement Documents (BRDs) and Functional Requirement Documents(FRDs).</li>
        <li>Create user stories, acceptance criteria, and use case diagrams.</li>
        <li>Maintain clear and structured documentation for ongoing features.</li>
      </ul>

      <h5 style={{ color: "white" }}>Stakeholder Collaboration</h5>
      <ul style={{ color: "white" }}>
        <li>Work closely with product managers, developers, QA, and design teams.</li>
        <li>Participate in requirement reviews and sprint planning sessions.</li>
        <li>Support communication between technical and non-technical stakeholders.</li>
      </ul>

      <h5 style={{ color: "white" }}>Data and Reporting Support</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in analyzing business metrics and product KPIs.</li>
        <li>Support preparation of reports and presentations for internal teams.</li>
        <li>Track feature progress and requirement completion.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, IT, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Strong interest in business analysis and product understanding</li>
        <li>Ability to commit 40 hours per week during the internship period</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Strong analytical and problem-solving skills</li>
        <li>Good written and verbal communication skills</li>
        <li>Ability to document requirements clearly and logically</li>
        <li>Basic understanding of software development lifecycle (SDLC)</li>
        <li>Familiarity with tools such as Excel, Google Docs, or similar</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Exposure to Agile or Scrum methodology</li>
        <li>Basic knowledge of SQL or data analysis</li>
        <li>Experience with diagramming tools (flowcharts, wireframes)</li>
        <li>Understanding of product management concepts</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with real business analysis experience</li>
        <li>Hands-on exposure to live product and business requirements</li>
        <li>Experience working in a startup environment with cross-functional teams</li>
        <li>Mentorship from product and business leaders</li>
        <li>Internship certificate and Letter of Recommendation upon successful completion</li>
        <li>Opportunity for future full-time or extended roles based on business requirements</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
  {
    id: 5,
    // title: "Data Science Intern",
    title: "Data Analyst Intern",
    description: "Work with data analysis and machine learning.",
    // link: "/careers-intern/data-science",
    fullDescription: (
      <div className="internship-container">
      <p style={{ color: "white" }}><strong>Company:</strong> LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
        LVC Solutions is a technology company building data-driven and AI-powered platforms across
        recruitment, analytics, and automation. We rely heavily on data to drive product decisions, improve
        system performance, and deliver measurable business outcomes.
      </p>

      <p style={{ color: "white" }}>
        Our internship program provides students with practical exposure to real-world data analysis by
        working on live datasets and business problems.
      </p>
      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As a Data Analyst Intern, you will work with product, engineering, and business teams to analyze
        data, generate insights, and support decision-making. You will be involved in data collection,
        cleaning, analysis, and visualization to help improve product features and business performance.
        This is a paid internship intended for students who want hands-on experience in data analysis
        within a real startup environment.
      </p>

      <h5>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Data Collection and Preparation</h5>
      <ul style={{ color: "white" }}>
        <li>Collect, clean, and preprocess structured datasets.</li>
        <li>Validate data quality and identify inconsistencies.</li>
        <li>Organize data for analysis and reporting.</li>
      </ul>

      <h5 style={{ color: "white" }}>Data Analysis and Insights</h5>
      <ul style={{ color: "white" }}>
        <li>Perform exploratory data analysis to identify trends and patterns.</li>
        <li>Analyze user behavior, product metrics, and operational data.</li>
        <li>Support ad-hoc analysis requests from internal teams.</li>
      </ul>

      <h5 style={{ color: "white" }}>Reporting and Visualization</h5>
      <ul style={{ color: "white" }}>
        <li>Create dashboards and reports using tools such as Excel, SQL, or BI platforms.</li>
        <li>Present findings in a clear and structured manner.</li>
        <li>Assist in defining and tracking key performance indicators (KPIs).</li>
      </ul>

      <h5 style={{ color: "white" }}>Collaboration and Documentation</h5>
      <ul style={{ color: "white" }}>
        <li>Work closely with product managers and engineers to understand data requirements.</li>
        <li>Document data sources, assumptions, and analysis methodologies.</li>
        <li>Participate in sprint reviews and data discussions.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, Data Science, Statistics, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Interest in data analysis and problem-solving</li>
        <li>Ability to commit 40 hours per week during the internship period</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Strong understanding of Excel or Google Sheets</li>
        <li>Basic knowledge of SQL for data querying</li>
        <li>Familiarity with data analysis concepts and workflows</li>
        <li>Ability to interpret data and draw meaningful conclusions</li>
        <li>Good communication and documentation skills</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Experience with Python (Pandas, NumPy)</li>
        <li>Exposure to data visualization tools such as Power BI or Tableau</li>
        <li>Basic understanding of statistics</li>
        <li>Familiarity with databases and data pipelines</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with real-world data analysis experience</li>
        <li>Hands-on exposure to live business and product datasets</li>
        <li>Experience working in a data-driven startup environment</li>
        <li>Mentorship from experienced analysts and product teams</li>
        <li>Internship certificate and Letter of Recommendation upon successful completion</li>
        <li>Opportunity for future full-time or extended roles based on business requirements</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
   {
    id: 6,
    title: "DevOps Intern",
    description: "Learn deployment and infrastructure management.",
    // link: "/careers-intern/devops",
    fullDescription: (
      <div className="internship-container">
      <p style={{ color: "white" }}><strong>Company:</strong> LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
        LVC Solutions is a technology company building scalable software and AI-driven platforms across
        recruitment, analytics, and automation. We focus on reliability, performance, and secure
        deployments to support real-world, production-grade applications.
      </p>

      <p style={{ color: "white" }}>
        Our internship program provides hands-on exposure to modern DevOps practices by allowing
        interns to work directly on live systems and cloud infrastructure.
      </p>

      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As a DevOps Engineer Intern, you will support the deployment, monitoring, and maintenance of
        cloud-based applications. You will work closely with development and QA teams to automate
        workflows, improve system reliability, and assist in managing cloud infrastructure.
        This is a paid internship designed for students who want practical experience in DevOps, cloud
        engineering, and infrastructure automation within a real startup environment.
      </p>

      <h5 style={{ color: "white" }}>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Cloud Infrastructure</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in setting up and managing cloud environments on AWS, Firebase, or similar platforms.</li>
        <li>Support server configuration, environment setup, and access management.</li>
        <li>Monitor system performance, uptime, and resource utilization.</li>
      </ul>

      <h5 style={{ color: "white" }}>CI/CD and Automation</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in building and maintaining CI/CD pipelines for automated builds and deployments.</li>
        <li>Help automate repetitive tasks using scripts and DevOps tools.</li>
        <li>Support version control and deployment workflows.</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Deployment</h5>
      <ul style={{ color: "white" }}>
        <li>Deploy web applications and backend services to cloud platforms.</li>
        <li>Assist in managing environment variables, secrets, and configurations.</li>
        <li>Support rollback and recovery processes when needed.</li>
      </ul>

      <h5 style={{ color: "white" }}>Monitoring and Reliability</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in configuring logging, monitoring, and alerting tools.</li>
        <li>Identify performance bottlenecks and system issues.</li>
        <li>Support incident analysis and basic troubleshooting.</li>
      </ul>

      <h5 style={{ color: "white" }}>Collaboration and Documentation</h5>
      <ul style={{ color: "white" }}>
        <li>Work closely with developers and QA teams during releases.</li>
        <li>Participate in sprint planning and release discussions.</li>
        <li>Maintain clear documentation for deployment processes and infrastructure setup.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, IT, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Interest in DevOps, cloud infrastructure, and automation</li>
        <li>Ability to commit 40 hours per week during the internship period</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Basic understanding of Linux and command-line operations</li>
        <li>Knowledge of Git and version control systems</li>
        <li>Familiarity with cloud platforms (AWS, GCP, or Azure basics)</li>
        <li>Understanding of CI/CD concepts and deployment workflows</li>
        <li>Basic networking concepts (DNS, HTTP/HTTPS)</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Exposure to Docker and containerization</li>
        <li>Basic knowledge of Kubernetes</li>
        <li>Experience with monitoring tools</li>
        <li>Scripting knowledge in Bash or Python</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with real DevOps and cloud experience</li>
        <li>Hands-on exposure to production deployments and infrastructure</li>
        <li>Experience working on live SaaS and AI platforms</li>
        <li>Mentorship from experienced engineers</li>
        <li>Internship certificate and Letter of Recommendation upon successful completion</li>
        <li>Opportunity for future full-time or extended roles based on business requirements</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
  {
    id: 7,
    title: "Full Stack  Intern",
    description: "Work with both frontend and backend technologies.",
    // link: "/careers-intern/full-stack",
    fullDescription: (
      <div className="internship-container">
      <p style={{ color: "white" }}><strong>Company:</strong> LVC Solutions</p>
      <p style={{ color: "white" }}><strong>Location:</strong> Remote (India)</p>
      <p style={{ color: "white" }}><strong>Internship Type:</strong> Paid Summer Internship</p>
      <p style={{ color: "white" }}><strong>Duration:</strong> 8 Weeks</p>
      <p style={{ color: "white" }}><strong>Start Date:</strong> May / June 2026</p>
      <p style={{ color: "white" }}><strong>Stipend:</strong> Paid (Monthly)</p>

      <h5 style={{ color: "white" }}>About LVC Solutions</h5>
      <p style={{ color: "white" }}>
       LVC Solutions is a technology company focused on building scalable software and AI-driven
        platforms across recruitment, analytics, and intelligent automation. We work on real-world problems
        and develop production-ready applications used by real users.
      </p>

      <p style={{ color: "white" }}>
        Our internship program is designed to give students practical exposure
        to modern software development by working directly on live projects.
      </p>

      <h5 style={{ color: "white" }}>Role Overview</h5>
      <p style={{ color: "white" }}>
        As a Full Stack Developer Intern, you will be involved in the
        end-to-end development of web applications, working on both frontend
        and backend components. You will collaborate with experienced
        developers, designers, and product teams to build and enhance
        features used in real production systems.
      </p>

      <h5 style={{ color: "white" }}>Roles and Responsibilities</h5>

      <h5 style={{ color: "white" }}>Frontend Development</h5>
      <ul style={{ color: "white" }}>
        <li>Develop responsive and user-friendly interfaces using React.</li>
        <li>Convert UI/UX designs from Figma into functional web components.</li>
        <li>Integrate frontend components with backend APIs.</li>
        <li>Ensure cross-browser compatibility and mobile responsiveness.</li>
        <li>Improve usability, performance, and accessibility.</li>
      </ul>

      <h5 style={{ color: "white" }}>Backend Development</h5>
      <ul style={{ color: "white" }}>
        <li>Build and maintain RESTful APIs using Node.js and Express.</li>
        <li>Implement authentication and role-based access control.</li>
        <li>Design and integrate databases (Firebase, MongoDB, PostgreSQL).</li>
        <li>Handle server-side logic and data processing.</li>
        <li>Write clean, scalable backend code.</li>
      </ul>

      <h5 style={{ color: "white" }}>Full Stack Integration</h5>
      <ul style={{ color: "white" }}>
        <li>Connect frontend and backend systems effectively.</li>
        <li>Handle error management and validations.</li>
        <li>Optimize application performance and API efficiency.</li>
        <li>Participate in feature planning and discussions.</li>
      </ul>

      <h5 style={{ color: "white" }}>Cloud and Deployment</h5>
      <ul style={{ color: "white" }}>
        <li>Assist in deploying applications to AWS, Firebase, or Vercel.</li>
        <li>Understand environment configurations and CI/CD workflows.</li>
        <li>Support monitoring and debugging of deployed applications.</li>
      </ul>

      <h5 style={{ color: "white" }}>Team Collaboration</h5>
      <ul style={{ color: "white" }}>
        <li>Work in an Agile development environment with weekly sprints.</li>
        <li>Participate in stand-ups and code reviews.</li>
        <li>Collaborate with designers, QA engineers, and product teams.</li>
        <li>Maintain technical documentation.</li>
      </ul>

      <h5 style={{ color: "white" }}>Eligibility Criteria</h5>
      <ul style={{ color: "white" }}>
        <li>B.Tech students from Computer Science, IT, or related branches</li>
        <li>Eligible years: 2nd year, 3rd year, and final year</li>
        <li>Basic knowledge of web development</li>
        <li>Willingness to learn and work on real-world projects</li>
        <li>Ability to commit 40 hours per week</li>
      </ul>

      <h5 style={{ color: "white" }}>Required Skills</h5>
      <ul style={{ color: "white" }}>
        <li>Proficiency in HTML, CSS, and JavaScript</li>
        <li>Basic experience with React</li>
        <li>Understanding of Node.js fundamentals</li>
        <li>Familiarity with REST APIs and databases</li>
        <li>Basic knowledge of Git</li>
      </ul>

      <h5 style={{ color: "white" }}>Preferred (Not Mandatory)</h5>
      <ul style={{ color: "white" }}>
        <li>Experience with Next.js</li>
        <li>Exposure to Firebase or cloud platforms</li>
        <li>Basic understanding of system design</li>
      </ul>

      <h5 style={{ color: "white" }}>What You Will Gain</h5>
      <ul style={{ color: "white" }}>
        <li>Paid internship with real project experience</li>
        <li>Hands-on exposure to full stack development</li>
        <li>Mentorship from experienced developers</li>
        <li>Work on live production applications</li>
        <li>Internship certificate and Letter of Recommendation</li>
        <li>Opportunity for future full-time roles</li>
      </ul>

      <h5 style={{ color: "white" }}>Application Process</h5>
      <ol style={{ color: "white" }}>
        <li>Online application submission</li>
        <li>Technical screening or assignment</li>
        <li>Virtual interview</li>
        <li>Offer confirmation and onboarding</li>
      </ol>
    </div>
    )
  },
  {
    id: 8,
    title: "Mobile App Developer Intern",
    description: "Develop mobile applications for iOS and Android.",
    // link: "/careers-intern/mobile-app",
  },

];

const CareersIntern = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApplyClick = (title, fullDescription) => {
    setSelectedJob({ title, fullDescription });
    setShowModal(true);
  };

  const handleProceedToForm = () => {
    setShowModal(false);
    navigate("/careers-intern/form");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };
  return (
    <>
    <div style={{ marginTop: "120px", padding: "0 40px 20px 40px" }}>
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
              backgroundColor: "black",
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
            <h2 style={{ color: "#ffffff", marginBottom: "20px" }}>
              {selectedJob?.title}
            </h2>
            <h5 style={{ color: "#ffffff", marginBottom: "20px", fontWeight: "600" }}>
              Job Description
            </h5>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "white",
                maxHeight: "300px",   
                overflowY: "auto",   
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px", 
                backgroundColor: "#000000"
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
};

export default CareersIntern;
