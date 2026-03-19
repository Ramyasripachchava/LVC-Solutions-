import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../assets/vecteezy_black-and-gray-background-vector-illustration-lighting_6417811-1.jpg";
import spotlightLogo from "../assets/spotlight-media.png";

function SpotLightCarousel() {
  return (
    <Carousel className="gradient-background-color bg-black">

      {/* SLIDE 1 – HERO */}
      <Carousel.Item className="spotlight-carousel-scroll">
        <img
          alt="background"
          src={ExampleCarouselImage}
          style={{ width: "100%", minHeight: "275px", opacity: "0" }}
        />

        <Carousel.Caption className="spotlight-carousel-items-container text-center">
          <h2 style={{ color: "white", fontWeight: "bolder", fontSize: "clamp(30px,2.5vmax,60px)" }}>
            PR, Branding & Digital Growth
          </h2>

          <p style={{ color: "white", marginTop: "20px", fontSize: "clamp(16px,1.6vmax,28px)" }}>
            From <b>Forbes features</b> to viral digital campaigns — we help founders, CEOs,
            and startups <b>get seen, trusted, and remembered.</b>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 2 – SERVICES */}
      <Carousel.Item className="spotlight-carousel-scroll">
        <img
          alt="background"
          src={ExampleCarouselImage}
          style={{ width: "100%", minHeight: "275px", opacity: "0" }}
        />

        <Carousel.Caption className="spotlight-carousel-items-container">
          <h2 style={{ color: "white", fontWeight: "bolder", fontSize: "clamp(32px,2.5vmax,60px)" }}>
            Services
          </h2>

          <div className="spotlight-carousel-services">
            <div className="spotlight-slide2-container">
              <div className="spotlight-slide2-cards">
                <h3>PR & Media Features</h3>
                <ul>
                  <li>Guaranteed placements in Forbes, Entrepreneur, Yahoo</li>
                  <li>Global brand credibility</li>
                </ul>
              </div>

              <div className="spotlight-slide2-cards">
                <h3>Founder Branding</h3>
                <ul>
                  <li>CEO storytelling & interviews</li>
                  <li>LinkedIn & social authority</li>
                </ul>
              </div>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 3 – WHY CHOOSE */}
      <Carousel.Item className="spotlight-carousel-scroll">
        <img
          alt="background"
          src={ExampleCarouselImage}
          style={{ width: "100%", minHeight: "275px", opacity: "0" }}
        />

        <Carousel.Caption className="spotlight-carousel-items-container">
          <h2 style={{ color: "white", fontWeight: "bolder", fontSize: "clamp(32px,2.5vmax,60px)" }}>
            Why Choose LVC Spotlight Media?
          </h2>

          <ul className="ul-list-padding-carousel">
            <li>Founder-first PR & branding approach</li>
            <li>Guaranteed media features</li>
            <li>PR + Digital Growth combined</li>
            <li>Startup & SaaS focused execution</li>
            <li>Affordable, scalable packages</li>
          </ul>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 4 – COMPETITOR COMPARISON (FIXED TABLE) */}
      <Carousel.Item className="spotlight-carousel-scroll">
        <img
          alt="background"
          src={ExampleCarouselImage}
          style={{ width: "100%", minHeight: "275px", opacity: "0" }}
        />

        <Carousel.Caption className="spotlight-carousel-items-container">
          <h2 style={{ color: "white", fontWeight: "bolder", fontSize: "clamp(32px,2.5vmax,60px)" }}>
            Competitor Comparison
          </h2>

          <p style={{ color: "white", fontSize: "clamp(14px,1vmax,22px)" }}>
            Why LVC Spotlight Media Beats the Rest
          </p>

          <div className="table-isolation-wrapper">
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
                    <span className="gold-tick">✔</span>
                    Guaranteed global features
                  </td>
                  <td className="spotlight-graph-cells">✖ Pitched-based, no guarantees</td>
                  <td className="spotlight-graph-cells">✖ Not offered</td>
                </tr>

                <tr>
                  <th>Founder Branding</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span>
                    CEO storytelling & LinkedIn growth
                  </td>
                  <td className="spotlight-graph-cells">✖ Company-only focus</td>
                  <td className="spotlight-graph-cells">✖ Ads, not people</td>
                </tr>

                <tr>
                  <th>Startup / SaaS Focus</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span>
                    AI, SaaS & startup tailored
                  </td>
                  <td className="spotlight-graph-cells">✖ Generic</td>
                  <td className="spotlight-graph-cells">✖ Campaign-based only</td>
                </tr>

                <tr>
                  <th>Speed of Results</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span>
                    2–6 weeks
                  </td>
                  <td className="spotlight-graph-cells">✖ 3–6 months</td>
                  <td className="spotlight-graph-cells">⚠️ Ad spend dependent</td>
                </tr>

                <tr>
                  <th>Pricing</th>
                  <td className="spotlight-graph-cells">
                    <span className="gold-tick">✔</span>
                    Flexible packages
                  </td>
                  <td className="spotlight-graph-cells">✖ Expensive retainers</td>
                  <td className="spotlight-graph-cells">⚠️ Recurring ad costs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      {/* SLIDE 5 – LOGO */}
      <Carousel.Item className="spotlight-carousel-scroll">
        <img
          alt="background"
          src={ExampleCarouselImage}
          style={{ width: "100%", minHeight: "275px", opacity: "0" }}
        />

        <Carousel.Caption className="spotlight-carousel-items-container d-flex justify-content-center align-items-center">
          <img src={spotlightLogo} alt="Spotlight Media" style={{ maxHeight: "300px" }} />
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

export default SpotLightCarousel;
