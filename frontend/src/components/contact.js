import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import "../style.css";
import Footer from "./footer.js";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    // For now, we'll just log the data
    console.log("Form Submitted:", formData);
    // You might want to add form validation, send to backend, etc.
    alert("Thank you for your message!");
  };
  return (
    <main>
      <div className="whatwedo-container ">
        <div className="whatwedo-content">
          <p className="whatwedo-subtitle">Contact Us</p>
          <hr className="underline" />
          <h2
            className="contact-title"
            style={{ color: "white", fontsize: "3em", marginTop: "60px" }}
          >
            What’s on your mind?
          </h2>
        </div>
      </div>

      <div className="contact-page bg-black">
        <div className="contact-container">
          {/* Left Side: Contact Form */}
          <div className="contact-form border border-white bg-black text-white">
            <h2 className="contact-title text-white">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group text-white">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-black"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn bg-white text-black">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Contact Info and Image */}
          <div className="contact-info">
            <div className="contact-overlay">
              <div className="contact-details">
                <div className="contact-detail">
                  <MapPin className="contact-icon" />
                  <span>
                    228 Hamilton Avenue 3rd Floor,
                    <br />
                    Palo Alto,CA 94301, United States
                  </span>
                </div>
                <div className="contact-detail">
                  <MapPin className="contact-icon" />
                  <span>
                    5015 Addison Circle,
                    <br />
                    Addison,TX 75001, United States
                  </span>
                </div>
                <div className="contact-detail">
                  <MapPin className="contact-icon" />
                  <span>
                    Unit No 203, 2nd Floor Suite #<br />
                    749,SBR CV Towers, Sector-l, Sy No 64,HUDA Techno Enclave,
                    Madhapur, Hyderabad - 500081
                  </span>
                </div>
                <div className="contact-detail">
                  <Mail className="contact-icon" />
                  <span>info@lvc-solutions.com </span>
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact Background"
              className="contact-image"
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Contact;
