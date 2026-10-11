import React, { useState, useEffect, useRef } from 'react';

export default function Chatbot({ onOpenResume, onOpenSettings, promptTrigger }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am Siddhartha's Advanced Profile Assistant built with the MERN stack. Ask me about his projects, skills, 9.45 CGPA at VNR VJIET, 200+ solved LeetCode challenges, or resume!",
      html: `
        <p>👋 Hello! I am <strong>Siddhartha's Profile Assistant</strong> powered by the MERN stack.</p>
        <p>Ask me anything about his projects, skills, 9.45 CGPA at VNR VJIET, 200+ solved LeetCode challenges, or resume!</p>
        <p style="font-size:0.8rem; color:var(--text-secondary); margin-top:4px;">💡 <em>Try clicking any prompt chip below!</em></p>
      `,
      actions: [],
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [ttsEnabled, setTtsEnabled] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const audioCtxRef = useRef(null);
  const recognitionRef = useRef(null);

  // Initialize Web Audio API
  useEffect(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtxRef.current = new AudioContext();
      }
    } catch (e) {
      console.warn("Web Audio not supported", e);
    }

    // Initialize Speech Recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
        handleSend(transcript);
        setIsRecording(false);
      };
      recognition.onerror = () => setIsRecording(false);
      recognition.onend = () => setIsRecording(false);

      recognitionRef.current = recognition;
    }
  }, []);

  // Handle external prompt triggers (e.g. from Hero or Project buttons)
  useEffect(() => {
    if (promptTrigger) {
      setIsOpen(true);
      setHasUnread(false);
      handleSend(promptTrigger);
    }
  }, [promptTrigger]);

  // Scroll to bottom on message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const playSound = (type) => {
    if (!soundEnabled || !audioCtxRef.current) return;
    try {
      if (audioCtxRef.current.state === 'suspended') audioCtxRef.current.resume();
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();

      if (type === 'send') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(587.33, audioCtxRef.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, audioCtxRef.current.currentTime + 0.08);
      } else {
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(523.25, audioCtxRef.current.currentTime);
        osc.frequency.exponentialRampToValueAtTime(659.25, audioCtxRef.current.currentTime + 0.12);
      }

      gain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.12);
    } catch (e) {}
  };

  const speakText = (text) => {
    if (!ttsEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const clean = text.replace(/<[^>]*>?/gm, '').replace(/[*_#`]/g, '');
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 1.05;
    window.speechSynthesis.speak(utterance);
  };

  const toggleMic = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in this browser. Please type your query.");
      return;
    }
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsRecording(true);
      } catch (e) {
        setIsRecording(false);
      }
    }
  };

  const handleSend = async (messageText) => {
    const textToSend = (messageText || input).trim();
    if (!textToSend || isTyping) return;

    setInput('');
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages(prev => [...prev, {
      sender: 'user',
      text: textToSend,
      time: timeStr
    }]);

    playSound('send');
    setIsTyping(true);

    try {
      // POST query to Express backend API (which logs it in MongoDB!)
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend })
      });

      const data = await res.json();
      const botReply = data.data?.reply || "I am here to assist you!";
      const botHtml = data.data?.html || `<p>${botReply}</p>`;
      const botActions = data.data?.actions || [];

      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: botReply,
          html: botHtml,
          actions: botActions,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        playSound('receive');
        speakText(botReply);
      }, 300);

    } catch (err) {
      // Offline fallback
      setTimeout(() => {
        setIsTyping(false);
        const fallbackText = "Siddhartha Bolla is pursuing B.Tech in CSE (AI & ML) at VNR VJIET (CGPA: 9.45, Batch 2025–2029). Ask about his projects like KrishiLink AI or his 200+ LeetCode problems!";
        setMessages(prev => [...prev, {
          sender: 'bot',
          text: fallbackText,
          html: `<p>${fallbackText}</p>`,
          actions: [
            { label: "View Resume", type: "modal", target: "resume" },
            { label: "LeetCode Profile", type: "link", url: "https://leetcode.com/u/Siddhartha_bolla" }
          ],
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
        playSound('receive');
        speakText(fallbackText);
      }, 300);
    }
  };

  const handleActionClick = (action) => {
    if (action.type === 'modal' && action.target === 'resume') {
      onOpenResume();
    } else if (action.type === 'scroll') {
      const el = document.getElementById(action.target);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (action.type === 'link') {
      window.open(action.url, '_blank');
    } else if (action.type === 'download') {
      window.location.href = action.url;
    }
  };

  const suggestionChips = [
    "What projects has Siddhartha worked on?",
    "What technologies does he know?",
    "Show me his resume",
    "What are his coding profiles?",
    "Tell me about his CGPA and education",
    "Connect me with ChatGPT"
  ];

  return (
    <div className="chatbot-wrapper" id="chatbot-wrapper">
      {/* Floating Launcher Button */}
      <button 
        className="chatbot-launcher" 
        onClick={() => {
          setIsOpen(!isOpen);
          setHasUnread(false);
          playSound('send');
        }}
        aria-label="Open AI Assistant"
      >
        <span>💬</span>
        {hasUnread && <span className="chatbot-badge">1</span>}
        <div className="chatbot-tooltip">Ask me anything about Siddhartha! 🤖</div>
      </button>

      {/* Chat Window */}
      <div className={`chatbot-window ${isOpen ? 'open' : ''} ${isMaximized ? 'maximized' : ''}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-bot-avatar">🤖</div>
            <div>
              <div className="chat-header-title">Siddhartha MERN Assistant</div>
              <div className="chat-header-status">
                <span className="status-dot"></span>
                <span>MongoDB Logged NLP</span>
              </div>
            </div>
          </div>

          <div className="chat-header-actions">
            <a 
              href="https://chatgpt.com" 
              target="_blank" 
              rel="noreferrer" 
              className="chat-header-btn" 
              title="Open ChatGPT (chatgpt.com)"
              style={{ textDecoration: 'none' }}
            >
              🌐
            </a>

            <button 
              className={`chat-header-btn ${soundEnabled ? 'active' : ''}`}
              onClick={() => setSoundEnabled(!soundEnabled)}
              title={soundEnabled ? "Sound FX: On" : "Sound FX: Off"}
            >
              🔔
            </button>

            <button 
              className={`chat-header-btn ${ttsEnabled ? 'active' : ''}`}
              onClick={() => {
                setTtsEnabled(!ttsEnabled);
                if (!ttsEnabled) speakText("Voice output enabled.");
              }}
              title={ttsEnabled ? "Read Aloud: On" : "Read Aloud: Off"}
            >
              🗣️
            </button>

            <button 
              className="chat-header-btn"
              onClick={onOpenSettings}
              title="AI Settings"
            >
              ⚙️
            </button>

            <button 
              className="chat-header-btn"
              onClick={() => setMessages([])}
              title="Clear Chat"
            >
              🗑️
            </button>

            <button 
              className="chat-header-btn"
              onClick={() => setIsMaximized(!isMaximized)}
              title={isMaximized ? "Restore Window" : "Maximize Window"}
            >
              {isMaximized ? '🗗' : '⛶'}
            </button>

            <button 
              className="chat-header-btn"
              onClick={() => setIsOpen(false)}
              title="Close Chat"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div className={`message ${msg.sender}`} key={idx}>
              <div className="message-avatar">
                {msg.sender === 'bot' ? '🤖' : '👤'}
              </div>
              <div className="message-bubble">
                <div 
                  className="message-content" 
                  dangerouslySetInnerHTML={{ __html: msg.html || msg.text }} 
                />
                
                {msg.actions && msg.actions.length > 0 && (
                  <div className="chat-btn-group" style={{ marginTop: "8px", flexWrap: "wrap", gap: "6px" }}>
                    {msg.actions.map((act, aIdx) => (
                      <button 
                        key={aIdx} 
                        className="chat-btn chat-btn-primary"
                        onClick={() => handleActionClick(act)}
                      >
                        {act.label}
                      </button>
                    ))}
                  </div>
                )}

                <div className="message-time">{msg.time}</div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="message bot">
              <div className="message-avatar">🤖</div>
              <div className="typing-indicator">
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
                <span className="typing-dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggestion Chips */}
        <div className="chat-suggestions">
          {suggestionChips.map((chip, idx) => (
            <button 
              key={idx} 
              className="suggestion-chip"
              onClick={() => handleSend(chip)}
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="chat-input-bar">
          <button 
            className={`chat-tool-btn ${isRecording ? 'recording' : ''}`}
            onClick={toggleMic}
            title={isRecording ? "Listening..." : "Speak query"}
          >
            🎤
          </button>
          <input 
            type="text" 
            className="chat-input"
            placeholder="Ask about MERN stack, 9.45 CGPA, resume..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSend();
            }}
          />
          <button 
            className="chat-send-btn" 
            onClick={() => handleSend()}
            title="Send Message"
          >
            ➔
          </button>
        </div>
      </div>
    </div>
  );
}
