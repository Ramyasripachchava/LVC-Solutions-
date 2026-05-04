import React, { useState, memo } from "react";
import Disclaimer from "./disclaimer";
import "../styles/internForm.css";

const InternForm = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const SCRIPT_URL = process.env.REACT_APP_INTERN_SCRIPT_URL;
  const SCRIPT_SECRET = process.env.REACT_APP_SCRIPT_SECRET;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    degree: "",
    universityName: "",
    yearOfClass: "",
    semester: "",
    branch: "",
    percentage: "",
    role: "",
    resume: "",
    portfolio: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
    feeConsent: false,
    selectionConsent: false,
    contactConsent: false,
  });

  const roles = [
    "AI/ML Intern",
    "Gen AI Intern",
    "UI/UX Design Intern",
    // "Digital Marketing Intern",
    "Business Analyst Intern",
    // "Data Science Intern",
    "Data Analyst Intern",
    "DevOps Intern",
    "Full Stack Intern",
    "Mobile App Developer Intern",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const alphabetFields = ["fullName", "universityName", "city", "state", "country", "degree", "branch"];
    const numericFields = ["pinCode", "yearOfClass", "semester"];
    let finalValue = type === "checkbox" ? checked : value;
    if (alphabetFields.includes(name) && type !== "checkbox") {
      finalValue = value.replace(/[^a-zA-Z\s]/g, ""); 
    }
    if (numericFields.includes(name)) {
      finalValue = value.replace(/[^0-9]/g, ""); 
    }
    if (name === "phone") {
      finalValue = value.replace(/[^0-9]/g, "").slice(0, 15);
    }
    if (name === "percentage") {
    finalValue = value.replace(/[^0-9.]/g, "");
    if ((finalValue.match(/\./g) || []).length > 1) return; 
  }
    setFormData((prev) => ({
      ...prev,
      [name]: finalValue,
    }));
  };
  const validateStep = () => {
    let newErrors = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = "Full Name is required";
      if (!formData.phone) {
        newErrors.phone = "Phone is required";
      } else if (formData.phone.length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
      }
      if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!formData.email.toLowerCase().endsWith("@gmail.com")) {
          newErrors.email = "Only Gmail addresses (@gmail.com) are accepted";
        }
    }

    if (step === 2) {
      if (!formData.degree) newErrors.degree = "Degree is required";
      if (!formData.universityName)
        newErrors.universityName = "University Name is required";
      if (!formData.yearOfClass)
        newErrors.yearOfClass = "Year of Class is required";
      if (!formData.semester)
        newErrors.semester = "Semester is required";
      if (!formData.branch) newErrors.branch = "Branch is required";
      if (!formData.percentage) {
        newErrors.percentage = "Percentage is required";
      } else if (parseFloat(formData.percentage) > 100) {
        newErrors.percentage = "Percentage cannot exceed 100";
      }
      if (!formData.role) newErrors.role = "Internship Role is required";
      if (!formData.resume) newErrors.resume = "Resume is required";
    }

    if (step === 3) {
      if (!formData.country) newErrors.country = "Country is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.pinCode) newErrors.pinCode = "pinCode is required";
      // if (!formData.state) newErrors.state = "State is required";
      if (!formData.feeConsent || !formData.selectionConsent || !formData.contactConsent)
        newErrors.consent = "You must agree to all consents to proceed";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    // Show payment modal first
    if (validateStep()) {
      setShowPaymentModal(true);
    }
  };

  const handlePaymentAgree = async () => {
    setShowPaymentModal(false);
    setLoading(true);
    try {
      const payload = {
        secret: SCRIPT_SECRET,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        degree: formData.degree,
        universityName: formData.universityName,
        yearOfClass: formData.yearOfClass,
        semester: formData.semester,
        branch: formData.branch,
        percentage: formData.percentage,
        internshipRole: formData.role,
        resume: formData.resume,
        portfolio: formData.portfolio,
        country: formData.country,
        state: formData.state,
        city: formData.city,
      };
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(payload),
      });
      setStep(4);
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Submission failed. Please check your internet connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container" style={{ marginTop: "40px" }}>
      <div className="form-card">
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: step === 1 ? "33%" : step === 2 ? "66%" : "100%",
            }}
          ></div>
        </div>

        <h2 style={{ color: "#ffffff" }}>
          {step === 1 && "Personal Information"}
          {step === 2 && "Education Information"}
          {step === 3 && "Address Information"}
          {/* {step === 4 && "Application Submitted"} */}
        </h2>
        {step === 3 && errors.consent && (
          <p className="error">{errors.consent}</p>
        )}
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <div>
                <label className="input-label">
                  Full Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  pattern="[A-Za-z]+"
                  name="fullName"
                  placeholder="Enter Your Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                {errors.fullName && <p className="error">{errors.fullName}</p>}
              </div>

              <label className="input-label">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="no-spinner"
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}

              <label className="input-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}

              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <label className="input-label">
                Degree (B.E / B.Tech / B.Sc) <span className="required">*</span>
              </label>
              <input
                type="text"
                name="degree"
                placeholder="Enter Your Degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
              {errors.degree && <p className="error">{errors.degree}</p>}

              <label className="input-label">
                University Name <span className="required">*</span>
              </label>
              <input
                type="text"
                name="universityName"
                placeholder="Enter Your University Name"
                value={formData.universityName}
                onChange={handleChange}
                required
              />
              {errors.universityName && (
                <p className="error">{errors.universityName}</p>
              )}

              <label className="input-label">
                Year of Class <span className="required">*</span>
              </label>
              <input
                type="text"
                name="yearOfClass"
                placeholder="e.g. 1st Year / 2024"
                value={formData.yearOfClass}
                onChange={handleChange}
                required
              />
              {errors.yearOfClass && (
                <p className="error">{errors.yearOfClass}</p>
              )}

              <label className="input-label">
                Semester <span className="required">*</span>
              </label>
              <input
                type="text"
                name="semester"
                placeholder="e.g. 5th Semester"
                value={formData.semester}
                onChange={handleChange}
                required
              />
              {errors.semester && (
                <p className="error">{errors.semester}</p>
              )}

              <label className="input-label">
                Branch <span className="required">*</span>
              </label>
              <input
                type="text"
                name="branch"
                placeholder="Enter Your Branch"
                value={formData.branch}
                onChange={handleChange}
                required
              />
              {errors.branch && <p className="error">{errors.branch}</p>}
              <label className="input-label">
                Percentage / CGPA <span className="required">*</span>
              </label>
              <input
                type="text"
                name="percentage"
                placeholder="Enter Your Percentage / CGPA"
                value={formData.percentage}
                onChange={handleChange}
                required
              />
              {errors.percentage && (
                <p className="error">{errors.percentage}</p>
              )}

              <label className="input-label">
                Internship Role <span className="required">*</span>
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="input"
              >
                <option value="">Select Internship Role</option>

                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && <p className="error">{errors.role}</p>}

              <label className="input-label">
                Upload Resume <span className="required">*</span>
              </label>
              <input 
                type="url" 
                name="resume" 
                placeholder="Enter your resume link" 
                value={formData.resume || ""} 
                onChange={handleChange}  />
              {errors.resume && <p className="error">{errors.resume}</p>}
              <label className="input-label">
                GitHub/Portfolio/LinkedIn Link
              </label>
              <input
                type="text"
                name="portfolio"
                placeholder="Enter GitHub/Portfolio/LinkedIn Link"
                value={formData.portfolio}
                onChange={handleChange}
              />

              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <label className="input-label">
                Country <span className="required">*</span>
              </label>
              <input
                type="text"
                name="country"
                placeholder="Enter Your Country"
                value={formData.country}
                onChange={handleChange}
                required
              />
              {errors.country && <p className="error">{errors.country}</p>}

              <label className="input-label">
                State <span className="required">*</span>
              </label>
              <input
                type="text"
                name="state"
                placeholder="Enter Your State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              {errors.state && <p className="error">{errors.state}</p>}

              <label className="input-label">
                City <span className="required">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Enter Your City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <p className="error">{errors.city}</p>}

              <label className="input-label">
                PinCode <span className="required">*</span>
              </label>
              <input
                type="text"
                name="pinCode"
                placeholder="Enter Your pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                required
              />
              {errors.pinCode && <p className="error">{errors.pinCode}</p>}

              <div className="consent-section" style={{ marginBottom: "20px" }}>
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="feeConsent"
                    checked={formData.feeConsent}
                    onChange={handleChange}
                  />
                  I agree the fee is non-refundable
                </label>
                {/* {errors.feeConsent && (
                  <p className="error">{errors.feeConsent}</p>
                )} */}

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="selectionConsent"
                    checked={formData.selectionConsent}
                    onChange={handleChange}
                  />
                  I agree selection is not guaranteed
                </label>
                {/* {errors.selectionConsent && (
                  <p className="error">{errors.selectionConsent}</p>
                )} */}

                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="contactConsent"
                    checked={formData.contactConsent}
                    onChange={handleChange}
                  />
                  I agree to be contacted via email/phone
                </label>
                {/* {errors.contactConsent && (
                  <p className="error">{errors.contactConsent}</p>
                )} */}
              </div>
              <div className="button-group">
                <button type="button" onClick={prevStep}>
                  Back
                </button>

                <button type="submit" disabled={loading}>
                  {loading ? "Processing..." : "Pay"}
                </button>
              </div>
            </>
          )}
        </form>
        {step === 4 && (
          <div className="msf-success" style={{ textAlign: "justify", padding: "10px" }}>
            <div className="msf-success-check" style={{ fontSize: "40px", color: "#22c55e", marginBottom: "20px" }}>✓</div>
            {/* <h2 style={{ color: "white" }}>Success!</h2> */}
            <p style={{ color: "#8b949e" ,fontSize: "13px"}}><span style={{ fontWeight: "bold" }}>Thanks</span> for submitting your application!</p>
            <p style={{ color: "#8b949e" ,fontSize: "13px"}}>Your application has been received successfully.</p>
            <p style={{ color: "#8b949e" ,fontSize: "13px"}}>Our team will connect with you shortly and share the next steps along with the payment link via email.</p>
            <button 
              className="msf-btn-primary" 
              style={{ marginTop: "20px", backgroundColor: "#6c757d" ,marginBottom: "20px"}}
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </button>
            <p style={{ color: "#ecec05",fontSize: "13px"}}>Please keep an eye on your spam folder</p>
          </div>
        )}
        <MemoizedDisclaimer />
      </div>

      {showPaymentModal && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%", height: "100%",
            backgroundColor: "rgba(0,0,0,0.80)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              backgroundColor: "#000000",
              padding: "44px 40px",
              borderRadius: "18px",
              width: "90%",
              maxWidth: "460px",
              boxShadow: "0 24px 70px rgba(0,0,0,0.9)",
              border: "1px solid rgba(255,255,255,0.15)",
              textAlign: "center",
            }}
          >
            <p style={{ color: "#ffffff", fontSize: "0.95rem", marginBottom: "6px", lineHeight: "1.65" }}>
              To complete your application, a one-time screening fee is required.
            </p>
            <p style={{ color: "#ffffff", fontSize: "0.83rem", marginBottom: "30px", lineHeight: "1.6" }}>
              By clicking <strong>Agree &amp; Pay</strong>, you confirm your agreement to pay <strong>Rs.350</strong> for the internship screening process.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <button
                onClick={() => setShowPaymentModal(false)}
                style={{
                  flex: 1, padding: "13px 20px",
                  backgroundColor: "transparent",
                  color: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.22)",
                  borderRadius: "9px", cursor: "pointer",
                  fontSize: "0.95rem", fontWeight: "500",
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
              >
                Cancel
              </button>
              <button
                onClick={handlePaymentAgree}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  flex: 1,                  
                  padding: "13px 20px", 
                  backgroundColor: "#22c55e",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9px",
                  fontSize: "0.95rem",  
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#16a34a")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#22c55e")}
              >
                ✓ Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MemoizedDisclaimer = memo(Disclaimer);

export default InternForm;
