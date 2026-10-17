import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import Industries from "./industriesWeServe.js";
import TransformationStartsHere from './transformationStartsHere.js';
import Footer from "./footer.js";
import { servicesData } from "../data/servicesData.js";
const Home = () => {
  const navigate = useNavigate();

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

  return (
    <main>
      <div className="services-section-herobanner">
        <div className="services-container">
            <div className="services-content">
                <p className="services-subtitle">IT Services</p>
                <hr className="underline" />
                <h1 className="services-title" style={{fontSize:"48px"}} >Our Services</h1>
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

      <div className="container-fluid py-5 section-4 bg-black services-offer-container">
        <div className="row align-items-center">
          <div className="col-md-6 text-section services-offer-text" ref={textRef}>
            <h2 className="mb-3 header-1-clamp what-we-offer-title">What We Offer</h2>
            <h3 className="mb-3 header-2-clamp what-we-offer-subtitle">Design Development</h3>
            <p className="paragraph-clamp text-white">
              Whether you're a start-up aiming to establish your digital
              presence or a growing enterprise seeking to elevate your brand,
              we’re here to support your journey. You’ve found a partner
              dedicated to your success, with the expertise to deliver real
              results.
            </p>
            <p className="paragraph-clamp text-white">
              Over the past 5 years, we’ve worked with countless clients,
              helping them achieve measurable growth and lasting impact.
            </p>
            <p className="paragraph-clamp text-white">
              <strong>
                Results, innovation, and growth are what we strive to bring to
                every project.
              </strong>
            </p>
          </div>

          <div className="col-md-6 image-section services-offer-image" ref={imageRef}>
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
        <h1 className="services-herotitle mb-4">Services We Offer</h1>
        <div className="row g-4">
          {/* Show first 6 services */}
          {servicesData.slice(0, 6).map((service, index) => (
            <div
              key={service.id || index}
              className="col-md-4 col-sm-6 position-relative image-container service-card-interactive"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${service.title}`}
              onClick={() => {
                navigate(`/services/${service.slug}`);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(`/services/${service.slug}`);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }
              }}
            >
              <img
                className="w-100 custom-image"
                src={service.src}
                alt={service.alt || service.title}
              />
              <div className="overlay-text">
                <h2 className="industries-we-serve-title-text mb-1">
                  {service.title}
                </h2>
                <p className="service-card-tagline d-none d-lg-block mb-0">
                  {service.tagline}
                </p>
              </div>

              <div className="service-card-action">
                <span className="service-action-btn">
                  Explore Service →
                </span>
              </div>

              <div className="gradient-overlay"></div>
            </div>
          ))}

          {/* Show additional services only if `showAllServices` is true */}
          {showAllServices &&
            servicesData.slice(6).map((service, index) => (
              <div
                key={service.id || index + 6}
                className="col-md-4 col-sm-6 position-relative image-container service-card-interactive"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${service.title}`}
                onClick={() => {
                  navigate(`/services/${service.slug}`);
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigate(`/services/${service.slug}`);
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }
                }}
              >
                <img
                  className="w-100 custom-image"
                  src={service.src}
                  alt={service.alt || service.title}
                />
                <div className="overlay-text">
                  <h2 className="mb-1">{service.title}</h2>
                  <p className="service-card-tagline d-none d-lg-block mb-0">
                    {service.tagline}
                  </p>
                </div>

                <div className="service-card-action">
                  <span className="service-action-btn">
                    Explore Service →
                  </span>
                </div>

                <div className="gradient-overlay"></div>
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