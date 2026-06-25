import { useState, useRef, memo } from "react";
import "../styles/FullTimeRole.css";

const Field = memo(({ label, required, optional, error, children }) => (
  <div className="msf-field">
    <label className="msf-label">
      {label}
      {required && <span className="msf-req"> *</span>}
      {optional && <span className="msf-opt"> (Optional)</span>}
    </label>
    {children}
    {error && <span className="msf-err">{error}</span>}
  </div>
));

const Input = memo(({ error, ...props }) => (
  <input className={`msf-input${error ? " err" : ""}`} {...props} />
));

const SelectField = memo(({ error, children, ...props }) => (
  <div className="msf-select-wrap">
    <select className={`msf-select${error ? " err" : ""}`} {...props}>
      {children}
    </select>
  </div>
));

const Textarea = memo((props) => (
  <textarea className="msf-textarea" {...props} />
));

const SUBMIT_URL = `${process.env.REACT_APP_BASE_URL || ""}/api/fulltime-applications/submit-fulltime`;

const FullTimeRolesForm = () => {
  const TOTAL = 4;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

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
    id: null,
    degree: "",
    institution: "",
    gradYear: "",
  });

  const [workEntries, setWorkEntries] = useState([]);
  const [workForm, setWorkForm] = useState({
    open: false,
    id: null,
    jobTitle: "",
    company: "",
    expType: "",
    period: "",
    desc: "",
  });

  const [resume, setResume] = useState("");
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
  const [eduErr, setEduErr] = useState("");
  const [workErr, setWorkErr] = useState("");

  // const resumeRef = useRef(null);
  const profileRef = useRef(null);

  // const barWidth = (i) => (i < step ? "100%" : "0%");
  // const barWidth = (i) => (i <= step - 1 ? "100%" : "0%");

  async function goNext() {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    if (step === 3 && !validateStep3()) return;
    if (step === 4 && !validateStep4()) return;
    if (step < TOTAL) {
      setStep((s) => s + 1);
    } else {
      await handleSubmit();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (loading) return;
    setLoading(true);
    try {
      // Flatten data for easier spreadsheet storage
      const payload = {
        firstName: p1.firstName,
        lastName: p1.lastName,
        phone: p1.phone,
        email: p1.email,
        dob: p1.dob,
        citizenship: p1.citizenship,
        country: p1.country,
        address: p1.street,
        city: p1.city,
        state: p1.state,
        resume: resume,
        skills: skills.join(", "),
        desiredJobTitle: jobTitle,
        education: JSON.stringify(eduEntries),
        workExperience: JSON.stringify(workEntries),
      };

      const response = await fetch(SUBMIT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Server responded with an error status");
      }

      setStep(5);
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
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
    if (p1.phone && p1.phone.length < 10) {
      errs.phone = "Phone number must be at least 10 digits";
    }
    const emailValue = p1.email.toLowerCase();
    if (emailValue && !emailValue.endsWith("@gmail.com")) {
      errs.email = "Must be a valid @gmail.com address";
    }
    setP1Err(errs);
    return Object.keys(errs).length === 0;
  }

  function handleResume(e) {
  // Use e.target.value for text/URL inputs
  const link = e.target.value; 
  setResume(link);
  
  // Clear error message if user has typed something
  if (link.trim()) {
    setP4Err((prev) => ({ ...prev, resume: undefined }));
  }
}
  function validateStep2() {
    if (eduEntries.length === 0) {
      setEduErr("Please add at least one education entry.");
      return false;
    }
    setEduErr("");
    return true;
  }

  function validateStep3() {
    if (workEntries.length === 0) {
      setWorkErr("Please add at least one work experience entry.");
      return false;
    }
    setWorkErr("");
    return true;
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
    const { degree, institution, gradYear, id } = eduForm;
    if (!degree.trim() || !institution.trim() || !gradYear.trim()){
      setEduErr("All education fields are required.");
      return;
    }
    if (id) {
      // Update existing
      setEduEntries((prev) =>
        prev.map((e) => (e.id === id ? { ...e, degree, institution, gradYear } : e))
      );
    } else {
      // Add new
      setEduEntries((prev) => [
        ...prev,
        { id: Date.now(), degree, institution, gradYear },
      ]);
    }
    setEduForm({ open: false, id: null, degree: "", institution: "", gradYear: "" });
    setEduErr("");
  }

  function editEdu(entry) {
    setEduForm({
      open: true,
      id: entry.id,
      degree: entry.degree,
      institution: entry.institution,
      gradYear: entry.gradYear
    });
  }

  function removeEdu(id) {
    setEduEntries((prev) => prev.filter((e) => e.id !== id));
  }

  function saveWork() {
    const { jobTitle, company, expType, period, desc, id} = workForm;
    // if (!jobTitle && !company) return;
    if (
      !jobTitle.trim() || !company.trim() || !expType.trim() || !period.trim() || !desc.trim()) {
      setWorkErr("All work experience fields are required.");
      return;
    }
    if (id) {
      // Update existing
      setWorkEntries((prev) =>
        prev.map((w) => (w.id === id ? { ...w, ...workForm } : w))
      );
    } else {
      // Add new
      setWorkEntries((prev) => [
        ...prev,
        { id: Date.now(), ...workForm },
      ]);
    }
    setWorkForm({
      open: false,
      id: null,
      jobTitle: "",
      company: "",
      expType: "",
      period: "",
      desc: "",
    });
    setWorkErr("");
  }

  function editWork(entry) {
    setWorkForm({
      ...entry,
      open: true
    });
  }

  function removeWork(id) {
    setWorkEntries((prev) => prev.filter((e) => e.id !== id));
  }


  function handleSkillKey(e) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addSkill();
    }
  }

  function addSkill() {
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
  const filterAlphabets = (val) => val.replace(/[^a-zA-Z\s]/g, "");
  const filterNumbers = (val) => val.replace(/\D/g, "");
  function removeLocation(l) {
    setLocations((prev) => prev.filter((x) => x !== l));
  }

  function handleProfile(e) {
    const f = e.target.files[0];
    if (f) setProfilePic(f);
  }

  return (
    <div className="msf-wrap">
     <div style={{ width: "100%", maxWidth: "540px" }}> 
      <div className="msf-card">
        {step <= TOTAL && (
          <div className="msf-progress">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="msf-bar">
                <div
                  className="msf-bar-fill"
                  style={{
                    width: i <= step - 1 ? "100%" : "0%",
                    height: "5px",
                    background: "#ffffff",
                    display: "block",
                  }}
                />
              </div>
            ))}
            <span className="msf-step-label">Step {step} of {TOTAL}</span>
          </div>
        )}

        {step === 1 && (
          <>
            <div className="msf-header mt-10">
              <h1>
                {step === 5 ? "Application Submitted" : "Personal Information"}
              </h1>
            </div>

            <div className="msf-section msf-section-first">Personal Information</div>

            <div className="msf-row2">
              <Field label="First Name" required error={p1Err.firstName}>
                <Input
                  value={p1.firstName}
                  error={p1Err.firstName}
                  placeholder="First name"
                  onChange={(e) => setP1((p) => ({ ...p, firstName: filterAlphabets(e.target.value) }))}
                />
              </Field>
              <Field label="Last Name" required error={p1Err.lastName}>
                <Input
                  value={p1.lastName}
                  error={p1Err.lastName}
                  placeholder="Last name"
                  onChange={(e) => setP1((p) => ({ ...p, lastName: filterAlphabets(e.target.value) }))}
                />
              </Field>
            </div>

            <Field label="Middle Name" optional>
              <Input
                value={p1.middleName}
                placeholder="(Optional)"
                onChange={(e) => setP1((p) => ({ ...p, middleName: filterAlphabets(e.target.value) }))}
              />
            </Field>

            <Field label="Phone Number" required error={p1Err.phone}>
              <Input
                type="tel"
                value={p1.phone}
                error={p1Err.phone}
                placeholder="Phone number"
                maxLength={15}
                onChange={(e) =>
                  setP1((p) => ({
                    ...p,
                    phone: filterNumbers(e.target.value).slice(0, 15),
                  }))
                }
              />
            </Field>

            <Field label="Email Address" required error={p1Err.email}>
              <Input
                type="email"
                value={p1.email}
                error={p1Err.email}
                placeholder="yourname@gmail.com"
                onChange={(e) => {
                  const val = e.target.value;
                  setP1((p) => ({ ...p, email: val }));
                  
                  // Optional: Clear the error as soon as they fix the suffix
                  if (val.toLowerCase().endsWith("@gmail.com")) {
                    setP1Err((prev) => ({ ...prev, email: undefined }));
                  }
                }}
              />
            </Field>

            <div className="msf-row2">
              <Field label="Date of Birth" required error={p1Err.dob}>
                <Input
                  type="date"
                  value={p1.dob}
                  error={p1Err.dob}
                  onChange={(e) => setP1((prev) => ({ 
                    ...prev, 
                    dob: e.target.value 
                  }))}
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
                  onChange={(e) => setP1((prev) => ({ 
                    ...prev, 
                    city: filterAlphabets(e.target.value) 
                  }))}
                />
              </Field>
              <Field label="State" required error={p1Err.state}>
                <Input
                  value={p1.state}
                  error={p1Err.state}
                  placeholder="State"
                  onChange={(e) => setP1((prev) => ({ 
                    ...prev, 
                    state: filterAlphabets(e.target.value) 
                  }))}
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
              <h1>Education <span className="msf-req">*</span></h1>
              <p>Add your educational background</p>
            </div>

            {eduErr && <div className="msf-err" style={{ marginBottom: "15px", display: "block" }}>{eduErr}</div>}

            {eduEntries.map((entry) => (
              <div key={entry.id} className="msf-chip">
                <div className="msf-chip-content">
                  <div className="msf-chip-title">{entry.degree || "—"}</div>
                  <div className="msf-chip-sub">
                    {entry.institution}
                    {entry.gradYear ? ` · ${entry.gradYear}` : ""}
                  </div>
                </div>
                <div className="msf-chip-actions">
                  <button className="msf-chip-btn edit" onClick={() => editEdu(entry)}>
                    ✎
                  </button>
                  <button className="msf-chip-btn remove" onClick={() => removeEdu(entry.id)}>
                    ✕
                  </button>
                </div>
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
                <Field label="Degree / Major" required>
                  <Input
                        value={eduForm.degree}
                        placeholder="Enter your degree"
                        onChange={(e) => setEduForm((prev) => ({ 
                          ...prev, 
                          degree: filterAlphabets(e.target.value) 
                        }))}
                  />
                </Field>
                <Field label="University / Institution" required>
                  <Input
                    value={eduForm.institution}
                    placeholder="e.g. Stanford University"
                    onChange={(e) => setEduForm((prev) => ({ 
                      ...prev, 
                      institution: filterAlphabets(e.target.value) 
                    }))}
                  />
                </Field>
                <Field label="Graduation Year" required>
                  <Input
                    value={eduForm.gradYear}
                    placeholder="e.g. 2023"
                    onChange={(e) => setEduForm((f) => ({ ...f, gradYear: filterNumbers(e.target.value) }))}
                  />
                </Field>
                <div className="msf-form-btn-row">
                  <button
                    className="msf-btn-cancel"
                    onClick={() =>
                      setEduForm({
                        open: false,
                        id: null,
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
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div className="msf-header">
              <h1>Work Experience <span className="msf-req">*</span></h1>
              <p>Add your professional experience</p>
            </div>

            {workErr && <div className="msf-err" style={{ marginBottom: "15px", display: "block" }}>{workErr}</div>}

            {workEntries.map((entry) => (
              <div key={entry.id} className="msf-chip">
                <div className="msf-chip-content">
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
                <div className="msf-chip-actions">
                  <button className="msf-chip-btn edit" onClick={() => editWork(entry)}>
                    ✎
                  </button>
                  <button className="msf-chip-btn remove" onClick={() => removeWork(entry.id)}>
                    ✕
                  </button>
                </div>
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
                <Field label="Job Title" required>
                  <Input
                    value={workForm.jobTitle}
                    placeholder="e.g. Software Engineer"
                    onChange={(e) => setWorkForm((prev) => ({ 
                      ...prev, 
                      jobTitle: filterAlphabets(e.target.value) 
                    }))}
                  />
                </Field>
                <Field label="Company" required>
                  <Input
                    value={workForm.company}
                    placeholder="e.g. Google"
                    onChange={(e) => setWorkForm((prev) => ({ 
                      ...prev, 
                      company: filterAlphabets(e.target.value) 
                    }))}
                  />
                </Field>
                <Field label="Experience type" required>
                  <SelectField
                    value={workForm.expType}
                    onChange={(e) => setWorkForm((prev) => ({ 
                      ...prev, 
                      expType: e.target.value 
                    }))}
                  >
                    <option value="">Select</option>
                    <option value="full-time">full-time</option>
                    <option value="part-time">part-time</option>
                    <option value="contract">contract</option>
                    <option value="internship">internship</option>
                  </SelectField>
                </Field>
                <Field label="Period" required>
                  <Input
                    value={workForm.period}
                    placeholder="e.g. 2020 - Present"
                    onChange={(e) =>
                      setWorkForm((f) => ({ ...f, period: filterNumbers(e.target.value) }))
                    }
                  />
                </Field>
                <Field label="Description" required>
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
                        id: null,
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
                Next
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
                type="url"
                placeholder="Enter your resume link"
                onChange={handleResume}
              />
              {/* <button
                type="button"
                className={`msf-upload${resume ? " has-file" : ""}`}
                onClick={() => resumeRef.current && resumeRef.current.click()}
              >
                <span style={{ fontSize: 22 }}>⬆</span>
                <span>{resume ? `✓ ${resume.name}` : "Upload Resume (PDF)"}</span>
              </button>  */}
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
              
              <div className="msf-loc-row">
                <Input
                  value={skillInput}
                  placeholder="Type skill name..."
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillKey}
                  error={p4Err.skills}
                />
                <button type="button" className="msf-btn-plus" onClick={addSkill}>
                  +
                </button>
              </div>

              {skills.length > 0 && (
                <div className="msf-loc-tags" style={{ marginTop: "10px" }}>
                  {skills.map((s) => (
                    <span key={s} className="msf-skill-tag">
                      {s}
                      <button type="button" onClick={() => removeSkill(s)}>×</button>
                    </span>
                  ))}
                </div>
              )}
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
                disabled={loading}
              >
                {loading ? "Processing..." : "Complete Registration"}
              </button>
            </div>
          </>
        )}

        {step === 5 && (
          <div className="msf-success" style={{ textAlign: "center", padding: "20px" }}>
            <div className="msf-success-check" style={{ fontSize: "50px", color: "#22c55e", marginBottom: "20px" }}>✓</div>
            {/* <h2 style={{ color: "white" }}>Success!</h2> */}
            <p style={{ color: "#8b949e" }}><span style={{ fontWeight: "bold" }}>Thanks</span> for submitting your application!</p>
            <p style={{ color: "#8b949e" }}>Your application has been received successfully.</p>
            <button
              className="msf-btn-primary" 
              style={{ marginTop: "20px", backgroundColor: "#6c757d",marginBottom: "20px" }}
              onClick={() => window.location.href = "/"}
            >
              Back to Home
            </button>
            <p style={{ color: "#ecec05"}}>Please keep an eye on your spam folder</p>
          </div>
        )}

      </div>
      </div>
    </div>
  );
}

export default FullTimeRolesForm;