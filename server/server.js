const express = require('express');
const cors = require('cors');
const path = require('path');
const { connectDB } = require('./config/db');
const apiRoutes = require('./routes/api');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB (with auto-seed & graceful fallback)
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api', apiRoutes);
app.use('/api/chat', chatRoutes);

// Serve static assets directory (images, resume, etc.)
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Direct convenience endpoints for root static files
app.get('/resume.pdf', (req, res) => {
  const resumePath = path.join(__dirname, '../assets/resume.pdf');
  res.sendFile(resumePath);
});

app.get('/profile.jpg', (req, res) => {
  const profilePath = path.join(__dirname, '../assets/profile.jpg');
  res.sendFile(profilePath);
});

// Serve compiled React frontend from client/dist if present
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientDistPath));

// For SPA routing, redirect unmatched GET requests to React's index.html
app.get('*', (req, res) => {
  const indexHtml = path.join(clientDistPath, 'index.html');
  res.sendFile(indexHtml, (err) => {
    if (err) {
      // If client is not built yet, inform user
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
        <head><title>Siddhartha Bolla MERN Portfolio</title></head>
        <body style="font-family:sans-serif;text-align:center;padding:50px;">
          <h2>🚀 Siddhartha Bolla MERN Stack Portfolio Server is Running!</h2>
          <p>MongoDB Status: <strong>${global.isMongoConnected ? '✅ Connected' : '⚠️ Offline fallback active'}</strong></p>
          <p>APIs available at <a href="/api/profile">/api/profile</a>, <a href="/api/projects">/api/projects</a>, <a href="/api/skills">/api/skills</a></p>
          <p>Please run <code>npm run build</code> in the root directory to build the React frontend, or run <code>npm run dev</code> for development mode.</p>
        </body>
        </html>
      `);
    }
  });
});

app.listen(PORT, () => {
  console.log(`\n========================================================`);
  console.log(`🚀 Siddhartha Bolla — MERN Stack Application Live!`);
  console.log(`🌐 Server Running at: http://localhost:${PORT}`);
  console.log(`📊 API Endpoints:     http://localhost:${PORT}/api/profile`);
  console.log(`🤖 Chatbot API:       http://localhost:${PORT}/api/chat`);
  console.log(`📄 Verified Resume:   http://localhost:${PORT}/resume.pdf`);
  console.log(`========================================================\n`);
});
