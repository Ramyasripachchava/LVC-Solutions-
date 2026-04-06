import { createRef, useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom"; //Added Link import for the contact us / talk with us buttons
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import TransformationStartsHere from "./transformationStartsHere.js";
import Footer from "./footer.js";
import FounderImage from "../assets/founder1.jpeg";
import MicrosoftLogo from "../assets/microsoft.png";
import OracleLogo from "../assets/oracle.png";
import GoogleLogo from "../assets/google.png";
import AwsLogo from "../assets/aws.png";
import SalesLogo from "../assets/salesforce.png";
import Companies from "./companies.js";

const AboutUs = () => {
  const [inView, setInView] = useState(false);

  const myRef = useRef();
  const chipsRef = useRef([]);
  const tabRefs = useMemo(
    () => ({
      header: createRef(),
      pills: createRef(),
      image1: createRef(),
      text1: createRef(),
      image2: createRef(),
      text2: createRef(),
      image3: createRef(),
      text3: createRef(),
    }),
    []
  );


  // Function to generate a random color
  // const getRandomColor = () => {
  //   const letters = "0123456789ABCDEF";
  //   let color = "#";
  //   for (let i = 0; i < 6; i++) {
  //     color += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return color;
  // };

  // Intersection Observer to detect when the element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true); // Set the state to true when the element is in view
        }
      },
      { threshold: 0.5 }
    );

    const currentRef = myRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // 2nd intersection observer to give "fade in & out" effect to the "Why Us" section
  useEffect(() => {
    const observer2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-out");
          } else {
            entry.target.classList.remove("fade-out");
          }
        });
      },
      { threshold: 0.5 }
    );

    for (let tabRef in tabRefs) {
      if (tabRefs[tabRef].current) observer2.observe(tabRefs[tabRef].current);
    }

    return () => observer2.disconnect();
  }, [tabRefs]);

  // Companies for animation
  const companies = [
    {
      name: "Microsoft",
      logo: MicrosoftLogo,
    },
    {
      name: "Oracle",
      logo: OracleLogo,
    },
    {
      name: "Google",
      logo: GoogleLogo,
    },
    {
      name: "AWS",
      logo: AwsLogo,
    },
    {
      name: "Salesforce",
      logo: SalesLogo,
    },
  ];

  return (
    <div className="section-aboutus bg-black">
      <div className="About-section-herobanner">
        <div className="whatwedo-container">
          <div className="whatwedo-content">
            <p className="whatwedo-subtitle">About Us</p>
            <hr className="underline" />
            <h1 className="whatwedo-title" style={{fontSize:"45px"}}>
              {" "}
              Driving Success Through Data, Technology, and Tailored Enterprise
              Solutions
            </h1>
            <Link to="/contact" className="btn btn-primary-whatwedo">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="section2aboutus">
        <p className="section2-aboutus bg-black text-white">
          Welcome to LVC Solutions, a dynamic and innovative software solutions
          company proudly based in the USA. As a startup with a vision to
          transform the digital landscape, we specialize in combining the power
          of data and cutting-edge technology to deliver world-class enterprise
          solutions. Our mission is to empower businesses by streamlining
          processes, enhancing efficiency, and driving growth through tailored
          software solutions that cater to unique challenges and aspirations.
          From robust data analytics platforms to scalable enterprise systems,
          we design and develop solutions that not only meet current needs but
          also anticipate future demands.
        </p>
      </div>
      <div className="containersection">
        <div className="text-content position-relative z-index-2">
          <div className="founder-header">
            <h2 className="image-banner-heading text-uppercase">
              A Message From Our Founder
            </h2>
            <hr className="founder-underline" />
          </div>
          <div className="founder-content">
            <div className="image-banner-text position-relative">
              "We're here to do more than build a company—we're building a
              community. Innovation drives us, but our purpose is deeper.
              Creating designs that matter, paths that inspire, and connections
              that grow into something bigger than all of us."
            </div>
            <div className="founder-profile">
              <img src={FounderImage} alt="Founder" className="founder-image" />
              <div className="founder-info">
                <h3>Venkat Gunji</h3>
                <p>Founder & CEO</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tab-section bg-black text-white ">
        <h1 ref={tabRefs.header} className="header-section text-white">Why Us</h1>
        <ul className="nav nav-pills mb-3 pills-section" id="pills-tab" role="tablist" ref={tabRefs.pills}>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active  nav-btn-tab text-white"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"

            >
              Our Mission
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab text-white"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Our Vision
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link nav-btn-tab text-white"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Who We Are
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
              <div className="tab-image-container image-section" ref={tabRefs.image1}>
                <img
                  src="https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width text-section" ref={tabRefs.text1}>
                <h1 className="text-white">Our Mission</h1>
                <p className="tab-paragraph text-white ">
                  At LVC Solutions, our mission is to empower businesses by
                  delivering innovative solutions that drive growth, streamline
                  operations, and inspire transformation. We are dedicated to
                  providing exceptional services that address complex challenges
                  while fostering lasting partnerships built on trust,
                  integrity, and excellence. We strive to enable organizations
                  to achieve their full potential by offering tailored solutions
                  that adapt to ever-changing business landscapes. At LVC
                  Solutions, our goal is to go beyond expectations, creating
                  impactful outcomes that lead to long-term success.
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
              <div className="image-section" ref={tabRefs.image2}>
                <img
                  src="https://images.unsplash.com/photo-1503945438517-f65904a52ce6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width text-section" ref={tabRefs.text2}>
                <h1 className="text-white">Our Vision</h1>
                <p className="tab-paragraph text-white">
                  At LVC Solutions, our vision is to be a trusted partner for
                  businesses, delivering transformative solutions that empower
                  them to innovate, grow, and thrive in a rapidly evolving
                  world. We strive to help organizations across industries
                  unlock their full potential through tailored strategies,
                  exceptional service, and a commitment to excellence. By
                  fostering innovation, embracing change, and focusing on
                  creating meaningful value, we aim to shape a future where
                  businesses achieve sustainable growth and success. At LVC
                  Solutions, we envision a world where technology and creativity
                  converge to redefine possibilities
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
              <div className="image-section" ref={tabRefs.image3}>
                <img
                  src="https://images.unsplash.com/photo-1565665681743-6ff01c5181e3?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Mission"
                  className="tab-image"
                />
              </div>
              <div className="tab-paragraph-width text-section" ref={tabRefs.text3}>
                <h1 className="text-white">Innovators at Heart</h1>
                <p className="tab-paragraph text-white">
                  We are a dynamic team of tech enthusiasts and innovators who
                  thrive on challenges. Our diverse expertise spans across
                  modern technologies like AI, cloud computing, and digital
                  engineering. We believe in fostering a culture of continuous
                  learning and collaboration, ensuring we remain at the
                  forefront of technological advancement while delivering
                  exceptional value to our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="about-cta"
        ref={myRef}
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          position: "relative",
          backgroundColor: "#black",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h1 className="insight-motion-profile">Trusted by 100+ companies</h1>
        </motion.div>

     
        <div
          ref={chipsRef}
          style={{
            position: "absolute",
            top: -300,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "20px",
            opacity: inView ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ y: -100, opacity: 0 }}
              animate={{
                y: 550, // Change the final Y value to determine where logos fall to
                opacity: 1,
                transition: {
                  duration: 3,
                  ease: "easeInOut",
                  delay: index * 0.2, // Stagger delay for a rain effect
                },
              }}
              className="company-logo-container"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="company-logo"
              />
            </motion.div>
          ))}
        </div>
      </div> */}
      <Companies/>

      <TransformationStartsHere/>

      <Footer />
    </div>
  );
};

export default AboutUs;
