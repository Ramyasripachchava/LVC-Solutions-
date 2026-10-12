import React from "react";

const topCompanies = [
  { logo: "/company_logos/hcl.png", name: "HCL" },
  { logo: "/company_logos/amazon.png", name: "Amazon" },
  { logo: "/company_logos/jpMorgan.png", name: "JPMorgan" },
  { logo: "/company_logos/cisco.png", name: "Cisco" },
  { logo: "/company_logos/intel.png", name: "Intel" },
  { logo: "/company_logos/wipro.png", name: "Wipro" },
  { logo: "/company_logos/tcs.png", name: "TCS" },
  { logo: "/company_logos/lnt.png", name: "L&T" },
  { logo: "/company_logos/techMahindra.png", name: "Tech Mahindra" },
  { logo: "/company_logos/kpmg_new.png", name: "KPMG" },
  { logo: "/company_logos/hp.png", name: "HP" },
];

const bottomCompanies = [
  { logo: "/company_logos/Goldmans.png", name: "Goldman Sachs" },
  { logo: "/company_logos/google.png", name: "Google" },
  { logo: "/company_logos/tesla_2.png", name: "Tesla" },
  { logo: "/company_logos/dell_white.png", name: "Dell" },
  { logo: "/company_logos/genpact.png", name: "Genpact" },
  { logo: "/company_logos/walmart.png", name: "Walmart" },
  { logo: "/company_logos/Accenture.png", name: "Accenture" },
  { logo: "/company_logos/Capgemini_new-removebg-preview.png", name: "CPE" },
  { logo: "/company_logos/siemens.png", name: "Siemens" },
  { logo: "/company_logos/nestle.png", name: "Nestle" },
  { logo: "/company_logos/ibm.png", name: "IBM" },
  { logo: "/company_logos/bosch.png", name: "Bosch" },
];

const sectionStyle = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  padding: "28px 0",
  backgroundColor: "#050509",
};

const washStyle = {
  position: "absolute",
  inset: 0,
  zIndex: -1,
  pointerEvents: "none",
  overflow: "hidden",
};

const primaryOverlayStyle = {
  position: "absolute",
  inset: 0,
  opacity: 0.6,
  background:
    "linear-gradient(to bottom, #050509 0%, #07101a 50%, #091422 100%)",
};

const accentGlowStyle = {
  position: "absolute",
  top: "-112px",
  right: "-160px",
  width: "900px",
  height: "700px",
  opacity: 0.45,
  borderRadius: "9999px",
  filter: "blur(120px)",
  background:
    "linear-gradient(135deg, rgba(59, 43, 7, 1) 0%, rgba(184, 134, 27, 0.95) 55%, rgba(184, 134, 27, 0) 100%)",
};

const rowShellStyle = {
  width: "100%",
  overflow: "hidden",
  backgroundColor: "#000",
};

const logoRowStyle = {
  display: "flex",
  width: "max-content",
  alignItems: "center",
  gap: "64px",
  padding: "0 24px",
};

const reverseRowStyle = {
  ...logoRowStyle,
  padding: "0 28px",
};

const logoStyle = {
  height: "32px",
  objectFit: "contain",
  display: "block",
  flexShrink: 0,
};

const rowItems = (companies) => [...companies, ...companies];

export default function Companies() {
  return (
    <section style={sectionStyle}>
      <style>
        {`
          @keyframes companies-marquee {
            from {
              transform: translateX(0);
            }

            to {
              transform: translateX(-50%);
            }
          }

          @keyframes companies-marquee-reverse {
            from {
              transform: translateX(-50%);
            }

            to {
              transform: translateX(0);
            }
          }

          .companies-marquee {
            animation: companies-marquee 28s linear infinite;
            will-change: transform;
          }

          .companies-marquee-reverse {
            animation: companies-marquee-reverse 28s linear infinite;
            will-change: transform;
          }
        `}
      </style>

      <div style={washStyle}>
        <div style={primaryOverlayStyle} />
        <div style={accentGlowStyle} />
      </div>

      <div style={{ width: "100%" }}>
        <div style={rowShellStyle}>
          <div className="companies-marquee" style={logoRowStyle}>
            {rowItems(topCompanies).map((company, index) => (
              <img
                key={`top-${index}`}
                src={company.logo}
                alt={company.name}
                style={logoStyle}
              />
            ))}
          </div>
        </div>

        <div style={{ height: "24px" }} />

        <div style={rowShellStyle}>
          <div className="companies-marquee-reverse" style={reverseRowStyle}>
            {rowItems(bottomCompanies).map((company, index) => (
              <img
                key={`bottom-${index}`}
                src={company.logo}
                alt={company.name}
                style={logoStyle}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
