import React from "react";
import { ShieldCheck } from "lucide-react";

const Disclaimer = () => {
  return (
    <div className="privacy-box">
      <ShieldCheck size={18} className="privacy-icon" />

      <p>
        <span className="privacy-title">
          PRIVACY ASSURANCE:
        </span>{" "}
        We respect your privacy. Your professional details are secured
        and used ONLY for evaluating your internship application.
        We never share or sell your data to third parties without
        your explicit consent.
      </p>
    </div>
  );
};

export default Disclaimer;