import React, { useState, useEffect } from 'react';

export default function SettingsModal({ isOpen, onClose, onShowToast }) {
  const [openAiKey, setOpenAiKey] = useState('');
  const [geminiKey, setGeminiKey] = useState('');

  useEffect(() => {
    if (isOpen) {
      setOpenAiKey(localStorage.getItem('openai_api_key') || '');
      setGeminiKey(localStorage.getItem('gemini_api_key') || '');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (openAiKey.trim()) {
      localStorage.setItem('openai_api_key', openAiKey.trim());
      onShowToast("✅ OpenAI ChatGPT API Key saved!");
    } else {
      localStorage.removeItem('openai_api_key');
    }

    if (geminiKey.trim()) {
      localStorage.setItem('gemini_api_key', geminiKey.trim());
      if (!openAiKey.trim()) onShowToast("✅ Google Gemini API Key saved!");
    } else {
      localStorage.removeItem('gemini_api_key');
    }

    if (!openAiKey.trim() && !geminiKey.trim()) {
      onShowToast("ℹ️ Switched to default MERN Offline NLP Engine.");
    }

    onClose();
  };

  return (
    <div className="modal-backdrop open" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-box" style={{ maxWidth: "500px" }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">⚙️ AI Assistant Settings</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        <div className="modal-body">
          <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "1rem" }}>
            By default, this chatbot uses the <strong>MERN Autonomous NLP Engine</strong> that runs on ANY computer with zero setup, zero cost, and zero API keys!
          </p>
          <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            If you wish to connect live ChatGPT or Gemini, enter your optional keys below:
          </p>

          <div className="form-group">
            <label className="form-label" htmlFor="openai-key">Optional OpenAI / ChatGPT API Key</label>
            <input 
              type="password" 
              id="openai-key" 
              className="form-input" 
              placeholder="sk-proj-..." 
              value={openAiKey}
              onChange={(e) => setOpenAiKey(e.target.value)}
            />
            <small style={{ color: "var(--text-muted)", fontSize: "0.78rem", display: "block", marginTop: "3px" }}>
              Enables OpenAI GPT-4o-mini inside this chatbot.
            </small>
          </div>

          <div className="form-group" style={{ marginTop: "12px" }}>
            <label className="form-label" htmlFor="gemini-key">Optional Google Gemini API Key</label>
            <input 
              type="password" 
              id="gemini-key" 
              className="form-input" 
              placeholder="AIzaSy..." 
              value={geminiKey}
              onChange={(e) => setGeminiKey(e.target.value)}
            />
            <small style={{ color: "var(--text-muted)", fontSize: "0.78rem", display: "block", marginTop: "3px" }}>
              Enables Google Gemini 1.5 Flash inside this chatbot.
            </small>
          </div>
        </div>

        <div className="resume-actions-bar">
          <button className="btn btn-secondary btn-sm" onClick={onClose}>Cancel</button>
          <button className="btn btn-primary btn-sm" onClick={handleSave}>Save Settings</button>
        </div>
      </div>
    </div>
  );
}
