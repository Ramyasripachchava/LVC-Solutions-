import CarouselComponent from "./carsouel.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import TransformationStartsHere from "./transformationStartsHere.js";
import WithYouForLong from "./withYouForLong.js";
import ServiceLandingPage from "./serviceLandingPage.js";
import Footer from "./footer.js";
import SpotLogo from "../assets/spotlight-media.png";
import FairJobCarousel from "./fairJobCarousel.js";
import SpotLightCarousel from "./spotlightCarousel.js";
import AcademyCarousel from "./academyCarousel.js";
import lvc360logo from "../assets/lvc360logo.png";

const Home = () => {
  return (
    <>
      <main
        className="page-home"
        // style={{ padding: "20px", marginTop: "50px" }}
      >
        <div className="carsouelheight">
          <CarouselComponent />
        </div>
        {/* <section>
          <h1 style={{ color: 'white', fontSize: 'clamp(30px, 2.5vmax, 60px)' }}>
              LVC Fair Job Portal <br/>
            <strong style={{ color: 'white' }}>
              The World's First Scam-Free Job Portal
            </strong>
          </h1>
        </section>
        <FairJobCarousel /> */}
      </main>

      {/* FULL-BLEED: Smart HR Scheduler */}
      {/* <section className="bg-white">
        <div className="container-fluid px-0 py-5">
          <h1 className="text-dark">Smart HR Scheduler</h1>
          <p
            className="text-center mt-2 mb-0 fw-bold fst-italic fs-4"
            style={{ color: '#4f0694' }}
          >
            Launching soon
          </p>
        </div>
      </section>

      <main style={{ padding: '20px' }}>
        <section style={{ backgroundColor: 'black' }} className="py-5">
          <h1 style={{ color: 'white' }}>Founder's Project</h1>
          <p
            className="text-center mt-2 mb-0 fw-bold fst-italic fs-4"
            style={{ color: '#4f0694' }}
          >
            Launching soon
          </p>
        </section>
      </main> */}

      {/* Material Icons Section */}
      {/* <div className="logos-section">
      <img src="https://cdn.freebiesupply.com/images/large/2x/google-logo-black-transparent.png" alt="Google Logo" className="company-logo" />
      <img src="https://static.vecteezy.com/system/resources/previews/021/514/726/non_2x/microsoft-software-logo-brand-symbol-with-name-black-design-illustration-free-vector.jpg" alt="Microsoft Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle Logo" className="company-logo" />
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS Logo" className="company-logo" />
      </div> */}

      {/* <section style={{ backgroundColor: "white" }} className="py-5">
        <h1 style={{ color: "black", }}>Section</h1>
      </section> */}
      {/* <div style={{ border: "1px solid white" }} /> */}

      {/* LVC Academy info */}
      {/* <div
        className="bg-black"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      > */}
        {/* <section className="container py-5 section-4">
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
                  color: "#d4af37",
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
                class="btn btn-primary btn-lg"
              >
                View More Bootcamps
              </a>
            </div>
          </div>
        </section> */}
      {/* </div> */}

      {/* <div style={{ border: "1px solid white" }} /> */}
      {/* Resume normal page padding/content */}
      {/* <main className="page-home" style={{ padding: "20px" }}> */}
        {/* Spotlight Media */}
        {/* <section
          style={{
            fontSize: "14px",
            color: "000",
            fontWeight: "500",
            background: "black",
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
                <h1
                  className="sportlight-heading"
                  style={{
                    color: "white",
                    fontSize: "clamp(30px, 2.5vmax, 60px)",
                    margin: 0,
                    willChange: "transform",
                  }}
                >
                  LVC Spotlight Media
                </h1>
              </div>
            </div>
          </div>

          <div className="spotlight-carousel-container">
            <SpotLightCarousel />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "25px", color: "white" }}>
              As Seen In → Forbes | Entrepreneur | Yahoo | TechCrunch | Medium
            </p>
          </div>
        </section> */}


        {/* section 5 transform your goals */}
        {/* <div className="section-5">
          <h1 style={{ textAlign: "center", color: "white" }}>
            Transform your Goals into reality
          </h1>
        </div> */}

        {/* <div className="container py-5">
          <div className="row">
            <div className="col-md-4 position-relative image-container">
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
                alt="Design & Planning"
              />
              <div className="overlay-text">
                <h2>Design & Planning</h2>
              </div>
            </div>
            <div className="col-md-4 position-relative image-container">
              <img
                className="w-100 custom-image"
                src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Execution & Reveal"
              />
              <div className="overlay-text">
                <h2>Execution & Reveal</h2>
              </div>
            </div>
          </div>
        </div> */}

        <ServiceLandingPage/>
        <TransformationStartsHere />
        {/* <WithYouForLong/> */}
        <Footer />
      {/* </main> */}
    </>
  );
};

export default Home;
