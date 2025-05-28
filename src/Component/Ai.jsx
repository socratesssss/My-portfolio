import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const Ai = ({ isDark }) => {
  const [showMessenger, setShowMessenger] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messengerRef = useRef(null);
  const iconRef = useRef(null);
  const messagesEndRef = useRef(null);
  const soundRef = useRef(null);

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

    // Hide notification if chat is opened
    setShowNotification(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  // Show notification after 5s on every visit/refresh
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(true);
      soundRef.current?.play();

      // Auto-hide notification after 5s
      setTimeout(() => {
        setShowNotification(false);
      }, 15000);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = inputText.trim();
    setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
    setInputText("");
    setLoading(true);

    const nameQuery = /what(?:'s| is) your name|who are you|your name|are you google powered|you google powered|are you powered by google|are you trained by google|you trained by google|are you google powered\??/i;
    if (nameQuery.test(userMessage)) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "I'm <strong>AlphaMind</strong> 🤖<br>Your personal AI assistant. How can I help you today?",
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
        response.data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response";

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
      {/* Sound Effect */}
      <audio ref={soundRef} src="/notify.mp3" preload="auto" />

      {/* Floating Button */}
      <div ref={iconRef} className="fixed bottom-4 right-4 z-50">
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
          className="fixed bottom-16 sm:bottom-20 right-6 w-80 min-h-[70svh] max-h-[85svh] flex flex-col rounded-3xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-2xl z-50 overflow-hidden animate-slideUpFade"
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
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-3 py-3 rounded-2xl text-sm max-w-[90%] break-words shadow-sm ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                  }`}
                >
                  {msg.sender === "ai" ? (
                    <div dangerouslySetInnerHTML={{ __html: msg.text }} />
                  ) : (
                    msg.text
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-300 dark:bg-gray-600 px-4 py-2 rounded-2xl flex items-center space-x-1">
                  <span className="dot animate-bounce bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                  <span className="dot animate-bounce animation-delay-200 bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                  <span className="dot animate-bounce animation-delay-400 bg-gray-500 dark:bg-gray-300 rounded-full w-2 h-2 inline-block"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
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
              className="flex-1 resize-none h-10 px-4 py-2 text-sm border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-blue-400 transition scrollbar-hidden"
              rows={1}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 disabled:bg-blue-400 text-white px-5 rounded-3xl hover:bg-blue-700 disabled:cursor-not-allowed transition"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {/* Notification */}
       {showNotification && !showMessenger && (
        <div className="fixed bottom-20 right-6 z-50  animate-fadeIn">
          <div className="relative max-w-xs bg-white text-gray-900 shadow-md dark:bg-white p-4 rounded-2xl  text-sm font-medium">
            👋 Hello! I'm <strong>AlphaMind</strong>, your AI assistant. How can I assist you today?
            {/* Speech bubble tail */}
            <div className="absolute bottom-[-8px] right-4 w-4 h-4 shadow-md bg-white rotate-45 "></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ai;
