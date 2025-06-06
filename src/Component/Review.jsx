import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const reviews = [
    {
    name: "Elon Musk",
    role: "Tesla  Chief Executive Officer",
    review:
      "Sijan brought our vision to life. His UI/UX understanding is exceptional. Highly recommend.",
    image: "/elon.webp",
  },
  {
    name: "Cristiano Ronaldo",
    role: "Captain of Al-Nassr",
    review:
      "Sijan is an outstanding developer. He delivered everything ahead of schedule and with great attention to detail.",
    image: "/ronaldo.jpg",
  },
  {
    name: "Tony Stark",
    role: "Project Manager, DevAgency",
    review:
      "His work on our project was professional and efficient. Great communication and clean code.",
    image: "/Tony-Stark.webp",
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
    <section className="bg-white py-16  dark:bg-[url('/bg1.jpg')]  bg-fixed bg-cover bg-center bg-no-repeat">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center  md:text-4xl text-[#00cfef]">
          What Clients Say
        </h2>

        {/* Desktop view */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-md dark:bg-gray-800 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="object-cover w-12 h-12 rounded-full"
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
                  <span key={i} className="text-lg text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
      <div className="px-4 -mx-4 md:hidden">
  <div
    ref={scrollRef}
    onScroll={handleScroll}
    className="flex w-full gap-4 overflow-x-auto scrollbar-hidden snap-x snap-mandatory scroll-smooth"
  >
    {reviews.map((review, index) => {
      const Card = index === 0 ? motion.div : 'div';
      return (
        <Card
          key={index}
          className="snap-center w-[90vw] bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex-shrink-0"
          {...(index === 0 && {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.2 },
          })}
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={review.image}
              alt={review.name}
              className="object-cover w-12 h-12 rounded-full"
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
              <span key={i} className="text-lg text-yellow-400">★</span>
            ))}
          </div>
          <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
        </Card>
      );
    })}
  </div>

  {/* Dot indicators */}
  <div className="flex justify-center mt-4 space-x-2">
    {reviews.map((_, idx) => (
      <span
        key={idx}
        className={`w-2.5 h-2.5 rounded-full ${
          idx === activeIndex
            ? "bg-[#00BDDF] scale-125 dark:bg-white"
            : "bg-gray-400 opacity-50 dark:bg-gray-500"
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
