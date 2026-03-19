import { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../style.css';

const ApplicationForm = ({ isOpen, onClose, position }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    resumeLink: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_v26d5ek',
        'template_userapp123',
        {
          position: position,
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          resumeLink: formData.resumeLink
        },
        'VjiNxxhKhuMMSekpT'
      )
        .then((response) => {
    console.log('Email sent successfully!', response.status, response.text);
  }, (error) => {
    console.error('Failed to send email:', error);
  });

      alert('Application submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        resumeLink: ''
      });
      onClose();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Apply for {position}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              required
              value={formData.firstName}
              onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              required
              value={formData.lastName}
              onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Resume Submission</label>
            <p className="email-instruction">
              📩 <strong>Email your resume to: </strong>
              <a href="mailto:hrmanager@lvc-solutions.com">hrmanager@lvc-solutions.com</a>
            </p>
            <p className="divider-text">OR</p>
            <input
              type="url"
              placeholder="Paste your Google Drive resume link here"
              value={formData.resumeLink}
              onChange={(e) => setFormData({...formData, resumeLink: e.target.value})}
            />
            <small className="form-text warning-text">
              ⚠️ Ensure your resume is <strong>publicly accessible</strong> or shared with HR
            </small>
          </div>
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary-whatwedo"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
