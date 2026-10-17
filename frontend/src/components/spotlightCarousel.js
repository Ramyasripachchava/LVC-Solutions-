import React from "react";
import Carousel from "react-bootstrap/Carousel";
import spotlightLogo from "../assets/spotlight-media.png";

function SpotLightCarousel() {
  return (
    <Carousel className="product-spotlight-carousel bg-black">

      {/* SLIDE 1 – HERO */}
      <Carousel.Item>
        <div className="spotlight-slide-content text-center">
          <h2 className="spotlight-main-heading heading-title">
            PR, Branding & Digital Growth
          </h2>

          <p className="spotlight-hero-desc fair-text">
            From <b>Forbes features</b> to viral digital campaigns — we help founders, CEOs,
            and startups <b>get seen, trusted, and remembered.</b>
          </p>
        </div>
      </Carousel.Item>

      {/* SLIDE 2 – SERVICES */}
      <Carousel.Item>
        <div className="spotlight-slide-content text-center">
          <h2 className="spotlight-main-heading heading-title">
            Services
          </h2>

          <div className="spotlight-services-list">
            <div className="spotlight-service-item spotlight-slide2-cards">
              <h3 className="spotlight-service-title">PR & Media Features</h3>
              <p className="spotlight-service-desc fair-text">
                Guaranteed placements in Forbes, Entrepreneur, Yahoo
              </p>
              <p className="spotlight-service-desc fair-text">
                Global brand credibility
              </p>
            </div>

            <div className="spotlight-service-item spotlight-slide2-cards">
              <h3 className="spotlight-service-title">Founder Branding</h3>
              <p className="spotlight-service-desc fair-text">
                CEO storytelling & interviews
              </p>
              <p className="spotlight-service-desc fair-text">
                LinkedIn & social authority
              </p>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 3 – WHY CHOOSE */}
      <Carousel.Item>
        <div className="spotlight-slide-content text-center">
          <h2 className="spotlight-main-heading lvc-heading">
            Why Choose LVC Spotlight Media?
          </h2>

          <div className="spotlight-why-choose-list ul-list-padding-carousel">
            <p className="spotlight-why-choose-item fair-text">
              Founder-first PR & branding approach
            </p>
            <p className="spotlight-why-choose-item fair-text">
              Guaranteed media features
            </p>
            <p className="spotlight-why-choose-item fair-text">
              PR + Digital Growth combined
            </p>
            <p className="spotlight-why-choose-item fair-text">
              Startup & SaaS focused execution
            </p>
            <p className="spotlight-why-choose-item fair-text">
              Affordable, scalable packages
            </p>
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 4 – COMPETITOR COMPARISON (FIXED TABLE) */}
      <Carousel.Item>
        <div className="spotlight-slide-content text-center">
          <h2 className="spotlight-main-heading heading-title">
            Competitor Comparison
          </h2>

          <p className="spotlight-comparison-subtitle fair-text">
            Why LVC Spotlight Media Beats the Rest
          </p>

          <div className="table-isolation-wrapper spotlight-table-wrapper">
            <table className="spotlight-slide2-grid">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>LVC Spotlight Media</th>
                  <th>Traditional PR Agencies</th>
                  <th>Generic Digital Marketing Firms</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>PR & Media Placements</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span> Guaranteed global features
                  </td>
                  <td className="spotlight-graph-cells">✖ Pitched-based, no guarantees</td>
                  <td className="spotlight-graph-cells">✖ Not offered</td>
                </tr>

                <tr>
                  <th>Founder Branding</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span> CEO storytelling & LinkedIn growth
                  </td>
                  <td className="spotlight-graph-cells">✖ Company-only focus</td>
                  <td className="spotlight-graph-cells">✖ Ads, not people</td>
                </tr>

                <tr>
                  <th>Startup / SaaS Focus</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span> AI, SaaS & startup tailored
                  </td>
                  <td className="spotlight-graph-cells">✖ Generic</td>
                  <td className="spotlight-graph-cells">✖ Campaign-based only</td>
                </tr>

                <tr>
                  <th>Speed of Results</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span> 2–6 weeks
                  </td>
                  <td className="spotlight-graph-cells">✖ 3–6 months</td>
                  <td className="spotlight-graph-cells">⚠️ Ad spend dependent</td>
                </tr>

                <tr>
                  <th>Pricing</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span> Flexible packages
                  </td>
                  <td className="spotlight-graph-cells">✖ Expensive retainers</td>
                  <td className="spotlight-graph-cells">⚠️ Recurring ad costs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Carousel.Item>

      {/* SLIDE 5 – LOGO */}
      <Carousel.Item>
        <div className="spotlight-slide-content text-center d-flex justify-content-center align-items-center">
          <img
            src={spotlightLogo}
            alt="Spotlight Media"
            className="spotlight-final-logo"
          />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default SpotLightCarousel;
