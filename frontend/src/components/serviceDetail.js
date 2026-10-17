import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { servicesData, getServiceBySlug } from "../data/servicesData";
import Footer from "./footer";
import "../style.css";
import "./serviceDetail.css";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(serviceSlug);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (service) {
      document.title = `${service.title} | LVC Solutions`;
    }
  }, [serviceSlug, service]);

  if (!service) {
    return (
      <main className="service-detail-page bg-black text-white min-vh-100 py-5">
        <div className="container text-center py-5">
          <h1 className="display-4 text-white mb-4">Service Not Found</h1>
          <p className="lead text-secondary mb-5">
            The service you're looking for does not exist or may have been moved.
          </p>
          <Link to="/services" className="btn btn-primary px-4 py-2">
            View All Services
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <main className="service-detail-page bg-black text-white">
      {/* Hero Section */}
      <section className="service-detail-hero">
        <div className="service-hero-overlay"></div>
        <div className="container position-relative z-index-2">
          {/* Breadcrumbs */}
          <nav aria-label="breadcrumb" className="service-breadcrumb mb-4">
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <div className="service-badge-pill mb-3">
                <span className="material-symbols-outlined me-2 fs-6">
                  {service.icon || "verified"}
                </span>
                Enterprise Capability
              </div>
              <h1 className="service-detail-title mb-3">{service.title}</h1>
              <p className="service-detail-tagline mb-4">{service.tagline}</p>
              <p className="service-detail-shortdesc mb-4">
                {service.shortDescription}
              </p>

              <div className="d-flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-service-cta">
                  Schedule a Consultation →
                </Link>
                <Link to="/services" className="btn btn-service-outline">
                  Browse All Services
                </Link>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="service-hero-image-wrapper">
                <img
                  src={service.src}
                  alt={service.alt || service.title}
                  className="service-hero-image"
                />
                <div className="service-hero-image-border"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="service-body-section py-5">
        <div className="container">
          {/* Service Overview */}
          <div className="service-content-block mb-5">
            <div className="section-label-tag">SERVICE OVERVIEW</div>
            <h2 className="section-heading-detail text-white mb-4">
              Engineered for Enterprise Impact
            </h2>
            <div className="service-overview-text">
              {service.overview.split("\n\n").map((para, i) => (
                <p key={i} className="lead-overview-p">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Key Features Grid */}
          <div className="service-content-block mb-5">
            <div className="section-label-tag">CORE CAPABILITIES</div>
            <h2 className="section-heading-detail text-white mb-4">
              Key Features & Architectural Highlights
            </h2>
            <div className="row g-4">
              {service.keyFeatures.map((feat, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="service-feature-card h-100">
                    <div className="feature-number">0{index + 1}</div>
                    <h3 className="feature-card-title text-white mb-2">
                      {feat.title}
                    </h3>
                    <p className="feature-card-desc mb-0">{feat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Benefits & ROI */}
          <div className="service-content-block mb-5">
            <div className="section-label-tag">MEASURABLE VALUE</div>
            <h2 className="section-heading-detail text-white mb-4">
              Business Benefits & Strategic Advantage
            </h2>
            <div className="row g-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="col-md-6 col-lg-3">
                  <div className="service-benefit-card h-100">
                    <div className="benefit-metric-badge">{benefit.metric}</div>
                    <h3 className="benefit-card-title text-white mb-2">
                      {benefit.title}
                    </h3>
                    <p className="benefit-card-desc mb-0">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Real-World Use Cases */}
          <div className="service-content-block mb-5">
            <div className="section-label-tag">PRACTICAL APPLICATION</div>
            <h2 className="section-heading-detail text-white mb-4">
              Business Use Cases Across Sectors
            </h2>
            <div className="row g-4">
              {service.useCases.map((useCase, index) => (
                <div key={index} className="col-lg-4 col-md-6">
                  <div className="service-usecase-card h-100">
                    <div className="usecase-industry-tag">
                      <span className="material-symbols-outlined fs-6 me-1">
                        domain
                      </span>
                      {useCase.industry}
                    </div>
                    <h3 className="usecase-card-title text-white mt-3 mb-2">
                      Operational Deployment
                    </h3>
                    <p className="usecase-card-desc mb-0">
                      {useCase.scenario}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          {service.technologies && service.technologies.length > 0 && (
            <div className="service-content-block mb-5">
              <div className="section-label-tag">TECH STACK</div>
              <h2 className="section-heading-detail text-white mb-4">
                Technologies & Frameworks
              </h2>
              <div className="d-flex flex-wrap gap-2">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge-pill">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action Banner */}
          <div className="service-cta-banner p-4 p-md-5 my-5">
            <div className="row align-items-center g-4">
              <div className="col-lg-8">
                <h2 className="text-white fw-bold mb-2">
                  Accelerate Your Digital Evolution
                </h2>
                <p className="text-secondary mb-0">
                  Collaborate with LVC Solutions' senior architects to design and
                  execute your {service.title} strategy with federal compliance
                  and enterprise precision.
                </p>
              </div>
              <div className="col-lg-4 text-lg-end">
                <Link to="/contact" className="btn btn-service-cta">
                  Start Your Project →
                </Link>
              </div>
            </div>
          </div>

          {/* Explore Other Services */}
          <div className="service-content-block mt-5 pt-4">
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
              <div>
                <div className="section-label-tag">MORE CAPABILITIES</div>
                <h2 className="section-heading-detail text-white mb-0">
                  Explore Related Services
                </h2>
              </div>
              <Link to="/services" className="text-decoration-none text-info">
                View All Services →
              </Link>
            </div>

            <div className="row g-4">
              {otherServices.slice(0, 3).map((item) => (
                <div key={item.id} className="col-md-4">
                  <div
                    className="related-service-card"
                    onClick={() => {
                      navigate(`/services/${item.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <div className="related-service-img-wrapper">
                      <img src={item.src} alt={item.title} />
                      <div className="related-img-overlay"></div>
                    </div>
                    <div className="p-3">
                      <h3 className="related-card-title text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="related-card-desc mb-2">
                        {item.tagline}
                      </p>
                      <span className="related-card-link text-info">
                        Learn More →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
