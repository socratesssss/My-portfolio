import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ActionAreaCard from "../Card";

const websites = [
  { id :7,
    name:"E-commerce site",
    img:'/ecom.png',
    link:'https://e-commers-site-qwe.netlify.app/',
    des:""
    
  },
  {
    id: 1,
    name: "My AI Model",
    img: "/alpha.png",
    link: "https://alpha-ai-robo.netlify.app/",
    des: "AlphaMind is an AI-powered chatbot designed to assist users with a variety of tasks. Built using the React framework, it offers a user-friendly interface that facilitates seamless interactions. While the website doesnt provide extensive details about its underlying technology, the chatbot appears to be capable of handling general inquiries and providing information on a range of topics.",
  },

  {
    id: 2,
    name: "GoverninDocs",
    img: "/website2.jpg",
    link: "https://ai-govs-docs.netlify.app/",
  },
  {
    id: 3,
    name: "Thicker ai",
    img: "/website3.jpg",
    link: "https://tailwind-project-123.netlify.app/",
  },
  {
    id: 4,
    name: "Wizia",
    img: "/wesite4.jpg",
    link: "https://wizia222.netlify.app/",
  },
  {
    id: 5,
    name: "Degic",
    img: "/website5.jpg",
    link: "https://react-app-1345432.netlify.app/",
  },
    {
    id: 6,
    name: "DISASTERS",
    img: "/website1.jpg",
    link: "https://disaster-website.netlify.app/",
    des: "The website appears to be a basic template for a disaster information platform, built using Vite and React. It seems to serve as a foundational structure for developers or organizations aiming to create a disaster response or emergency information site.",
  }
];

const WebsiteShow = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const childWidth = scrollRef.current.firstChild.offsetWidth + 10; // + gap
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
    <section className="py-16 bg-white dark:bg-gray-900 ">
      <div className="container px-4 mx-auto">
        <h2 className="pb-12 text-3xl font-bold text-center text-[#00cfef] md:text-4xl ">
          Featured Projects
        </h2>

        {/* Desktop Grid */}
        <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {websites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <ActionAreaCard
                name={site.name}
                image={site.img}
                link={site.link}
                des={site.des}
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className=" md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 px-4 pb-4 overflow-x-auto overflow-y-hidden scrollbar-hidden snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {websites.map((site, index) => (
              <motion.div
                key={site.id}
                className="snap-center w-[90vw] flex-shrink-0"
                {...(index === 0 && {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: 0 },
                })}
              >
                <ActionAreaCard
                  name={site.name}
                  image={site.img}
                  link={site.link}
                  des={site.des}
                />
              </motion.div>
            ))}
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center gap-2 mt-4">
            {websites.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-[#00BDDF] scale-125  dark:bg-white"
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
