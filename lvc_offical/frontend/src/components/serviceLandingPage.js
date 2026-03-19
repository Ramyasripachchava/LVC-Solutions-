import React, { useState } from "react";
import Industries from "./industriesWeServe.js";

const ServiceLandingPage = () => {

  const [showAllServices, setShowAllServices] = useState(false);

  const images = [
    { src: "https://images.pexels.com/photos/34577/pexels-photo.jpg", alt: "E-commerce Development", title: "E-commerce Development" },
    { src: "https://images.pexels.com/photos/1181474/pexels-photo-1181474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Growth", title: "Website Growth" },
    { src: "https://images.pexels.com/photos/8867247/pexels-photo-8867247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Maintenance and Support", title: "Website Maintenance and Support" },
    { src: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Website Design", title: "Website Design" },
    { src: "https://images.pexels.com/photos/8247921/pexels-photo-8247921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Cybersecurity", title: "Cybersecurity" },
    { src: "https://media.istockphoto.com/id/532187422/photo/cloud-uploading-from-mobile-phone-for-file-sharing-and-collaboration.jpg?b=1&s=612x612&w=0&k=20&c=yQsLHA-8AmPjbNcwanBAxMKosyt7e4D1rJPEvMvaShg=", alt: "Cloud", title: "Cloud" },
    { src: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Consulting", title: "Consulting" },
    { src: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Data & Analytics", title: "Data & Analytics" },
    { src: "https://images.pexels.com/photos/16629368/pexels-photo-16629368/free-photo-of-webpage-of-chatgpt-a-prototype-ai-chatbot-is-seen-on-the-website-of-openai-on-a-smartphone-examples-capabilities-and-limitations-are-shown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", alt: "Artificial Intelligence", title: "Artificial Intelligence" },

  ];

  return (
    <>
      <h1 className="industries-we-serve-title">Industries we serve</h1>
      <Industries />

      <div className="container py-5">
        <h1 className="services-herotitle">Services We Offer</h1>

        <div className="row">
          {/* First 6 images */}
          {images.slice(0, 6).map((img, index) => (
            <div key={index} className="col-md-4 position-relative image-container">
              <img className="w-100 custom-image" src={img.src} alt={img.alt} />

              <div className="overlay-text">
                <h2 className="industries-we-serve-title-text">{img.title}</h2>
              </div>

              <div className="gradient-overlay"></div>
            </div>
          ))}

          {/* Remaining images */}
          {showAllServices &&
            images.slice(6).map((img, index) => (
              <div key={index} className="col-md-4 position-relative image-container">
                <img className="w-100 custom-image" src={img.src} alt={img.alt} />

                <div className="overlay-text">
                  <h2>{img.title}</h2>
                </div>

                <div className="gradient-overlay"></div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ServiceLandingPage;