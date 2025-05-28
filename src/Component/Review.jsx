import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    review:
      "Sijan is an outstanding developer. He delivered everything ahead of schedule and with great attention to detail.",
    image: "/reviewer1.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Project Manager, DevAgency",
    review:
      "His work on our project was professional and efficient. Great communication and clean code.",
    image: "/reviewer2.jpg",
  },
  {
    name: "Ali Khan",
    role: "CTO, StartupX",
    review:
      "Sijan brought our vision to life. His UI/UX understanding is exceptional. Highly recommend.",
    image: "/reviewer3.jpg",
  },
 
];

function ReviewSection() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Detect which card is currently in view
  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-[#0B192C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          What Clients Say
        </h2>

        {/* Desktop view */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.role}
                  </p>
                </div>
              </div>
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden -mx-4 px-4">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto  scrollbar-hidden snap-x snap-mandatory scroll-smooth flex gap-4 w-full"
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="snap-center w-[90vw] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {review.role}
                    </p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {reviews.map((_, idx) => (
              <span
                key={idx}
                className={`w-2.5 h-2.5 rounded-full ${
                  idx === activeIndex ? "bg-blue-500 scale-125  dark:bg-white" : "bg-gray-400 opacity-50 dark:bg-gray-5000"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
