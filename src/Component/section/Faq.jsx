import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you use?",
    answer:
      "I work with HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, TypeScript, and Framer Motion.",
  },
  {
    question: "How will I manage my website / web application ?",
    answer:
      "You will get an admin panel along with a guide document.",
  },
  {
    question: "Is your portfolio responsive?",
    answer:
      "Yes, my portfolio is fully responsive and optimized for all devices including mobile and tablets.",
  },
  {
    question: "Where are you located?",
    answer:
      "I’m based in Bangladesh but open to working with clients from all around the world.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I build front-end websites, single-page apps, dashboards, and interactive UI using modern frameworks.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="container px-4 py-10 mx-auto bg-white dark:bg-gray-900 md:px-20"
    >
      <h2 className="mb-6 text-3xl font-bold text-center text-[#00cfef]">
        Frequently Asked Questions
      </h2>

      <motion.div
        className="max-w-3xl mx-auto space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="border border-gray-300 rounded-lg dark:border-gray-600"
          >
            <button
              onClick={() => toggle(i)}
              className="flex items-center justify-between w-full p-4 text-left dark:text-white"
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-200 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
<AnimatePresence initial={false}>
  {openIndex === i && (
    <motion.div
      initial={false}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0 }} // No animation on open
      className="px-4 pb-4 overflow-hidden text-gray-600 dark:text-gray-300"
    >
      {faq.answer}
    </motion.div>
  )}
</AnimatePresence>




          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default FaqSection;
