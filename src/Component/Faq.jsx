import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "I work with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, and Framer Motion."
  },
  {
    question: "Can I hire you for freelance work?",
    answer:
      "Yes! I'm available for freelance projects. You can contact me through the form or my email."
  },
  {
    question: "Is your portfolio responsive?",
    answer:
      "Yes, my portfolio is fully responsive and optimized for all devices including mobile and tablets."
  },
  {
    question: "Where are you located?",
    answer:
      "I’m based in Bangladesh but open to working with clients from all around the world."
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I build front-end websites, single-page apps, dashboards, and interactive UI using modern frameworks."
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white container mx-auto dark:bg-[#1e293b] py-10 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-gray-300 dark:border-gray-600 rounded-lg">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center p-4 text-left dark:text-white"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5  transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <div
                
                  className="overflow-hidden px-4 pb-4 transition-all duration-5000 ease-in-out text-gray-600 dark:text-gray-300"
                >
                  {faq.answer}
                </div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;
