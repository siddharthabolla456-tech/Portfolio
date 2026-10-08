import http.server
import socketserver
import webbrowser
import os

PORT = 8000

# Ensure working directory is the script's directory
os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler

print(f"🚀 Starting Siddhartha Bolla Portfolio & AI Chatbot Server at http://localhost:{PORT}")
print("📂 Serving files directly from current folder...")
print("Press Ctrl+C to stop the server.")

# Automatically open the browser
try:
    webbrowser.open(f"http://localhost:{PORT}")
except Exception:
    pass

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Server stopped.")
