import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Industries from "./industriesWeServe.js";
import { servicesData } from "../data/servicesData.js";
import "../styles/transformationStartsHere.css";

const ServiceLandingPage = () => {
  const navigate = useNavigate();
  const [showAllServices] = useState(false);

  const handleServiceClick = (slug) => {
    navigate(`/services/${slug}`);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="cta-divider section-cta-divider"></div>
      <h1 className="industries-we-serve-title">Industries we serve</h1>
      <Industries />

      <div className="container py-5">
        <div className="cta-divider section-cta-divider"></div>
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <h1 className="services-herotitle mb-0">Services We Offer</h1>
          <button
            onClick={() => {
              navigate("/services");
              window.scrollTo(0, 0);
            }}
            className="btn btn-outline-light btn-sm rounded-pill px-3 py-1"
          >
            All Services →
          </button>
        </div>

        <div className="row g-4">
          {/* First 6 services */}
          {servicesData.slice(0, 6).map((service, index) => (
            <div
              key={service.id || index}
              className="col-md-4 col-sm-6 position-relative image-container service-card-interactive"
              role="button"
              tabIndex={0}
              aria-label={`View details for ${service.title}`}
              onClick={() => handleServiceClick(service.slug)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleServiceClick(service.slug);
                }
              }}
            >
              <img
                className="w-100 custom-image"
                src={service.src}
                alt={service.alt || service.title}
                loading="lazy"
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

          {/* Remaining services if enabled */}
          {showAllServices &&
            servicesData.slice(6).map((service, index) => (
              <div
                key={service.id || index + 6}
                className="col-md-4 col-sm-6 position-relative image-container service-card-interactive"
                role="button"
                tabIndex={0}
                aria-label={`View details for ${service.title}`}
                onClick={() => handleServiceClick(service.slug)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleServiceClick(service.slug);
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
      </div>
    </>
  );
};

export default ServiceLandingPage;
