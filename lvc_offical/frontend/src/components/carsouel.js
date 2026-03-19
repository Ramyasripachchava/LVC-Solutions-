import Carousel from "react-bootstrap/Carousel";
import "../style.css";
import landingImg from "../assets/lvc_landing.png";
import { Margin } from "@mui/icons-material";
// import softwareSolutions from "../assets/development.mp4";

function UncontrolledExample() {
  const styles = {
    carouselContainer: {
      height: window.innerWidth <= 768 ? "80vh" : "100vh",
      position: "relative",
      overflow: "hidden",
      marginBottom: "-2px",
      marginTop: "100px",
    },
    videoWrapper: {
      height: window.innerWidth <= 768 ? "80vh" : "100vh",
      width: "100%",
      position: "relative",
    },
    video: {
      width: "100%",
      height: window.innerWidth <= 768 ? "80vh" : "100%",
      objectFit: "cover",
      position: "absolute",
      top: 0,
      left: 0,
    },
    caption: {
      position: "absolute",
      top: "40%",
      transform: "translateY(-50%)",
      left: "10%",
      right: "10%",
      textAlign: "left",
      maxWidth: window.innerWidth <= 768 ? "100%" : "800px",
    },
  };

  return (
    <div style={styles.carouselContainer}>
      <Carousel interval={2000} controls={true} indicators={false} slide>
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
            <div style={styles.caption} className="carousel-caption-style">
              <h1>Expertly built websites, every time.</h1>
              <hr />
              <p className="carousel-description">
                Whether you're looking to grow your e-commerce site or refine
                your marketing site, we can help.
              </p>
              <button className="btn-career">Read More</button>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div style={styles.videoWrapper}>
            <img src={landingImg} style={styles.video} alt="Landing" />
            {/* <img src="../assets/lvc_landing.png" /> */}
            <div style={styles.caption} className="carousel-caption-style">
              <h1>Software Solutions.</h1>
              <hr />
              <p className="carousel-description">
                We help teams and businesses thrive through technology.
              </p>
              <button className="btn-career">Read More</button>
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

            <div style={styles.caption} className="carousel-caption-style">
              <h1>Applications of Tommorow, Today</h1>
              <hr />
              <p className="carousel-description">
                Leverage our expertise in cloud transformation and engineering
                excellence
              </p>
              <button className="btn-career">Read More</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
