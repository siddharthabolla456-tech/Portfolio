@echo off
title Siddhartha Bolla - MERN Stack Portfolio ^& AI Chatbot
echo ========================================================
echo  Siddhartha Bolla - MERN Stack Portfolio ^& AI Chatbot
echo  Tech Stack: MongoDB, Express.js, React.js, Node.js
echo ========================================================
echo.
echo Launching server and opening application...
echo.

:: Automatically open browser after 2 seconds
start "" powershell -NoProfile -Command "Start-Sleep -Seconds 2; Start-Process 'http://localhost:5000'"

:: Start the unified MERN server
node server/server.js
pause
