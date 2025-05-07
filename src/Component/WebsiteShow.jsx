import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActionAreaCard from "./Card";

const websites = [
  {
    id: 1,
    name: "DISASTERS",
    img: "/website1.png",
    link: "https://disaster-website.netlify.app/",
  },
  {
    id: 2,
    name: "governinDocs",
    img: "/website2.png",
    link: "https://ai-govs-docs.netlify.app/",
  },
  {
    id: 3,
    name: "thicker ai",
    img: "/website3.png",
    link: "https://tailwind-project-123.netlify.app/",
  },
  {
    id: 4,
    name: "wizia",
    img: "/wesite4.png",
    link: "https://wizia222.netlify.app/",
  },
  {
    id: 5,
    name: "Degic",
    img: "/website5.png",
    link: "https://react-app-1345432.netlify.app/",
  },
];

const WebsiteShow = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const childWidth = scrollRef.current.firstChild.offsetWidth + 16; // + gap
    const index = Math.round(scrollLeft / childWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", handleScroll);
      return () => scrollEl.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-[#0B192C] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Featured Projects
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ActionAreaCard
                name={site.name}
                image={site.img}
                link={site.link}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden -mx-4">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hidden snap-x snap-mandatory scroll-smooth px-4 pb-4 scrollbar-hide"
          >
            {websites.map((site, index) => (
              <motion.div
                key={site.id}
                className="snap-center w-[90vw] flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <ActionAreaCard
                  name={site.name}
                  image={site.img}
                  link={site.link}
                />
              </motion.div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center mt-4 gap-2">
            {websites.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-blue-500 scale-125  dark:bg-white"
                    : "bg-gray-400 opacity-50 dark:bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteShow;
