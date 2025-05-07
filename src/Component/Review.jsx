import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    review: "Sijan is an outstanding developer. He delivered everything ahead of schedule and with great attention to detail.",
    image: "/avatars/john.jpg",
  },
  {
    name: "Sarah Smith",
    role: "Project Manager, DevAgency",
    review: "His work on our project was professional and efficient. Great communication and clean code.",
    image: "/avatars/sarah.jpg",
  },
  {
    name: "Ali Khan",
    role: "CTO, StartupX",
    review: "Sijan brought our vision to life. His UI/UX understanding is exceptional. Highly recommend.",
    image: "/avatars/ali.jpg",
  },
];

function ReviewSection() {
  return (
    <section className="bg-gray-100 dark:bg-[#0B192C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          What Clients Say
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
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
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{review.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{review.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
