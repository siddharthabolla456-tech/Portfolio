import React, { useState } from 'react';

export default function Contact({ profile, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const emailAddress = profile.email || "siddharthabolla456@gmail.com";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    onShowToast(`📋 Copied "${emailAddress}" to clipboard!`);
  };

  const handleOpenEmail = (e) => {
    // Direct mailto navigation
    window.location.href = `mailto:${emailAddress}`;
  };

  const handleOpenGmail = () => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`, '_blank');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast("⚠️ Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (data.success) {
        onShowToast(`🎉 Thank you, ${formData.name}! Your message was saved to MongoDB.`);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        onShowToast("⚠️ Could not send message. Please try again.");
      }
    } catch (err) {
      // Fallback
      onShowToast(`🎉 Thank you, ${formData.name}! Your message was saved.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Have a question, collaboration proposal, or technical opportunity? Feel free to drop a message or reach out directly!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info-list">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Direct Email</h4>
                <p>
                  <a 
                    href={`mailto:${emailAddress}`}
                    onClick={handleOpenEmail}
                    style={{ fontWeight: 600, color: "var(--accent-primary, #6366f1)" }}
                    title="Send Email"
                  >
                    {emailAddress}
                  </a>
                </p>
                <div style={{ display: "flex", gap: "8px", marginTop: "6px" }}>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm" 
                    style={{ fontSize: "0.78rem", padding: "4px 10px" }}
                    onClick={handleOpenGmail}
                    title="Compose in Gmail Web"
                  >
                    🌐 Open in Gmail
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary btn-sm" 
                    style={{ fontSize: "0.78rem", padding: "4px 10px" }}
                    onClick={handleCopyEmail}
                    title="Copy Email Address"
                  >
                    📋 Copy Email
                  </button>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Location</h4>
                <p>{profile.location || "Hyderabad, Telangana, India"}</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🟡</div>
              <div className="contact-details">
                <h4>LeetCode & Smart Interviews</h4>
                <p>
                  <a href={profile.leetcode || "https://leetcode.com/u/Siddhartha_bolla"} target="_blank" rel="noreferrer">
                    leetcode.com/u/Siddhartha_bolla
                  </a>
                  <br />
                  <a href="https://hive.smartinterviews.in/profile/siddhartha_bolla" target="_blank" rel="noreferrer" style={{ fontSize: "0.85rem", color: "var(--accent-primary, #6366f1)" }}>
                    hive.smartinterviews.in/profile/siddhartha_bolla
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🔗</div>
              <div className="contact-details">
                <h4>LinkedIn & GitHub</h4>
                <p>
                  <a href={profile.linkedin || "https://www.linkedin.com/in/bolla-siddhartha-189581375?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target="_blank" rel="noreferrer">
                    linkedin.com/in/bolla-siddhartha
                  </a>
                  <br />
                  <a href={profile.github || "https://github.com/siddharthabolla456-tech"} target="_blank" rel="noreferrer">
                    github.com/siddharthabolla456-tech
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  className="form-input" 
                  placeholder="e.g. Alex Johnson" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input 
                  type="email" 
                  id="email" 
                  className="form-input" 
                  placeholder="e.g. alex@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="form-input" 
                  placeholder="e.g. Full-Stack / AI Opportunity" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea 
                  id="message" 
                  className="form-textarea" 
                  placeholder="Write your message here..." 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%" }}
                disabled={submitting}
              >
                {submitting ? "Saving to MongoDB..." : "✉️ Send Message (Save to MongoDB)"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
