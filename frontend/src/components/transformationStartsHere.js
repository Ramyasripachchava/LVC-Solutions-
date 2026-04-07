import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../style.css";
import "../styles/transformationStartsHere.css"

const TransformationStartsHere = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <section className="cta-modern-section">
      <div className="cta-overlay"></div>

      <div className="cta-container">
        <div className="cta-left">
          <h2 className="cta-title">
            Transformation Starts Here
          </h2>

          <p className="cta-description">
            At LVC Solutions, transformation starts where vision meets action.
            We’re not just a software company—we’re your dedicated partner in
            reimagining what's possible.
            <br /><br />
            Rooted in innovation and driven by real-world results, we empower
            businesses to cross the digital frontier with confidence and agility.
            <br /><br />
            Let's build tomorrow—starting now.
          </p>

          <button
            className="cta-primary-btn"
            onClick={() => handleNavigation("/contact")}
          >
            Connect With Us →
          </button>
        </div>

        <div className="cta-divider"></div>

        <div className="cta-right">
          <p className="cta-subtitle">FIND OUT MORE</p>

          <button
            className="cta-secondary-btn"
            onClick={() => handleNavigation("/services")}
          >
            Our Services
          </button>

          <button
            className="cta-secondary-btn"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default TransformationStartsHere;