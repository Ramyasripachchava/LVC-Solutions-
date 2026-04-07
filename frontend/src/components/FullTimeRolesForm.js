import { useState, useRef } from "react";
import "../styles/FullTimeRole.css";

const Field = ({ label, required, optional, error, children }) => (
  <div className="msf-field">
    <label className="msf-label">
      {label}
      {required && <span className="msf-req"> *</span>}
      {optional && <span className="msf-opt"> (Optional)</span>}
    </label>
    {children}
    {error && <span className="msf-err">{error}</span>}
  </div>
);

const Input = ({ error, ...props }) => (
  <input className={`msf-input${error ? " err" : ""}`} {...props} />
);

const SelectField = ({ error, children, ...props }) => (
  <div className="msf-select-wrap">
    <select className={`msf-select${error ? " err" : ""}`} {...props}>
      {children}
    </select>
  </div>
);

const Textarea = (props) => (
  <textarea className="msf-textarea" {...props} />
);

const FullTimeRolesForm = () => {
  const TOTAL = 4;
  const [step, setStep] = useState(1);

  const [p1, setP1] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    phone: "",
    email: "",
    dob: "",
    citizenship: "",
    country: "",
    street: "",
    city: "",
    state: "",
  });
  const [p1Err, setP1Err] = useState({});

  const [eduEntries, setEduEntries] = useState([]);
  const [eduForm, setEduForm] = useState({
    open: false,
    degree: "",
    institution: "",
    gradYear: "",
  });

  const [workEntries, setWorkEntries] = useState([]);
  const [workForm, setWorkForm] = useState({
    open: false,
    jobTitle: "",
    company: "",
    expType: "",
    period: "",
    desc: "",
  });

  const [resume, setResume] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("");
  const [workLoc, setWorkLoc] = useState("");
  const [locInput, setLocInput] = useState("");
  const [locations, setLocations] = useState([]);
  const [p4Err, setP4Err] = useState({});

  const resumeRef = useRef(null);
  const profileRef = useRef(null);
  const skillInputRef = useRef(null);

  const barWidth = (i) => (i < step ? "100%" : "0%");

  function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 4 && !validateStep4()) return;
    if (step < TOTAL) {
      setStep((s) => s + 1);
    } else {
      setStep(5);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goBack() {
    if (step > 1) {
      setStep((s) => s - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function validateStep1() {
    const required = [
      "firstName", "lastName", "phone", "dob",
      "citizenship", "country", "street", "city", "state",
    ];
    const errs = {};
    required.forEach((k) => {
      if (!p1[k].trim()) errs[k] = "Required";
    });
    setP1Err(errs);
    return Object.keys(errs).length === 0;
  }

  function validateStep4() {
    const errs = {};
    if (!resume) errs.resume = "Please upload your resume";
    if (skills.length < 3) errs.skills = "Please add at least 3 skills";
    if (!jobTitle.trim()) errs.jobTitle = "Required";
    setP4Err(errs);
    return Object.keys(errs).length === 0;
  }

  function saveEdu() {
    const { degree, institution, gradYear } = eduForm;
    if (!degree && !institution && !gradYear) return;
    setEduEntries((prev) => [
      ...prev,
      { id: Date.now(), degree, institution, gradYear },
    ]);
    setEduForm({ open: false, degree: "", institution: "", gradYear: "" });
  }

  function removeEdu(id) {
    setEduEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function saveWork() {
    const { jobTitle: wt, company } = workForm;
    if (!wt && !company) return;
    setWorkEntries((prev) => [
      ...prev,
      { id: Date.now(), ...workForm },
    ]);
    setWorkForm({
      open: false,
      jobTitle: "",
      company: "",
      expType: "",
      period: "",
      desc: "",
    });
  }

  function removeWork(id) {
    setWorkEntries((prev) => prev.filter((e) => e.id !== id));
  }


  function handleSkillKey(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const val = skillInput.trim().replace(/,$/, "");
      if (val && !skills.includes(val)) {
        const next = [...skills, val];
        setSkills(next);
        if (next.length >= 3) {
          setP4Err((prev) => ({ ...prev, skills: undefined }));
        }
      }
      setSkillInput("");
    }
  }

  function removeSkill(s) {
    setSkills((prev) => prev.filter((x) => x !== s));
  }


  function addLocation() {
    const val = locInput.trim();
    if (val && !locations.includes(val)) {
      setLocations((prev) => [...prev, val]);
      setLocInput("");
    }
  }

  function removeLocation(l) {
    setLocations((prev) => prev.filter((x) => x !== l));
  }

  function handleResume(e) {
    const f = e.target.files[0];
    if (f) {
      setResume(f);
      setP4Err((prev) => ({ ...prev, resume: undefined }));
    }
  }

  function handleProfile(e) {
    const f = e.target.files[0];
    if (f) setProfilePic(f);
  }

  return (
    <div className="msf-wrap">
      <div className="msf-card">
        {step <= TOTAL && (
          <div className="msf-progress">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="msf-bar">
                <div className="msf-bar-fill" style={{ width: barWidth(i) }} />
              </div>
            ))}
            <span className="msf-step-label">Step {step} of {TOTAL}</span>
          </div>
        )}

        {step === 1 && (
          <>
            <div className="msf-header">
              <h1>Personal Information</h1>
            </div>

            <div className="msf-section msf-section-first">Personal Information</div>

            <div className="msf-row2">
              <Field label="First Name" required error={p1Err.firstName}>
                <Input
                  value={p1.firstName}
                  error={p1Err.firstName}
                  placeholder="First name"
                  onChange={(e) => setP1((p) => ({ ...p, firstName: e.target.value }))}
                />
              </Field>
              <Field label="Last Name" required error={p1Err.lastName}>
                <Input
                  value={p1.lastName}
                  error={p1Err.lastName}
                  placeholder="Last name"
                  onChange={(e) => setP1((p) => ({ ...p, lastName: e.target.value }))}
                />
              </Field>
            </div>

            <Field label="Middle Name" optional>
              <Input
                value={p1.middleName}
                placeholder="(Optional)"
                onChange={(e) => setP1((p) => ({ ...p, middleName: e.target.value }))}
              />
            </Field>

            <Field label="Phone Number" required error={p1Err.phone}>
              <Input
                type="tel"
                value={p1.phone}
                error={p1Err.phone}
                placeholder="Phone number"
                onChange={(e) => setP1((p) => ({ ...p, phone: e.target.value }))}
              />
            </Field>

            <Field label="Email Address">
              <Input
                type="email"
                value={p1.email}
                placeholder="Email address"
                onChange={(e) => setP1((p) => ({ ...p, email: e.target.value }))}
              />
            </Field>

            <div className="msf-row2">
              <Field label="Date of Birth" required error={p1Err.dob}>
                <Input
                  value={p1.dob}
                  error={p1Err.dob}
                  placeholder="DD/MM/YYYY"
                  onChange={(e) => setP1((p) => ({ ...p, dob: e.target.value }))}
                />
              </Field>
              <Field label="Citizenship" required error={p1Err.citizenship}>
                <SelectField
                  value={p1.citizenship}
                  error={p1Err.citizenship}
                  onChange={(e) => setP1((p) => ({ ...p, citizenship: e.target.value }))}
                >
                  <option value="">Select</option>
                  <option value="citizen">Citizen</option>
                  <option value="pr">Permanent Resident</option>
                  <option value="visa">Visa Holder</option>
                  <option value="other">Other</option>
                </SelectField>
              </Field>
            </div>

            <Field label="Country" required error={p1Err.country}>
              <SelectField
                value={p1.country}
                error={p1Err.country}
                onChange={(e) => setP1((p) => ({ ...p, country: e.target.value }))}
              >
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </SelectField>
            </Field>

            <div className="msf-section">Address</div>

            <Field label="Street Address" required error={p1Err.street}>
              <Input
                value={p1.street}
                error={p1Err.street}
                placeholder="Street address"
                onChange={(e) => setP1((p) => ({ ...p, street: e.target.value }))}
              />
            </Field>

            <div className="msf-row2">
              <Field label="City" required error={p1Err.city}>
                <Input
                  value={p1.city}
                  error={p1Err.city}
                  placeholder="City"
                  onChange={(e) => setP1((p) => ({ ...p, city: e.target.value }))}
                />
              </Field>
              <Field label="State" required error={p1Err.state}>
                <Input
                  value={p1.state}
                  error={p1Err.state}
                  placeholder="State"
                  onChange={(e) => setP1((p) => ({ ...p, state: e.target.value }))}
                />
              </Field>
            </div>

            <button className="msf-btn-primary" onClick={goNext}>
              Continue
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="msf-header">
              <h1>Education</h1>
              <p>Add your educational background</p>
            </div>

            {eduEntries.map((entry) => (
              <div key={entry.id} className="msf-chip">
                <div>
                  <div className="msf-chip-title">{entry.degree || "—"}</div>
                  <div className="msf-chip-sub">
                    {entry.institution}
                    {entry.gradYear ? ` · ${entry.gradYear}` : ""}
                  </div>
                </div>
                <button className="msf-chip-remove" onClick={() => removeEdu(entry.id)}>
                  ✕
                </button>
              </div>
            ))}

            {/* Add Education button */}
            {!eduForm.open && (
              <button
                className="msf-btn-add-entry"
                onClick={() => setEduForm((f) => ({ ...f, open: true }))}
              >
                + Add Education
              </button>
            )}

            {/* Inline education form */}
            {eduForm.open && (
              <div className="msf-form-box">
                <div className="msf-form-box-title">Add Education</div>
                <Field label="Degree / Major">
                  <Input
                    value={eduForm.degree}
                    placeholder="e.g. BS Computer Science"
                    onChange={(e) =>
                      setEduForm((f) => ({ ...f, degree: e.target.value }))
                    }
                  />
                </Field>
                <Field label="University / Institution">
                  <Input
                    value={eduForm.institution}
                    placeholder="e.g. Stanford University"
                    onChange={(e) =>
                      setEduForm((f) => ({ ...f, institution: e.target.value }))
                    }
                  />
                </Field>
                <Field label="Graduation Year">
                  <Input
                    value={eduForm.gradYear}
                    placeholder="e.g. 2023"
                    onChange={(e) =>
                      setEduForm((f) => ({ ...f, gradYear: e.target.value }))
                    }
                  />
                </Field>
                <div className="msf-form-btn-row">
                  <button
                    className="msf-btn-cancel"
                    onClick={() =>
                      setEduForm({
                        open: false,
                        degree: "",
                        institution: "",
                        gradYear: "",
                      })
                    }
                  >
                    Cancel
                  </button>
                  <button className="msf-btn-add" onClick={saveEdu}>
                    Add
                  </button>
                </div>
              </div>
            )}

            <div className="msf-btn-row">
              <button className="msf-btn-back" onClick={goBack}>
                Back
              </button>
              <button
                className="msf-btn-primary"
                style={{ marginTop: 0 }}
                onClick={goNext}
              >
                Skip
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="msf-header">
              <h1>Work Experience</h1>
              <p>Add your professional experience</p>
            </div>

            {workEntries.map((entry) => (
              <div key={entry.id} className="msf-chip">
                <div>
                  <div className="msf-chip-title">
                    {entry.jobTitle || "—"}
                    {entry.expType && (
                      <span className="msf-chip-type"> · {entry.expType}</span>
                    )}
                  </div>
                  <div className="msf-chip-sub">
                    {entry.company}
                    {entry.period ? ` · ${entry.period}` : ""}
                  </div>
                </div>
                <button
                  className="msf-chip-remove"
                  onClick={() => removeWork(entry.id)}
                >
                  ✕
                </button>
              </div>
            ))}

            {!workForm.open && (
              <button
                className="msf-btn-add-entry"
                onClick={() => setWorkForm((f) => ({ ...f, open: true }))}
              >
                + Add Experience
              </button>
            )}

            {workForm.open && (
              <div className="msf-form-box">
                <div className="msf-form-box-title">Add Role</div>
                <Field label="Job Title">
                  <Input
                    value={workForm.jobTitle}
                    placeholder="e.g. Software Engineer"
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, jobTitle: e.target.value }))
                    }
                  />
                </Field>
                <Field label="Company">
                  <Input
                    value={workForm.company}
                    placeholder="e.g. Google"
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, company: e.target.value }))
                    }
                  />
                </Field>
                <Field label="Experience type">
                  <SelectField
                    value={workForm.expType}
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, expType: e.target.value }))
                    }
                  >
                    <option value="">Select</option>
                    <option value="full-time">full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="contract">contract</option>
                    <option value="internship">internship</option>
                  </SelectField>
                </Field>
                <Field label="Period">
                  <Input
                    value={workForm.period}
                    placeholder="e.g. 2020 - Present"
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, period: e.target.value }))
                    }
                  />
                </Field>
                <Field label="Description">
                  <Textarea
                    value={workForm.desc}
                    placeholder="Brief description of your role..."
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, desc: e.target.value }))
                    }
                  />
                </Field>
                <div className="msf-form-btn-row">
                  <button
                    className="msf-btn-cancel"
                    onClick={() =>
                      setWorkForm({
                        open: false,
                        jobTitle: "",
                        company: "",
                        expType: "",
                        period: "",
                        desc: "",
                      })
                    }
                  >
                    Cancel
                  </button>
                  <button className="msf-btn-add" onClick={saveWork}>
                    Add
                  </button>
                </div>
              </div>
            )}

            <div className="msf-btn-row">
              <button className="msf-btn-back" onClick={goBack}>
                Back
              </button>
              <button
                className="msf-btn-primary"
                style={{ marginTop: 0 }}
                onClick={goNext}
              >
                Skip
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className="msf-header">
              <h1>Career Preferences</h1>
              <p>Help us match you with the right opportunities</p>
            </div>

            <div className="msf-section msf-section-first">Documents</div>

            {/* Resume upload */}
            <Field label="Resume" required error={p4Err.resume}>
              <input
                type="file"
                accept=".pdf"
                ref={resumeRef}
                style={{ display: "none" }}
                onChange={handleResume}
              />
              <button
                type="button"
                className={`msf-upload${resume ? " has-file" : ""}`}
                onClick={() => resumeRef.current && resumeRef.current.click()}
              >
                <span style={{ fontSize: 22 }}>⬆</span>
                <span>{resume ? `✓ ${resume.name}` : "Upload Resume (PDF)"}</span>
              </button>
            </Field>

            <Field label="Profile Image" optional>
              <input
                type="file"
                accept="image/*"
                ref={profileRef}
                style={{ display: "none" }}
                onChange={handleProfile}
              />
              <button
                type="button"
                className={`msf-upload${profilePic ? " has-file" : ""}`}
                onClick={() => profileRef.current && profileRef.current.click()}
              >
                <span>
                  {profilePic ? `✓ ${profilePic.name}` : "Upload Profile Picture"}
                </span>
              </button>
            </Field>

            <div className="msf-section">Preferences</div>

            <div className="msf-field">
              <label className="msf-label">
                Skills <span className="msf-req">*</span>
                <span className="msf-opt"> (Min 3 required)</span>
              </label>
              <div
                className={`msf-skills-wrap${p4Err.skills ? " err" : ""}`}
                onClick={() => skillInputRef.current && skillInputRef.current.focus()}
              >
                {skills.map((s) => (
                  <span key={s} className="msf-skill-tag">
                    {s}
                    <button type="button" onClick={() => removeSkill(s)}>×</button>
                  </span>
                ))}
                <input
                  ref={skillInputRef}
                  className="msf-skills-input"
                  value={skillInput}
                  placeholder="Type to search or add skills..."
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillKey}
                />
              </div>
              {p4Err.skills && <span className="msf-err">{p4Err.skills}</span>}
            </div>

            <Field label="Desired Job Title" required error={p4Err.jobTitle}>
              <Input
                value={jobTitle}
                error={p4Err.jobTitle}
                placeholder="e.g. Software Engineer"
                onChange={(e) => {
                  setJobTitle(e.target.value);
                  setP4Err((p) => ({ ...p, jobTitle: undefined }));
                }}
              />
            </Field>

            <Field label="Expected Salary (Annual)">
              <Input
                type="number"
                value={salary}
                placeholder="0"
                min="0"
                onChange={(e) => setSalary(e.target.value)}
              />
            </Field>

            <Field label="Job Type">
              <div className="msf-radio-grid">
                {["Full time", "Part time", "Contract", "Internship"].map((opt) => (
                  <div
                    key={opt}
                    className={`msf-radio-option${jobType === opt ? " selected" : ""}`}
                    onClick={() => setJobType(opt)}
                  >
                    <span className="msf-radio-circle" />
                    {opt}
                  </div>
                ))}
              </div>
            </Field>

            <Field label="Preferred Work Location">
              <div className="msf-radio-grid">
                {["Remote", "On site", "Hybrid"].map((opt) => (
                  <div
                    key={opt}
                    className={`msf-radio-option${workLoc === opt ? " selected" : ""}`}
                    onClick={() => setWorkLoc(opt)}
                    style={opt === "Hybrid" ? { gridColumn: "1" } : {}}
                  >
                    <span className="msf-radio-circle" />
                    {opt}
                  </div>
                ))}
              </div>
            </Field>

            <Field label="Preferred Locations">
              <div className="msf-loc-row">
                <input
                  className="msf-input"
                  value={locInput}
                  placeholder="Add location (e.g. New York)"
                  onChange={(e) => setLocInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addLocation();
                    }
                  }}
                />
                <button type="button" className="msf-btn-plus" onClick={addLocation}>
                  +
                </button>
              </div>
              {locations.length > 0 && (
                <div className="msf-loc-tags">
                  {locations.map((l) => (
                    <span key={l} className="msf-loc-tag">
                      {l}
                      <button type="button" onClick={() => removeLocation(l)}>×</button>
                    </span>
                  ))}
                </div>
              )}
            </Field>

            <div className="msf-btn-row">
              <button className="msf-btn-back" onClick={goBack}>
                Back
              </button>
              <button
                className="msf-btn-primary"
                style={{ marginTop: 0 }}
                onClick={goNext}
              >
                Complete Registration
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}

export default FullTimeRolesForm;