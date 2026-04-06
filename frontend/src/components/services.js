import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Industries from "./industriesWeServe.js";
import TransformationStartsHere from './transformationStartsHere.js';
import Footer from "./footer.js";
const Home = () => {

  // Select section "What We Offer"
  const textRef = useRef(null);
  const imageRef = useRef(null);

  // Select section "Transform your Goals into reality"
  const textRef2 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
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
  
      if (textRef.current) observer.observe(textRef.current);
      if (imageRef.current) observer.observe(imageRef.current);

      if (textRef2.current) observer.observe(textRef2.current);
      if (imageRef2.current) observer.observe(imageRef2.current);
  
      return () => observer.disconnect();
    }, []);

  const [showAllServices, setShowAllServices] = useState(false);

  const toggleServices = () => {
    setShowAllServices((prev) => !prev); 
  };

  const images = [
    { src: "https://images.pexels.com/photos/34577/pexels-photo.jpg", alt: "E-commerce Development", title: "E-commerce Development" },
    { src: "https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Growth", title: "Website Growth" },
    { src: "https://images.pexels.com/photos/8867247/pexels-photo-8867247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Maintenance and Support", title: "Website Maintenance and Support" },
    { src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Design", title: "Website Design" },
    { src: "https://images.pexels.com/photos/8247921/pexels-photo-8247921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Cybersecurity", title: "Cybersecurity" },
    { src: "https://media.istockphoto.com/id/532187422/photo/cloud-uploading-from-mobile-phone-for-file-sharing-and-collaboration.jpg?b=1&s=612x612&w=0&k=20&c=yQsLHA-8AmPjbNcwanBAxMKosyt7e4D1rJPEvMvaShg=", alt: "Cloud", title: "Cloud" },
    { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Consulting", title: "Consulting" },
    { src: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Data & Analytics", title: "Data & Analytics" },
    { src: "https://images.pexels.com/photos/16629368/pexels-photo-16629368/free-photo-of-webpage-of-chatgpt-a-prototype-ai-chatbot-is-seen-on-the-website-of-openai-on-a-smartphone-examples-capabilities-and-limitations-are-shown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Artificial Intelligence", title: "Artificial Intelligence" },

  ];

  return (
    <main>
      <div className="services-section-herobanner">
        <div className="services-container">
            <div className="services-content">
                <p className="services-subtitle">IT Services</p>
                <hr className="underline" />
                <h1 className="services-title">Our Services</h1>
                <p className="mb-4" style={{ color: "#f1f1f1"}}>
                    We are offering services across industries! Check below to see what services we offer!
                </p>
                <Link to="/contact" className="btn btn-primary-whatwedo">
                    Contact Us
                </Link>
            </div>
        </div>
      </div>

      <section className="grid-section-services bg-black ">
        <div className="grid-container-services">
          <div className="grid-item-services">
            <img src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Sample" className="grid-image" />
          </div>
          <div className="grid-item-services text text-white ">
            <h2 className="header-1-clamp text-white">Innovative Solutions</h2>
            <p className="paragraph-clamp text-white">
              We deliver cutting-edge solutions that transform businesses and drive growth. 
              Discover how our expertise can empower your journey to success.
            </p>
          </div>
        </div>
      </section>

      <div className="container-fluid py-5 section-4 bg-black" style={{ padding: "0 50px" }}>
        <div className="row align-items-center">
          <div className="col-md-6 text-section" ref={textRef} style={{ paddingRight: "25px" }}>
            <h2 className="mb-4 header-1-clamp">What We Offer</h2>
            <h3 className="header-2-clamp">Design Development</h3>
            <p className="paragraph-clamp">
              Whether you're a start-up aiming to establish your digital
              presence or a growing enterprise seeking to elevate your brand,
              we’re here to support your journey. You’ve found a partner
              dedicated to your success, with the expertise to deliver real
              results.
            </p>
            <p style={{ fontSize: 'clamp(10px, 1.5vmax, 80px)' }}>
              Over the past 5 years, we’ve worked with countless clients,
              helping them achieve measurable growth and lasting impact.
            </p>
            <p style={{ fontSize: 'clamp(10px, 1.5vmax, 80px)' }}>
              <strong>
                Results, innovation, and growth are what we strive to bring to
                every project.
              </strong>
            </p>
          </div>

          <div className="col-md-6 image-section" ref={imageRef} style={{ paddingLeft: "25px" }}>
            <img
              className="d-block w-100 custom-carousel-image"
              src="https://images.pexels.com/photos/3184428/pexels-photo-3184428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="What We Offer"
            />
          </div>
        </div>
      </div>


      <div className="section-5 text-section " ref={textRef2}>
        <h1 style={{ textAlign:"center", color:"white",background:"black" }}>Transform your Goals into reality</h1>
      </div>
      <div className="container py-5 image-section " ref={imageRef2}>
        <div className="row bg-black">
          <div className="col-md-4 position-relative image-container ">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/7947968/pexels-photo-7947968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Identify goals</h2>
            </div>
          </div>
          <div className="col-md-4 position-relative image-container">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/7414305/pexels-photo-7414305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Design & Planning</h2>
            </div>
          </div>
          <div className="col-md-4 position-relative image-container">
            <img
              className="w-100 custom-image"
              src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Reveal Goals"
            />
            <div className="overlay-text">
              <h2>Execution & Reveal</h2>
            </div>
          </div>
        </div>
      </div>


      <h1 className="industries-we-serve-title">Industries we serve</h1>
      <Industries />


      <div className="container py-5">
        <h1 className="services-herotitle">Services We Offer</h1>
        <div className="row ">
          {/* Show first 4 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container ">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />
              <div className="overlay-text">
                <h2 className="industries-we-serve-title-text">{img.title}</h2>
              </div>
              <div class="gradient-overlay"></div>
            </div>
          ))}
          {/* Show additional images only if `showAllServices` is true */}
          {showAllServices &&
            images.slice(6).map((img, index) => (
              <div key={index} className="col-md-4 position-relative image-container">
                <img className="w-100 custom-image" src={img.src} alt={img.alt} />
                <div className="overlay-text">
                  <h2>{img.title}</h2>
                </div>
                <div class="gradient-overlay"></div>
              </div>
            ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-4">
          <button className="view-more-btn" onClick={toggleServices}>
            {showAllServices ? "Show Less" : "View More "}
          </button>
        </div>
      </div>


      <TransformationStartsHere/>
      <Footer/>
    </main>
  );
};

export default Home;