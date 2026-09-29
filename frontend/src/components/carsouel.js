import Carousel from "react-bootstrap/Carousel";
import "../style.css";
// import softwareSolutions from "../assets/development.mp4";

function UncontrolledExample() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    carouselContainer: {
      height: isMobile ? "80vh" : "100vh",
      position: "relative",
      overflow: "hidden",
      marginBottom: "-2px",
      marginTop: "100px",
    },
    image:{
       width:"100%",
       height: isMobile ? "80vh" : "100vh",
       objectFit: "cover",
       position: "absolute",
       top: 0,
       left: 0,
    },
    videoWrapper: {
      height: isMobile ? "80vh" : "100vh",
      width: "100%",
      position: "relative",
    },
    video: {
      width: "100%",
      height: isMobile ? "80vh" : "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    },
  };

  return (
    <div style={styles.carouselContainer}>
      <Carousel
        className="hero-carousel"
        interval={2000}
        controls={true}
        indicators={false}
        slide
      >
        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <video
              style={styles.video}
              src="https://www.pexels.com/download/video/3141208/"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="carousel-caption-style hero-carousel-caption">
              <h1>Expertly built websites, every time.</h1>
              <hr />
              <p className="carousel-description">
                Whether you're looking to grow your e-commerce site or refine
                your marketing site, we can help.
              </p>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <video
              style={styles.video}
              // src="https://www.pexels.com/download/video/3129671/"
              src="https://www.pexels.com/download/video/6963744/"
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="carousel-caption-style hero-carousel-caption">
              <h1>Applications of Tommorow, Today</h1>
              <hr />
              <p className="carousel-description">
                Leverage our expertise in cloud transformation and engineering
                excellence
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;

