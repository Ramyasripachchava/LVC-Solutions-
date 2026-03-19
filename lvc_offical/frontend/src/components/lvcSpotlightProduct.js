import React from 'react'
import SpotLightCarousel from "./spotlightCarousel"
import SpotLogo from "../assets/spotlight-media.png";

const LvcSpotlightProduct = () => {
  return (
  <section
          style={{
            fontSize: "14px",
            color: "000",
            fontWeight: "500",
            background: "black",
            borderBottom: "2px solid grey"
          }}
          className="py-5"
        >
          <div
            className="container section-4"
            style={{ paddingTop: 0, paddingBottom: 0 }}
          >
            <div
              className="academy-heading-row spotlight-heading-row"
              style={{ columnGap: "clamp(6px, 1vw, 12px)" }}
            >
              <div style={{ textAlign: "center", display: "grid" }}>
                <img
                  src={SpotLogo}
                  alt="LVC Spotlight Media Logo"
                  style={{ maxWidth: "300px", height: "auto" }}
                />
              </div>
              <div>
                {/* <h1
                  className="sportlight-heading"
                  style={{
                    color: "white",
                    fontSize: "clamp(30px, 2.5vmax, 60px)",
                    margin: 0,
                    willChange: "transform",
                  }}
                >
                  LVC Spotlight Media
                </h1> */}
              </div>
            </div>
          </div>

          <div className="spotlight-carousel-container ">
            <SpotLightCarousel />
          </div>
          <div style={{ textAlign: "center"}} >
            <p style={{ fontSize: "25px", color: "white" }}>
              As Seen In → Forbes | Entrepreneur | Yahoo | TechCrunch | Medium
            </p>
          </div>
      
        </section> 
  )
}

export default LvcSpotlightProduct
