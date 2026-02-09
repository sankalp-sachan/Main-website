import React, { useState, useContext, useEffect } from 'react';
import { Send, CheckCircle, X, AlertCircle } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const RegistrationModal = ({ isOpen, onClose, category }) => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    enrollmentNo: '',
    phone: '',
    department: '',
    year: '',
    course: '',
    linkedin: '',
    githubLink: ''
  });

  const [submitted, setSubmitted] = useState(false); 
  const [apiError, setApiError] = useState(''); 
  const [errors, setErrors] = useState({}); 

  useEffect(() => {
    if (user && isOpen) {
      setFormData(prev => ({
        ...prev,
        fullName: user.name || '',
        email: user.email || ''
      }));
    }
  }, [user, isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    let newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.enrollmentNo) newErrors.enrollmentNo = "Enrollment No is required";
    if (!formData.phone) newErrors.phone = "Mobile No is required";
    if (!formData.department) newErrors.department = "Department is required";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.course) newErrors.course = "Course is required";
    if (!formData.linkedin) newErrors.linkedin = "LinkedIn Profile is required";

    if (category === 'WEB Hackathon' && !formData.githubLink) {
      newErrors.githubLink = "GitHub Profile Link is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiError('');

    if (validate()) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };

        const payload = {
          ...formData,
          category,
          experienceLevel: 'Intermediate' 
        };

        payload.college = "TechFest Host College";
        payload.college = "TechFest Host College";

        await axios.post('http://localhost:5000/api/register', payload, config);

        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({
            fullName: user?.name || '',
            email: user?.email || '',
            enrollmentNo: '', phone: '', department: '', year: '', course: '', linkedin: '', githubLink: ''
          });
        }, 3000);

      } catch (err) {
        setApiError(err.response?.data?.message || "Registration failed. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content glass">
        <button className="modal-close" onClick={onClose}><X size={24} /></button>

        <div className="modal-header">
          <h2 className="gradient-text">Register for {category}</h2>
          <p>Provide your details to participate.</p>
        </div>

        {apiError && (
          <div className="error-banner">
            <AlertCircle size={16} /> {apiError}
          </div>
        )}

        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={errors.fullName ? 'error' : ''}
                readOnly // Make name read-only if you want to enforce profile name
              />
              {errors.fullName && <span className="error-text">{errors.fullName}</span>}
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                readOnly // Make email read-only to ensure it matches login
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label>Enrollment No</label>
              <input
                type="text"
                name="enrollmentNo"
                placeholder="Enrollment Number"
                value={formData.enrollmentNo}
                onChange={handleChange}
                className={errors.enrollmentNo ? 'error' : ''}
              />
              {errors.enrollmentNo && <span className="error-text">{errors.enrollmentNo}</span>}
            </div>

            <div className="form-group">
              <label>Mobile No</label>
              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label>Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={errors.course ? 'error' : ''}
              >
                <option value="">Select Course</option>
                <option value="B.Tech">B.Tech</option>
                <option value="BCA">BCA</option>
                <option value="B.Sc">B.Sc</option>
              </select>
              {errors.course && <span className="error-text">{errors.course}</span>}
            </div>

            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                placeholder="CSE"
                value={formData.department}
                onChange={handleChange}
                className={errors.department ? 'error' : ''}
              />
              {errors.department && <span className="error-text">{errors.department}</span>}
            </div>

            <div className="form-group">
              <label>Year</label>
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={errors.year ? 'error' : ''}
              >
                <option value="">Select Year</option>
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year">3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
              {errors.year && <span className="error-text">{errors.year}</span>}
            </div>

            <div className="form-group">
              <label>LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/in/username"
                value={formData.linkedin}
                onChange={handleChange}
                className={errors.linkedin ? 'error' : ''}
              />
              {errors.linkedin && <span className="error-text">{errors.linkedin}</span>}
            </div>

            {category === 'WEB Hackathon' && (
              <div className="form-group full-width">
                <label>GitHub Profile Link</label>
                <input
                  type="url"
                  name="githubLink"
                  placeholder="https://github.com/username"
                  value={formData.githubLink}
                  onChange={handleChange}
                  className={errors.githubLink ? 'error' : ''}
                />
                {errors.githubLink && <span className="error-text">{errors.githubLink}</span>}
              </div>
            )}
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            <Send size={18} /> Confirm Registration
          </button>
        </form>

        {submitted && (
          <div className="success-toast glass">
            <CheckCircle color="#10b981" />
            <span>Success! Registration confirmed for {category}.</span>
          </div>
        )}
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .modal-content {
          width: 100%;
          max-width: 700px;
          padding: 40px;
          border-radius: 30px;
          position: relative;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          background: none;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .modal-close:hover {
          color: white;
          transform: rotate(90deg);
        }

        .modal-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .modal-header h2 {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .modal-header p {
          color: var(--text-muted);
        }

        .error-banner {
            background: rgba(239, 68, 68, 0.1);
            color: #ef4444;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 0.9rem;
        }

        .modal-form .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 30px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.9rem;
          font-weight: 500;
        }

        .form-group input, .form-group select {
          padding: 12px 16px;
          background: rgba(15, 23, 42, 0.5);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
        }
        
        .form-group input:read-only {
            opacity: 0.7;
            cursor: not-allowed;
        }

        .form-group input.error, .form-group select.error {
          border-color: #ef4444;
        }

        .error-text {
          color: #ef4444;
          font-size: 0.75rem;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
        }

        .success-toast {
          position: absolute;
          bottom: -70px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 24px;
          background: rgba(6, 78, 59, 0.9);
          border: 1px solid #10b981;
          border-radius: 50px;
          white-space: nowrap;
          color: white;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 600px) {
          .modal-form .form-grid {
            grid-template-columns: 1fr;
          }
          .modal-content {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default RegistrationModal;
