
import React from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: any;
  }
}

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Initialize Meta Pixel if not present
    if (!window.fbq) {
      window.fbq = function() {
        window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
      };
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];
    }

    // Load Meta Pixel script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.onload = () => {
      window.fbq('init', '734584299538169');
      // Track both PageView and Lead events
      window.fbq('track', 'PageView');
      window.fbq('track', 'Lead');  // Important: Track conversion event
    };
    document.head.appendChild(script);
    // Add noscript fallback
    if (!document.getElementById('fb-pixel-noscript')) {
      const noscript = document.createElement("noscript");
      noscript.id = 'fb-pixel-noscript';
      noscript.innerHTML = `<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=734584299538169&ev=PageView&noscript=1'/>`;
      document.body.appendChild(noscript);
    }
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f8ff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Segoe UI, Arial, sans-serif"
    }}>
      <div style={{
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 4px 24px rgba(1, 117, 194, 0.08)",
        padding: "2.5rem 2rem",
        maxWidth: 370,
        width: "100%",
        textAlign: "center",
        animation: "fadeIn 0.8s"
      }}>
        <h1 style={{
          fontSize: "1.7rem",
          marginBottom: "1rem",
          color: "#0175C2",
          fontWeight: 600
        }}>✅ You're Booked!</h1>
        <p style={{
          fontSize: "1.05rem",
          color: "#222",
          marginBottom: "1rem"
        }}>
          Thanks for scheduling your free website build call. We'll contact you shortly to confirm the details.
        </p>
        <div style={{ fontSize: "0.95rem", color: "#555", marginBottom: "1.5rem" }}>
          We build your site for free — no templates, no upfront cost. Just results.
        </div>
        <a href="/" style={{
          display: "inline-block",
          background: "#0175C2",
          color: "#fff",
          fontSize: "1rem",
          fontWeight: 500,
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: 8,
          textDecoration: "none",
          boxShadow: "0 2px 8px rgba(1,117,194,0.07)",
          transition: "background 0.2s",
          cursor: "pointer"
        }}>Back to Homepage</a>
        <div style={{ marginTop: "2rem", color: "#0175C2", fontSize: "1.3rem" }}>
          <span aria-label="5 stars" role="img">★★★★★</span>
          <div style={{ fontSize: "0.95rem", color: "#222", marginTop: "0.3rem" }}>
            Trusted by small businesses across the U.S.
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 600px) {
          div[style*='background: #fff'] {
            padding: 1.5rem 0.7rem !important;
            max-width: 98vw !important;
          }
          h1 {
            font-size: 1.2rem !important;
          }
          p {
            font-size: 0.98rem !important;
          }
          a {
            font-size: 0.95rem !important;
            padding: 0.7rem 1.1rem !important;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
