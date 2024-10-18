"use client";

import { motion } from "framer-motion";
import service from "../constants/service";
import { useEffect, useState } from "react";

const cardVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
  hover: { rotate: 10, transition: { duration: 0.3 } },
};

const Services = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="services" className="py-16 lg:mt-16 px-6 lg:px-16 bg-white text-center">
      <h2 className="text-3xl lg:text-6xl font-bold text-primary-blue mb-6 lg:mb-20">
        Our Services
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {service.map(({ title, text }, index) => (
          <motion.div
            key={index}
            className="p-8 rounded-lg shadow-lg bg-white border"
            initial="hidden"
            animate="visible"
            whileHover={isLargeScreen ? "hover" : ""}
            variants={cardVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary-blue">
              {title}
            </h3>
            <p className="text-sm lg:text-lg text-primary-slate">{text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
