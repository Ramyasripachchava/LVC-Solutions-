import React from 'react'
import AcademyCarousel from "./academyCarousel"
import lvc360logo from "../assets/lvc360logo.png";

const Lvc320CareerProduct = () => {
  return (
   <section className="container py-5 section-4">
          <div className="academy-heading-row">
            <div
              style={{
                textAlign: "center",
                display: "grid",
              }}
            >
              <img
                src={lvc360logo}
                alt="LVC360 Logo"
                style={{ maxWidth: "100px", height: "auto" }}
              />
            </div>
            <div>
              <h1
                style={{
                  color: "white",
                  fontSize: "clamp(30px, 2.5vmax, 60px)",
                }}
              >
                LVC360 career program - 
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(20px, 1.5vmax, 40px)",
                  }}
                >
                   Stop guessing. Let your career be managed.
                </span>
              </h1>
            </div>
          </div>
          <div className="academy-carousel-container bg-black">
            <AcademyCarousel />
          </div>
          <div class="container my-5">
            <div class="p-5 text-center">
              <h2 class="fw-bold mb-4">
                Choose Your Path: 6-Month Fast Track or 12-Month Comprehensive
                Bootcamp.
              </h2>
              <a
                href="https://www.lvcacademy.com"
                class="btn btn-primary-whatwedo btn-lg"
              >
                View More Bootcamps
              </a>
            </div>
          </div>
        </section>
  )
}

export default Lvc320CareerProduct
