import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CodingProfiles from './components/CodingProfiles';
import ResumeSection from './components/ResumeSection';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import SettingsModal from './components/SettingsModal';
import Footer from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio_theme') || 'dark');
  const [profile, setProfile] = useState({});
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [codingProfiles, setCodingProfiles] = useState([]);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [promptTrigger, setPromptTrigger] = useState('');
  const [toasts, setToasts] = useState([]);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    showToast(`Switched to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  };

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3500);
  };

  // Fetch initial data from Express + MongoDB backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profRes, projRes, skillRes, codeRes] = await Promise.all([
          fetch('/api/profile').then(r => r.json()),
          fetch('/api/projects').then(r => r.json()),
          fetch('/api/skills').then(r => r.json()),
          fetch('/api/coding-profiles').then(r => r.json())
        ]);

        if (profRes.success) setProfile(profRes.data);
        if (projRes.success) setProjects(projRes.data);
        if (skillRes.success) setSkills(skillRes.data);
        if (codeRes.success) setCodingProfiles(codeRes.data);
      } catch (err) {
        console.warn("Backend API fetching fallback:", err);
      }
    };

    fetchData();
  }, []);

  const handleAskBot = (prompt) => {
    setPromptTrigger('');
    setTimeout(() => setPromptTrigger(prompt), 50);
  };

  return (
    <div className="app-root">
      {/* Dynamic Background Orbs */}
      <div className="bg-mesh" aria-hidden="true">
        <div className="mesh-circle-1"></div>
        <div className="mesh-circle-2"></div>
        <div className="mesh-circle-3"></div>
      </div>

      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setResumeOpen(true)} 
      />

      <Hero 
        profile={profile} 
        onAskBot={handleAskBot} 
      />

      <About 
        profile={profile} 
      />

      <Skills 
        skills={skills} 
      />

      <Projects 
        projects={projects} 
        onAskBot={handleAskBot} 
      />

      <CodingProfiles 
        profiles={codingProfiles} 
        onAskBot={handleAskBot} 
      />

      <ResumeSection 
        onOpenResume={() => setResumeOpen(true)} 
        onAskBot={handleAskBot} 
      />

      <Contact 
        profile={profile} 
        onShowToast={showToast} 
      />

      <Footer />

      {/* Floating AI Chatbot Widget */}
      <Chatbot 
        onOpenResume={() => setResumeOpen(true)}
        onOpenSettings={() => setSettingsOpen(true)}
        promptTrigger={promptTrigger}
      />

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      {/* AI Settings Modal */}
      <SettingsModal 
        isOpen={settingsOpen} 
        onClose={() => setSettingsOpen(false)} 
        onShowToast={showToast} 
      />

      {/* Toast Notifications */}
      <div className="toast-container" id="toast-container">
        {toasts.map(toast => (
          <div className="toast" key={toast.id}>
            {toast.message}
          </div>
        ))}
      </div>
    </div>
  );
}
