import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const services = [
  { icon: "account_balance", title: "Banking" },
  { icon: "school", title: "Education" },
  { icon: "cell_tower", title: "Communications, and Information Services" },
  { icon: "memory", title: "High Tech" },
  { icon: "flight_takeoff", title: "Travel and Logistics" },
  { icon: "storefront", title: "Retail" },
  { icon: "biotech", title: "Life Sciences" },
  { icon: "precision_manufacturing", title: "Manufacturing" },
  { icon: "public", title: "Public Services" },
  { icon: "bolt", title: "Energy, Resources, and Utilities" },
  { icon: "trending_up", title: "Markets" },
  { icon: "newspaper", title: "Media" },
];

const IndustriesWeServe = () => {
  return (
    <section className="industries-section bg-black text-white">
      <div className="container py-4">
        <div className="industries-grid-container">
          <div className="row g-3 justify-content-center">
            {services.map((service, index) => (
              <div key={index} className="col-lg-6 col-md-6 col-12">
                <div className="industries-item-card">
                  <div className="industries-icon-box">
                    <span className="material-symbols-outlined industries-we-serve-icon">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="industries-item-title mb-0">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
