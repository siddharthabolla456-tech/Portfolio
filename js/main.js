/**
 * ============================================================================
 * Siddhartha Bolla - Portfolio Interactive Features & Controller
 * ============================================================================
 */

(function () {
  'use strict';

  // --- 1. Theme Toggle (Dark / Light Mode) ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('portfolio_theme');
  const currentTheme = savedTheme || (prefersDark ? 'dark' : 'dark'); // Default to dark for premium look

  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const activeTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Switched to ${newTheme} mode`);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.setAttribute('title', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
  }

  // --- 2. Mobile Navigation Toggle ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '☰';
      });
    });
  }

  // --- 3. Sticky Navbar & Active Section Highlighting ---
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Active Section Tracking
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNav = document.querySelector(`.nav-links a[href*='${sectionId}']`);

      if (targetNav) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNav.classList.add('active');
        } else {
          targetNav.classList.remove('active');
        }
      }
    });
  });

  // --- 4. Typewriter Effect in Hero Section ---
  const typewriterEl = document.getElementById('typewriter-text');
  if (typewriterEl) {
    const phrases = [
      "AI & Machine Learning Engineer",
      "Full-Stack Web Developer",
      "Competitive Programmer & Problem Solver",
      "FastAPI & React Architect"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 40;
      } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 90;
      }

      if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingDelay = 1800; // Pause when word is finished
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingDelay = 400; // Pause before typing new word
      }

      setTimeout(type, typingDelay);
    }

    type();
  }

  // --- 5. Interactive Animated Stats Counter ---
  const statNumbers = document.querySelectorAll('.stat-num');
  let statsCounted = false;

  function countUpStats() {
    statNumbers.forEach(stat => {
      const target = parseFloat(stat.getAttribute('data-target'));
      const isDecimal = target % 1 !== 0;
      const duration = 1500;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = isDecimal ? current.toFixed(1) : Math.floor(current) + (stat.getAttribute('data-suffix') || '');
      }, stepTime);
    });
  }

  // Trigger counters when stats section enters viewport
  const statsSection = document.querySelector('.stats-grid');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !statsCounted) {
          statsCounted = true;
          countUpStats();
        }
      });
    }, { threshold: 0.3 });
    observer.observe(statsSection);
  }

  // --- 6. Skills & Projects Category Filters ---
  const projectFilterBtns = document.querySelectorAll('.project-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  projectFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease-out';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 7. Resume Modal Controller ---
  const resumeModal = document.getElementById('resume-modal');
  const resumeModalClose = document.getElementById('resume-modal-close');
  const viewResumeBtns = document.querySelectorAll('.btn-view-resume');

  window.openResumeModal = function () {
    if (resumeModal) {
      resumeModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeResumeModal = function () {
    if (resumeModal) {
      resumeModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.openResumeModal();
    });
  });

  if (resumeModalClose) {
    resumeModalClose.addEventListener('click', () => window.closeResumeModal());
  }

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        window.closeResumeModal();
      }
    });
  }

  // Keyboard shortcut ESC to close modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeResumeModal();
      window.closeSettingsModal();
    }
  });

  // --- 8. AI Settings Modal Controller ---
  const settingsModal = document.getElementById('settings-modal');
  const settingsModalClose = document.getElementById('settings-modal-close');
  const settingsBtn = document.getElementById('chat-settings-btn');
  const saveApiKeyBtn = document.getElementById('save-api-key-btn');
  const apiKeyInput = document.getElementById('gemini-api-key-input');
  const openAiKeyInput = document.getElementById('openai-api-key-input');
  const activeModeTag = document.getElementById('active-ai-mode');

  window.openSettingsModal = function () {
    if (settingsModal) {
      if (apiKeyInput) {
        apiKeyInput.value = localStorage.getItem('gemini_api_key') || '';
      }
      if (openAiKeyInput) {
        openAiKeyInput.value = localStorage.getItem('openai_api_key') || '';
      }
      settingsModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeSettingsModal = function () {
    if (settingsModal) {
      settingsModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  };

  if (settingsBtn) {
    settingsBtn.addEventListener('click', () => window.openSettingsModal());
  }

  if (settingsModalClose) {
    settingsModalClose.addEventListener('click', () => window.closeSettingsModal());
  }

  if (settingsModal) {
    settingsModal.addEventListener('click', (e) => {
      if (e.target === settingsModal) {
        window.closeSettingsModal();
      }
    });
  }

  if (saveApiKeyBtn) {
    saveApiKeyBtn.addEventListener('click', () => {
      const geminiVal = apiKeyInput ? apiKeyInput.value.trim() : '';
      const openAiVal = openAiKeyInput ? openAiKeyInput.value.trim() : '';

      if (openAiVal) {
        localStorage.setItem('openai_api_key', openAiVal);
        showToast("✅ OpenAI ChatGPT Key saved! ChatGPT mode enabled.");
        if (activeModeTag) activeModeTag.textContent = "OpenAI ChatGPT Mode";
      } else {
        localStorage.removeItem('openai_api_key');
      }

      if (geminiVal) {
        localStorage.setItem('gemini_api_key', geminiVal);
        if (!openAiVal) {
          showToast("✅ Gemini API Key saved! Live Gemini mode enabled.");
          if (activeModeTag) activeModeTag.textContent = "Google Gemini Live Mode";
        }
      } else {
        localStorage.removeItem('gemini_api_key');
      }

      if (!openAiVal && !geminiVal) {
        showToast("ℹ️ Switched to default offline intelligent NLP engine.");
        if (activeModeTag) activeModeTag.textContent = "Offline Intelligent NLP";
      }

      window.closeSettingsModal();
    });
  }

  // --- 9. Contact Form Controller ---
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const subject = document.getElementById('contact-subject').value.trim();
      const message = document.getElementById('contact-message').value.trim();

      if (!name || !email || !message) {
        showToast("⚠️ Please fill in all required fields.");
        return;
      }

      // Friendly feedback toast
      showToast(`🎉 Thank you, ${name}! Your message is prepared.`);

      // Open email client with pre-filled content
      const mailtoLink = `mailto:siddharthabolla456@gmail.com?subject=${encodeURIComponent(subject || 'Portfolio Inquiry from ' + name)}&body=${encodeURIComponent("Sender: " + name + " (" + email + ")\n\n" + message)}`;
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 700);

      contactForm.reset();
    });
  }

  // --- 10. Toast Notification System ---
  window.showToast = function (message) {
    let container = document.getElementById('toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toast-container';
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = message;
    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(20px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

})();
