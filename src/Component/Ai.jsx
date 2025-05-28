import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Ai = ({ isDark }) => {
  const [showMessenger, setShowMessenger] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messengerRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMessenger = () => {
    setShowMessenger((prev) => {
      const next = !prev;
      if (next && messages.length === 0) {
       setMessages([
  {
    text: "👋 Hello! I'm <strong>AlphaMind</strong>, your AI assistant. How can I assist you today?",
    sender: "ai",
  },
]);
      }
      return next;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        messengerRef.current &&
        !messengerRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowMessenger(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInputText("");
    setLoading(true);

    // Custom AI name response
    const nameQuery = /what(?:'s| is) your name|who are you|your name|are you google powered|you google powered|are you powered by google|are you trained by google|you trained by google|are you google powered\??/i;
    if (nameQuery.test(userMessage)) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: `<h2>I'm <strong>AlphaMind</strong> 🤖</h2><p>Your personal AI assistant. How can I help you today?</p>`,
            sender: "ai",
          },
        ]);
        setLoading(false);
      }, 500);
      return;
    }

    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyCagKQaEpKeXqTyUxAg4xAOb3FCeRM8kVw",
        {
          contents: [{ parts: [{ text: userMessage }], role: "user" }],
        }
      );

      const reply =
        response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";

      setMessages((prev) => [...prev, { text: reply, sender: "ai" }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "❌ Error: Unable to get response.", sender: "ai" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      {/* Floating Button */}
      <div
        ref={iconRef}
        className="fixed bottom-4 right-4 z-50"
      
      >
        <img
          src={isDark ? "/AID.png" : "/AI.png"}
          alt="AI Assistant"
          className="w-12 h-12 cursor-pointer rounded-full hover:shadow-xl transition-shadow"
          onClick={toggleMessenger}
        />
      </div>

      {/* Chat Messenger */}
      {showMessenger && (
        <div
          ref={messengerRef}
          className="fixed bottom-20 right-6 w-80 min-h-[70vh] max-h-[85vh] flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-2xl z-50 overflow-hidden"
          style={{ animation: "slideUpFade 0.35s ease forwards" }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 bg-gray-100 dark:bg-gray-800 border-b dark:border-gray-700">
            <div>
              <h1 className="text-lg font-extrabold text-gray-900 dark:text-white tracking-wide">
                AlphaMind
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Ask me anything
              </p>
            </div>
            <button
              onClick={() => setShowMessenger(false)}
              aria-label="Close Chat"
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition"
            >
              &#10005;
            </button>
          </div>

          {/* Messages */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3 hide-scrollbar"
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: isDark ? "#4b5563 transparent" : "#a0aec0 transparent",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`px-5 py-3 rounded-2xl text-sm max-w-[75%] break-words shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                  }`}
                  style={{
                    boxShadow:
                      msg.sender === "user"
                        ? "0 2px 6px rgba(59, 130, 246, 0.5)"
                        : "0 2px 6px rgba(156, 163, 175, 0.4)",
                  }}
                >
                  {msg.sender === "ai" ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded-2xl flex items-center space-x-1">
                  <span className="dot animate-bounce bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                  <span className="dot animate-bounce animation-delay-200 bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                  <span className="dot animate-bounce animation-delay-400 bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex gap-3 px-4 py-3 border-t dark:border-gray-700"
          >
            <textarea
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 resize-none h-12 px-4 py-2 text-sm border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 transition scrollbar-hidden"
              rows={1}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 disabled:bg-blue-400 text-white px-5 py-2 rounded-3xl hover:bg-blue-700 disabled:cursor-not-allowed transition"
            >
              Send
            </button>
          </form>

          {/* Styles */}
          <style>{`
            @keyframes slideUpFade {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }

            .hide-scrollbar::-webkit-scrollbar { width: 6px; }
            .hide-scrollbar::-webkit-scrollbar-track { background: transparent; }
            .hide-scrollbar::-webkit-scrollbar-thumb {
              background-color: rgba(107, 114, 128, 0.5);
              border-radius: 3px;
            }

            .dot {
              animation-name: bounce;
              animation-duration: 1.2s;
              animation-iteration-count: infinite;
              animation-timing-function: ease-in-out;
            }
            .animation-delay-200 { animation-delay: 0.2s; }
            .animation-delay-400 { animation-delay: 0.4s; }

            @keyframes bounce {
              0%, 80%, 100% { transform: translateY(0); }
              40% { transform: translateY(-6px); }
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Ai;
